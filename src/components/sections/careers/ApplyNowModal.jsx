/**
 * ApplyNowModal.jsx — Careers page job application form modal
 *
 * EMAIL DESTINATION NOTE:
 *   The "To Email" address (where applications are delivered) is configured
 *   inside your EmailJS dashboard template settings — NOT in this file.
 *   Go to: emailjs.com → Email Templates → your template → "To Email" field.
 *
 * EMAILJS TEMPLATE VARIABLES:
 *   All keys in the `templateParams` object below must exactly match the
 *   {{variable}} placeholders you define in your EmailJS template body:
 *
 *   {{position}}          – Job title
 *   {{job_type}}          – "Internship" or "Full Time"
 *   {{full_name}}         – Applicant's full name
 *   {{applicant_email}}   – Applicant's email
 *   {{phone}}             – Applicant's phone
 *   {{employment_status}} – Student / Fresher / Currently Employed
 *   {{experience}}        – Experience bracket selected
 *   {{skills}}            – Free-text skills
 *   {{portfolio_link}}    – Portfolio / LinkedIn URL
 *   {{cover_letter}}      – Optional cover letter message
 *   {{resume_name}}       – Uploaded file name
 *   {{resume_size}}       – Uploaded file size (KB)
 *   {{resume_attachment}} – base64 data URI (files ≤ 50 KB) or a text note
 *
 * ENV VARIABLES (set in .env — never commit real values):
 *   VITE_EMAILJS_SERVICE_ID   – Email Services → Service ID
 *   VITE_EMAILJS_TEMPLATE_ID  – Email Templates → Template ID
 *   VITE_EMAILJS_PUBLIC_KEY   – Account → API Keys → Public Key
 */
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";
import { Turnstile } from "@marsidev/react-turnstile";
import {
  X,
  User,
  Mail,
  Phone,
  Briefcase,
  Link,
  FileText,
  MessageSquare,
  CheckCircle2,
  XCircle,
  Upload,
  ChevronDown,
  Loader2,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Shared input className helpers
───────────────────────────────────────────── */
const inputBase =
  "w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/10";

const inputError =
  "border-red-400 bg-red-50 focus:border-red-400 focus:ring-red-400/10";

/* ─────────────────────────────────────────────
   Field wrapper with label + optional error
───────────────────────────────────────────── */
function Field({ label, htmlFor, required, error, children }) {
  const errorId = htmlFor ? `${htmlFor}-error` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-xs font-bold uppercase tracking-[0.15em] text-slate-700">
        {label}
        {required && (
          <span className="ml-1 text-orange-500" aria-hidden="true">*</span>
        )}
      </label>
      {children}
      {error && (
        <p id={errorId} className="text-xs font-medium text-red-500" aria-live="polite">{error}</p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Empty form state
───────────────────────────────────────────── */
const EMPTY_FORM = {
  fullName: "",
  email: "",
  phone: "",
  employmentStatus: "",
  experience: "",
  skills: "",
  portfolioLink: "",
  resume: null,
  coverLetter: "",
  website: "",
};

/* ─────────────────────────────────────────────
   Framer Motion Constants
───────────────────────────────────────────── */
const BACKDROP_ANIM = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const MODAL_ANIM = {
  initial: { opacity: 0, y: 28, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 28, scale: 0.96 }
};

const MODAL_TRANSITION = { duration: 0.3, ease: [0.32, 0.72, 0, 1] };

const SUCCESS_ANIM = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 }
};

const ERROR_ANIM = {
  initial: { opacity: 0, y: -6 },
  animate: { opacity: 1, y: 0 }
};

/* ─────────────────────────────────────────────
   Main modal component
───────────────────────────────────────────── */
export default function ApplyNowModal({ job, onClose }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("apply_now_cooldown_until");
    if (stored) {
      const remaining = Math.max(0, parseInt(stored, 10) - Date.now());
      if (remaining > 0) {
        setCooldown(Math.ceil(remaining / 1000));
      } else {
        localStorage.removeItem("apply_now_cooldown_until");
      }
    }
  }, []);

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            localStorage.removeItem("apply_now_cooldown_until");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  useEffect(() => {
    if (cooldown === 0 && submitError.includes("seconds before submitting")) {
      setSubmitError("");
    }
  }, [cooldown, submitError]);

  /* ── Dev-time env-var guard ─────────────────────────────────
     Fires once on mount. Logs a clear warning in the browser
     console if any EmailJS credential is missing/undefined so
     you can debug setup issues immediately. Remove or silence
     this block once the app is fully configured in production.
  ─────────────────────────────────────────────────────────── */
  useEffect(() => {
    const missing = [
      ["VITE_EMAILJS_SERVICE_ID",  import.meta.env.VITE_EMAILJS_SERVICE_ID],
      ["VITE_EMAILJS_TEMPLATE_ID", import.meta.env.VITE_EMAILJS_TEMPLATE_ID],
      ["VITE_EMAILJS_PUBLIC_KEY",  import.meta.env.VITE_EMAILJS_PUBLIC_KEY],
    ]
      .filter(([, val]) => !val)
      .map(([key]) => key);

    if (missing.length > 0) {
      console.warn(
        `[ApplyNowModal] EmailJS is not fully configured.\n` +
        `The following .env variable${missing.length > 1 ? "s are" : " is"} missing or empty:\n` +
        missing.map((k) => `  • ${k}`).join("\n") +
        `\n\nSteps to fix:\n` +
        `  1. Open .env in the project root.\n` +
        `  2. Fill in the values from https://dashboard.emailjs.com\n` +
        `  3. Restart the dev server (npm run dev).\n` +
        `  4. The "To Email" destination is set on the EmailJS template, not here.`
      );
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* Escape key closes */
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () =>
      document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  /* Auto-close 2.5 s after success */
  useEffect(() => {
    if (!submitted) return;
    const t = setTimeout(onClose, 2500);
    return () => clearTimeout(t);
  }, [submitted, onClose]);

  /* ── Field change handler ── */
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  /* ── File change handler ── */
  function handleFile(e) {
    const file = e.target.files?.[0] ?? null;

    if (!file) {
      setForm((prev) => ({ ...prev, resume: null }));
      setErrors((prev) => ({ ...prev, resume: "" }));
      e.target.value = "";
      return;
    }

    if (file.size === 0) {
      setForm((prev) => ({ ...prev, resume: null }));
      setErrors((prev) => ({ ...prev, resume: "The selected file is empty." }));
      e.target.value = "";
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setForm((prev) => ({ ...prev, resume: null }));
      setErrors((prev) => ({ ...prev, resume: "Resume must be 2 MB or smaller." }));
      e.target.value = "";
      return;
    }

    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const allowedMimeTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    const fileName = file.name.toLowerCase();
    const isValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));
    const isValidMimeType = allowedMimeTypes.includes(file.type);

    if (!isValidExtension || !isValidMimeType) {
      setForm((prev) => ({ ...prev, resume: null }));
      setErrors((prev) => ({ ...prev, resume: "Only PDF, DOC, and DOCX files are allowed." }));
      e.target.value = "";
      return;
    }

    setForm((prev) => ({ ...prev, resume: file }));
    setErrors((prev) => ({ ...prev, resume: "" }));
  }

  /* ── Validation ── */
  function validate() {
    const e = {};
    if (!form.fullName.trim())
      e.fullName = "Full name is required.";
    if (!form.email.trim())
      e.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.phone.trim())
      e.phone = "Phone number is required.";
    else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone))
      e.phone = "Please enter a valid phone number.";
    if (!form.employmentStatus)
      e.employmentStatus = "Please select your employment status.";
    if (!form.experience)
      e.experience = "Please select your experience level.";
    if (!form.resume)
      e.resume = "Please upload your resume.";
    return e;
  }

  /* ── Form submit with EmailJS ── */
  async function handleSubmit(e) {
    e.preventDefault();
    
      console.log("SUBMIT CLICKED");

      
    if (cooldown > 0) {
      setSubmitError(`Please wait ${cooldown} seconds before submitting another application.`);
      return;
    }
    
    if (form.website.trim() !== "") {
      console.warn("[ApplyNowModal] Honeypot triggered. Possible bot submission blocked.");
      return;
    }

    const errs = validate();

    console.log("Validation errors:", errs);

if (Object.keys(errs).length) {
  console.log("Validation failed");
  setErrors(errs);
  return;
}

console.log("Validation passed");
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    if (!turnstileToken) {
      console.log("Turnstile token:", turnstileToken);
  setSubmitError("Please complete the security verification.");
  return;
}

    setSubmitting(true);
    console.log("Starting EmailJS...");
    setSubmitError("");

    try {
      /* Encode resume to base64 so EmailJS can attach it (≤ 50 KB recommended).
         For larger files the name + size is included in the email body instead. */
      let resumeAttachment = "Not provided";
      let resumeName = "Not provided";
      let resumeSize = "";

      if (form.resume) {
        resumeName = form.resume.name;
        resumeSize = `${(form.resume.size / 1024).toFixed(1)} KB`;

        if (form.resume.size <= 50 * 1024) {
          /* Small file → base64 attach */
          resumeAttachment = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);    // data:…;base64,…
            reader.onerror = reject;
            reader.readAsDataURL(form.resume);
          });
        } else {
          /* Large file → note in body; advise applicant to email directly */
          resumeAttachment = `[File too large to attach — ${resumeName}, ${resumeSize}. Applicant should email resume directly.]`;
        }
      }

      const templateParams = {
        /* These keys must match the variables in your EmailJS template */
        position:          job.title,
        job_type:          job.type === "Internship" ? "Internship" : "Full Time",
        full_name:         form.fullName,
        applicant_email:   form.email,
        phone:             form.phone,
        employment_status: form.employmentStatus,
        experience:        form.experience,
        skills:            form.skills || "Not provided",
        portfolio_link:    form.portfolioLink || "Not provided",
        cover_letter:      form.coverLetter || "Not provided",
        resume_name:       resumeName,
        resume_size:       resumeSize,
        // resume_attachment: resumeAttachment,   // base64 string or note
      };

     console.log("Before EmailJS");

