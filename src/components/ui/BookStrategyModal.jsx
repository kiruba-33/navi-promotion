import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send, Phone, Mail, User, Briefcase } from "lucide-react";

export default function BookStrategyModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Digital Marketing",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Digital Marketing",
      message: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-strategy-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#102A56]/60 backdrop-blur-sm"
            onClick={handleResetAndClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl border border-[#0F172A]/10 shadow-2xl overflow-hidden z-10 my-8 p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={handleResetAndClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-lg border border-[#0F172A]/10 bg-[#F1F5F9] flex items-center justify-center text-[#0F172A]/70 hover:text-[#FFFFFF] hover:bg-[#102A56] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-[#F1F5F9] text-[#2563EB] flex items-center justify-center mb-5 border border-[#2563EB]/20">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="heading-card text-xl sm:text-2xl text-[#0F172A] mb-3">
                  Strategy Call Requested!
                </h3>
                <p className="body-normal text-[#0F172A]/80 max-w-sm mb-6">
                  Thank you, <span className="font-semibold text-[#102A56]">{formData.name}</span>. Our growth team has received your details and will get in touch within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-7 py-3 rounded-[10px] bg-[#2563EB] hover:bg-[#102A56] text-[#FFFFFF] font-medium transition-colors text-[14px] cursor-pointer shadow-sm"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-6 pr-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-[#102A56]/10 bg-[#F1F5F9] text-[#102A56] text-[12px] font-medium mb-3 select-none">
                    <Phone className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>Free Consultation</span>
                  </div>
                  <h2
                    id="modal-strategy-title"
                    className="heading-card text-xl sm:text-2xl text-[#0F172A]"
                  >
                    Book a Strategy Call
                  </h2>
                  <p className="body-normal text-[#0F172A]/75 mt-1.5 text-[14px]">
                    Discuss your growth objectives with Navi Promotions' digital marketing and engineering team.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[12px] font-medium uppercase tracking-[0.04em] text-[#102A56] mb-1.5">
                      Full Name <span className="text-[#F97316]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#0F172A]/45">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 bg-[#F1F5F9] border border-[#0F172A]/15 rounded-[10px] text-[14px] font-normal text-[#0F172A] placeholder:text-[#0F172A]/40 focus:bg-[#FFFFFF] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-medium uppercase tracking-[0.04em] text-[#102A56] mb-1.5">
                        Work Email <span className="text-[#F97316]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#0F172A]/45">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full pl-10 pr-4 py-3 bg-[#F1F5F9] border border-[#0F172A]/15 rounded-[10px] text-[14px] font-normal text-[#0F172A] placeholder:text-[#0F172A]/40 focus:bg-[#FFFFFF] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium uppercase tracking-[0.04em] text-[#102A56] mb-1.5">
                        Phone Number <span className="text-[#F97316]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#0F172A]/45">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-3 bg-[#F1F5F9] border border-[#0F172A]/15 rounded-[10px] text-[14px] font-normal text-[#0F172A] placeholder:text-[#0F172A]/40 focus:bg-[#FFFFFF] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium uppercase tracking-[0.04em] text-[#102A56] mb-1.5">
                      Service of Interest
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#0F172A]/45">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-[#F1F5F9] border border-[#0F172A]/15 rounded-[10px] text-[14px] font-normal text-[#0F172A] focus:bg-[#FFFFFF] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 outline-none transition-all cursor-pointer"
                      >
                        <option value="Digital Marketing">Digital Marketing & Performance</option>
                        <option value="Web & App Development">Web & Custom Software Development</option>
                        <option value="Branding Kit">Branding Kit & Identity</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="SEO & Analytics">SEO & Technical Analytics</option>
                        <option value="Other">Other Strategic Requirement</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium uppercase tracking-[0.04em] text-[#102A56] mb-1.5">
                      Project Notes / Goals
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us briefly about your current goals or timeline..."
                      className="w-full px-4 py-3 bg-[#F1F5F9] border border-[#0F172A]/15 rounded-[10px] text-[14px] font-normal text-[#0F172A] placeholder:text-[#0F172A]/40 focus:bg-[#FFFFFF] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 rounded-[10px] bg-[#F97316] hover:bg-[#102A56] text-[#FFFFFF] font-medium transition-colors text-[14px] sm:text-[15px] flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Scheduling...</span>
                    ) : (
                      <>
                        <span>Confirm Strategy Call</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
