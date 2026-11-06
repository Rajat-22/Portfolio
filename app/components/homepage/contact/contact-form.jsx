"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { isValidEmail } from "@/utils/check-email";

// Public EmailJS identifiers — these are browser-side by design.
const EMAILJS_SERVICE_ID = "service_cqkvl01";
const EMAILJS_TEMPLATE_ID = "template_lfn5dfr";
const EMAILJS_PUBLIC_KEY = "Q-anB_0Teb0AWe3TE";

const EMPTY = { name: "", email: "", message: "" };

const fieldClasses =
  "w-full rounded-[8px] border border-line bg-bg px-3.5 py-3 text-sm text-ink placeholder:text-dim transition-colors duration-300 focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please add your name.";
    if (!values.email.trim()) next.email = "Please add your email.";
    else if (!isValidEmail(values.email)) next.email = "That email doesn't look right.";
    if (!values.message.trim()) next.message = "Please add a short message.";
    return next;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    try {
      setLoading(true);
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        values,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200 || result.text === "OK") {
        setValues(EMPTY);
        setSent(true);
        toast.success("Message sent — thanks for reaching out.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-[0.8125rem] text-muted"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            required
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            placeholder="Your name"
            className={fieldClasses}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-[0.8125rem] text-muted"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            maxLength={100}
            required
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            placeholder="you@company.com"
            className={fieldClasses}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-[0.8125rem] text-muted"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          maxLength={500}
          required
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : "contact-message-hint"
          }
          placeholder="A little about the role, project or question."
          className={`${fieldClasses} resize-y`}
        />
        <div className="mt-1.5 flex items-baseline justify-between gap-4">
          {errors.message ? (
            <p id="contact-message-error" className="text-xs text-red-400">
              {errors.message}
            </p>
          ) : (
            <p id="contact-message-hint" className="text-xs text-dim">
              Up to 500 characters.
            </p>
          )}
          <span className="meta shrink-0">{values.message.length}/500</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[0.8125rem] font-medium text-black transition-all duration-300 ease-editorial hover:bg-[#d8ff62] disabled:cursor-not-allowed disabled:opacity-60 sm:px-6 sm:text-sm"
        >
          {loading ? "Sending…" : "Send message"}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-300 ease-editorial group-hover:translate-x-0.5"
          >
            <path
              d="M2 7h9.5M7.5 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <p aria-live="polite" className="text-[0.8125rem] text-muted">
          {sent && !loading ? "Thanks — I'll get back to you soon." : ""}
        </p>
      </div>
    </form>
  );
}