try {
  const result = await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    templateParams,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  console.log("EmailJS SUCCESS:", result);
} catch (err) {
  console.error("EmailJS ERROR:", err);
}

      setSubmitted(true);
      setTurnstileToken("");
      const cooldownEnd = Date.now() + 30000;
      localStorage.setItem("apply_now_cooldown_until", cooldownEnd.toString());
      setCooldown(30);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitError(
        "Something went wrong. Please try again or contact us directly at careers@navipromotions.com / +91 98765 43210."
      );
    } finally {
      setSubmitting(false);
    }
  }

  const resumeLabel = form.resume
    ? form.resume.name
    : "Click to upload resume (PDF, DOC, DOCX)";

  const isInternship = job.type === "Internship";

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label={`Apply for ${job.title}`}
      >
        {/* Backdrop */}
        <motion.div
          initial={BACKDROP_ANIM.initial}
          animate={BACKDROP_ANIM.animate}
          exit={BACKDROP_ANIM.exit}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal panel */}
        <motion.div
          initial={MODAL_ANIM.initial}
          animate={MODAL_ANIM.animate}
          exit={MODAL_ANIM.exit}
          transition={MODAL_TRANSITION}
          className="
            relative
            z-10
            flex
            w-full
            max-w-2xl
            flex-col
            overflow-hidden
            rounded-[1.5rem]
            sm:rounded-[2rem]
            bg-white
            shadow-2xl
            max-h-[92vh]
          "
        >
          {/* ── Header ── */}
          <div className="flex shrink-0 items-start justify-between border-b border-slate-100 bg-white px-4 sm:px-8 py-4 sm:py-5 z-20">
            <div className="flex-1 min-w-0 pr-4 space-y-1">
              {/* Dynamic type badge */}
              <span
                className={`
                  inline-block
                  rounded-full
                  px-2.5
                  py-0.5
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-wider
                  ${
                    isInternship
                      ? "border border-amber-200/60 bg-amber-50 text-amber-600"
                      : "border border-indigo-200/60 bg-indigo-50 text-indigo-600"
                  }
                `}
              >
                {isInternship ? "Internship" : "Full Time"}
              </span>

              <h2 className="heading-card text-xl font-bold leading-snug break-words heading-primary sm:text-2xl">
                Apply for{" "}
                <span className="heading-highlight">{job.title}</span>
              </h2>

              <p className="text-sm text-slate-500">
                Fill in the details below — we&apos;ll get back to you
                soon.
              </p>
            </div>

            {/* Close */}
            {/* Close Button - Compact & Sleek */}
