import React, { useState, useEffect, useCallback } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import {
  X,
  User,
  Mail,
  Phone,
  Building,
  Briefcase,
  IndianRupee,
  Calendar,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Loader2,
  Send,
} from "lucide-react";
import { budgetOptions, serviceOptions, timelineOptions } from "../../data/letsTalk";

const inputBase =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange/15";

const inputError =
  "border-red-400 bg-red-50 focus:border-red-400 focus:ring-red-400/10";

function Field({ label, htmlFor, required, error, children }) {
  const errorId = htmlFor ? `${htmlFor}-error` : undefined;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={htmlFor} className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-700">
        {label}
        {required && <span className="ml-1 text-brand-orange" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={errorId} className="text-[11px] font-medium text-red-500" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
}

const EMPTY_FORM = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "Digital Marketing",
  budget: "₹25,000 - ₹50,000",
  timeline: "Within 1 Month",
  details: "",
};

export default function BecomeClientModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number (7–15 digits).";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    // Simulate reliable submission flow without inventing fake endpoints
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setErrors({});
    setFormData(EMPTY_FORM);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="become-client-title"
        >
          {/* Backdrop */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Panel */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="
              relative
              z-10
              flex
              w-full
              max-w-xl
              flex-col
              overflow-hidden
              rounded-2xl
              sm:rounded-3xl
              bg-white
              shadow-2xl
              max-h-[92vh]
            "
          >
            {/* Header */}
            <div className="flex shrink-0 items-start justify-between border-b border-slate-100 bg-white px-5 sm:px-7 py-4 z-20">
              <div className="flex-1 min-w-0 pr-3 space-y-0.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                  <Sparkles className="w-3 h-3" />
                  Partnership Inquiry
                </span>

                <h2 id="become-client-title" className="heading-card text-xl sm:text-2xl font-bold heading-primary">
                  Become a <span className="heading-highlight">Client</span>
                </h2>

                <p className="text-xs text-slate-500">
                  Tell us about your project objectives and growth targets.
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleResetAndClose}
                className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} strokeWidth={2.2} aria-hidden="true" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto px-5 sm:px-7 py-5">
              {submitted ? (
                <Motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                    <CheckCircle2 size={36} aria-hidden="true" />
                  </div>
                  <h3 className="heading-card mb-2 text-xl font-bold heading-primary">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-sm">
                    Your client inquiry has been submitted successfully. Our business development team will review your requirements and reach out within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 hover:bg-brand-orange text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </Motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3.5">
                  {/* Full Name */}
                  <Field label="Full Name" htmlFor="client-fullName" required error={errors.fullName}>
                    <div className="relative">
                      <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                      <input
                        type="text"
                        name="fullName"
                        id="client-fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        autoComplete="name"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "client-fullName-error" : undefined}
                        className={`${inputBase} pl-9 ${errors.fullName ? inputError : ""}`}
                      />
                    </div>
                  </Field>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Field label="Work Email" htmlFor="client-email" required error={errors.email}>
                      <div className="relative">
                        <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                        <input
                          type="email"
                          name="email"
                          id="client-email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          autoComplete="email"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "client-email-error" : undefined}
                          className={`${inputBase} pl-9 ${errors.email ? inputError : ""}`}
                        />
                      </div>
                    </Field>

                    <Field label="Phone Number" htmlFor="client-phone" required error={errors.phone}>
                      <div className="relative">
                        <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                        <input
                          type="tel"
                          name="phone"
                          id="client-phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          autoComplete="tel"
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "client-phone-error" : undefined}
                          className={`${inputBase} pl-9 ${errors.phone ? inputError : ""}`}
                        />
                      </div>
                    </Field>
                  </div>

                  {/* Company Name */}
                  <Field label="Company / Brand Name" htmlFor="client-company">
                    <div className="relative">
                      <Building size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                      <input
                        type="text"
                        name="company"
                        id="client-company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company or Brand Name (Optional)"
                        className={`${inputBase} pl-9`}
                      />
                    </div>
                  </Field>

                  {/* Service & Budget */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Field label="Service Needed" htmlFor="client-service">
                      <div className="relative">
                        <Briefcase size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" aria-hidden="true" />
                        <select
                          name="service"
                          id="client-service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`${inputBase} pl-9 cursor-pointer`}
                        >
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </Field>

                    <Field label="Estimated Budget" htmlFor="client-budget">
                      <div className="relative">
                        <IndianRupee size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" aria-hidden="true" />
                        <select
                          name="budget"
                          id="client-budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={`${inputBase} pl-9 cursor-pointer`}
                        >
                          {budgetOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </Field>
                  </div>

                  {/* Project Timeline */}
                  <Field label="Expected Timeline" htmlFor="client-timeline">
                    <div className="relative">
                      <Calendar size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" aria-hidden="true" />
                      <select
                        name="timeline"
                        id="client-timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className={`${inputBase} pl-9 cursor-pointer`}
                      >
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Field>

                  {/* Project Details */}
                  <Field label="Project Goals & Requirements" htmlFor="client-details">
                    <div className="relative">
                      <MessageSquare size={14} className="absolute left-3 top-2.5 text-slate-400" aria-hidden="true" />
                      <textarea
                        name="details"
                        id="client-details"
                        rows={2.5}
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Tell us about your target audience, current challenges, and goals…"
                        className={`${inputBase} resize-none pl-8 pt-2`}
                      />
                    </div>
                  </Field>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="
                      mt-1
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-slate-900
                      hover:bg-brand-orange
                      px-4
                      py-3
                      text-xs
                      sm:text-sm
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-white
                      transition-all
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                      cursor-pointer
                      shadow-sm
                    "
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={15} className="animate-spin" aria-hidden="true" />
                        Submitting Inquiry…
                      </>
                    ) : (
                      <>
                        <span>Submit Partnership Request</span>
                        <Send size={14} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