<button
  type="button"
  onClick={onClose}
  className="h-8 w-8 p-0 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-all shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 relative after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[44px] after:h-[44px] after:content-['']"
  aria-label="Close modal"
>
  <X size={16} strokeWidth={2} aria-hidden="true" />
</button>
          </div>

          {/* ── Scrollable body ── */}
          <div className="overflow-y-auto px-6 sm:px-8 py-5">
            {submitted ? (
              /* Success state */
              <motion.div
                initial={SUCCESS_ANIM.initial}
                animate={SUCCESS_ANIM.animate}
                className="flex flex-col items-center py-12 text-center"
              >
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle2 size={40} className="text-green-500"  aria-hidden="true" focusable="false" />
                </div>
                <h3 className="heading-card mb-3 text-2xl heading-primary">
                  Application Submitted!
                </h3>
                <p className="text-slate-600">
                  Thank you for applying for{" "}
                  <strong>{job.title}</strong>. We&apos;ll review your
                  profile and get back to you soon.
                </p>
                <p className="mt-3 text-sm text-slate-400">
                  This window will close automatically&hellip;
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Honeypot Field */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: "1px",
                    height: "1px",
                    opacity: 0,
                    pointerEvents: "none"
                  }}
                />

                {/* Position — read-only */}
                <Field label="Position Applying For">
                  <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5">
                    <Briefcase
                      size={16}
                      className="shrink-0 text-orange-500" aria-hidden="true"
                    />
                    <span className="text-sm font-semibold text-slate-700">
                      {job.title}
                    </span>
                  </div>
                </Field>

                {/* Row: Full Name + Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    label="Full Name"
                    required
                    error={errors.fullName}
                  >
                    <div className="relative">
                      <User
                        size={15}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true"
                      />
                      <input
                        type="text"
                        name="fullName"
                        id="apply-fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        autoComplete="name"
                        className={`${inputBase} aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "apply-fullName-error" : undefined} pl-10 ${
                          errors.fullName ? inputError : ""
                        }`}
                      />
                    </div>
                  </Field>

                  <Field
                    label="Email Address"
                    required
                    error={errors.email}
                  >
                    <div className="relative">
                      <Mail
                        size={15}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true"
                      />
                      <input
                        type="email"
                        name="email"
                        id="apply-email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className={`${inputBase} aria-invalid={!!errors.email} aria-describedby={errors.email ? "apply-email-error" : undefined} pl-10 ${
                          errors.email ? inputError : ""
                        }`}
                      />
                    </div>
                  </Field>
                </div>

                {/* Row: Phone + Employment Status */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    label="Phone Number"
                    required
                    error={errors.phone}
                  >
                    <div className="relative">
                      <Phone
                        size={15}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true"
                      />
                      <input
                        type="tel"
                        name="phone"
                        id="apply-phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                        className={`${inputBase} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "apply-phone-error" : undefined} pl-10 ${
                          errors.phone ? inputError : ""
                        }`}
                      />
                    </div>
                  </Field>

                  <Field
                    label="Employment Status"
                    required
                    error={errors.employmentStatus}
                  >
                    <div className="relative">
                      <select
                        name="employmentStatus"
                        id="apply-employmentStatus"
                        value={form.employmentStatus}
                        onChange={handleChange}
                        className={`${inputBase} aria-invalid={!!errors.employmentStatus} aria-describedby={errors.employmentStatus ? "apply-employmentStatus-error" : undefined} appearance-none pr-10 ${
                          errors.employmentStatus ? inputError : ""
                        } ${
                          !form.employmentStatus
                            ? "text-slate-400"
                            : ""
                        }`}
                      >
                        <option value="" disabled>
                          Select status&hellip;
                        </option>
                        <option value="Employed">Currently Employed</option>
                        <option value="Unemployed">Unemployed</option>
                        <option value="Fresher">Fresher</option>
                        <option value="Student">Student</option>
                        <option value="Notice Period">Serving Notice Period</option>
                      </select>
                      <ChevronDown
                        size={15}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true"
                      />
                    </div>
                  </Field>
                </div>

                {/* Row: Experience + Skills */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    label="Total Experience"
                    required
                    error={errors.experience}
                  >
                    <div className="relative">
                      <select
                        name="experience"
                        id="apply-experience"
                        value={form.experience}
                        onChange={handleChange}
                        className={`${inputBase} aria-invalid={!!errors.experience} aria-describedby={errors.experience ? "apply-experience-error" : undefined} appearance-none pr-10 ${
                          errors.experience ? inputError : ""
                        } ${
                          !form.experience ? "text-slate-400" : ""
                        }`}
                      >
                        <option value="" disabled>
                          Select experience&hellip;
                        </option>
                        <option value="Fresher / 0 Years">
                          Fresher / 0 Years
                        </option>
                        <option value="0-1 Year">0–1 Year</option>
                        <option value="1-3 Years">1–3 Years</option>
                        <option value="3+ Years">3+ Years</option>
                      </select>
                      <ChevronDown
                        size={15}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true"
                      />
                    </div>
                  </Field>

                  <Field
                    label="Relevant Skills"
                    error={errors.skills}
                  >
                    <input
                      type="text"
                      name="skills"
                      id="apply-skills"
                      value={form.skills}
                      onChange={handleChange}
                      placeholder="e.g. React, SEO, Google Ads&hellip;"
                      className={`${inputBase} aria-invalid={!!errors.skills} aria-describedby={errors.skills ? "apply-skills-error" : undefined} ${
                        errors.skills ? inputError : ""
                      }`}
                    />
                  </Field>
                </div>

                {/* Portfolio / LinkedIn */}
                <Field
                  label="Portfolio / LinkedIn / Work Samples (Optional)"
                  error={errors.portfolioLink}
                >
                  <div className="relative">
                    <Link
                      size={15}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true"
                    />
                    <input
                      type="url"
                      name="portfolioLink"
                      id="apply-portfolioLink"
                      value={form.portfolioLink}
                      onChange={handleChange}
                      placeholder="https://github.com/you  or  linkedin.com/in/you"
                      className={`${inputBase} aria-invalid={!!errors.portfolioLink} aria-describedby={errors.portfolioLink ? "apply-portfolioLink-error" : undefined} pl-10 ${
                        errors.portfolioLink ? inputError : ""
                      }`}
                    />
                  </div>
                </Field>

                {/* Resume Upload */}
                <Field
                  label="Resume"
                  required
                  error={errors.resume}
                >
                  <label
                    htmlFor="apply-resume"
                    className={`
                      flex
                      cursor-pointer
                      items-center
                      gap-3
                      rounded-2xl
                      border-2
                      border-dashed
                      px-5
                      py-4
                      transition-colors
                      ${
                        errors.resume
                          ? "border-red-300 bg-red-50"
                          : form.resume
                          ? "border-orange-300 bg-orange-50"
                          : "border-slate-200 bg-slate-50 hover:border-orange-300 hover:bg-orange-50/40"
                      }
                    `}
                  >
                    <Upload
                      size={18}
                      className={
                        form.resume
                          ? "text-orange-500"
                          : "text-slate-400"
                      }
                     aria-hidden="true" focusable="false" />
                    <span
                      className={`text-sm font-medium ${
                        form.resume
                          ? "text-orange-600"
                          : "text-slate-500"
                      }`}
                    >
                      {resumeLabel}
                    </span>
                    <input
                      type="file"
                      id="apply-resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFile}
                      className="sr-only"
                    />
                  </label>
                  <p className="mt-2 text-center text-xs text-slate-500">
                    Accepted formats: PDF, DOC, DOCX • Max size: 2 MB
                  </p>
                </Field>

                {/* Cover Letter */}
                <Field
                  label="Why do you want to join Navi Promotions? (Optional)"
                  error={errors.coverLetter}
                >
                  <div className="relative">
                    <MessageSquare
                      size={15}
                      className="absolute left-4 top-4 text-slate-400" aria-hidden="true"
                    />
                    <textarea
                      name="coverLetter"
                      id="apply-coverLetter"
                      value={form.coverLetter}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us a little about yourself and why you'd be a great fit…"
                      className={`${inputBase} aria-invalid={!!errors.coverLetter} aria-describedby={errors.coverLetter ? "apply-coverLetter-error" : undefined} resize-none pl-10 pt-4 ${
                        errors.coverLetter ? inputError : ""
                      }`}
                    />
                  </div>
                </Field>

                <div className="flex justify-center py-2">
  <Turnstile
    siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
    onSuccess={(token) => {
      setTurnstileToken(token);
      setSubmitError("");
    }}
    onExpire={() => {
      setTurnstileToken("");
    }}
    onError={() => {
      setTurnstileToken("");
      setSubmitError("Security verification failed. Please try again.");
    }}
  />
</div>

                {/* Submit */}
                {/* Error banner */}
                {submitError && (
                  <motion.div
                    initial={ERROR_ANIM.initial}
                    animate={ERROR_ANIM.animate}
                    className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4"
                  >
                    <XCircle
                      size={18}
                      className="mt-0.5 shrink-0 text-red-500"
                     aria-hidden="true" focusable="false" />
                    <p className="text-sm font-medium text-red-700">
                      {submitError}
                    </p>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={submitting || !turnstileToken || cooldown > 0}
                  className="
                    mt-2
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-slate-900
                    px-6
                    py-4
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-white
                    transition-all
                    hover:bg-orange-500
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin"  aria-hidden="true" focusable="false" />
                      Sending&hellip;
                    </>
                  ) : cooldown > 0 ? (
                    `Please wait (${cooldown}s)`
                  ) : (
                    <>
                      <FileText size={16}  aria-hidden="true" focusable="false" />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
