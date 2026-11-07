"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { isValidEmail } from "@/utils/check-email";

// Public EmailJS identifiers — browser-side by design.
const EMAILJS_SERVICE_ID = "service_cqkvl01";
const EMAILJS_TEMPLATE_ID = "template_lfn5dfr";
const EMAILJS_PUBLIC_KEY = "Q-anB_0Teb0AWe3TE";

const EMPTY = { name: "", email: "", message: "" };

const fieldClasses =
  "w-full rounded-[4px] border border-line-2 bg-bg-2 px-3.5 py-3 text-[0.875rem] text-ink placeholder:text-ink-3 transition-colors duration-300 focus:border-amber focus:outline-none";

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please add your name.";
    if (!values.email.trim()) next.email = "Please add your email.";
    else if (!isValidEmail(values.email))
      next.email = "That email doesn't look right.";
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
    <form onSubmit={handleSubmit} noValidate>
      <p className="label">Send a message</p>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-[0.8125rem] text-ink-2"
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
            <p id="contact-name-error" className="mt-1.5 text-xs text-coral">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-[0.8125rem] text-ink-2"
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
            <p id="contact-email-error" className="mt-1.5 text-xs text-coral">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="contact-message"
          className="mb-2 block text-[0.8125rem] text-ink-2"
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
            <p id="contact-message-error" className="text-xs text-coral">
              {errors.message}
            </p>
          ) : (
            <p id="contact-message-hint" className="text-xs text-ink-3">
              Up to 500 characters.
            </p>
          )}
          <span className="font-mono text-[0.625rem] text-ink-3">
            {values.message.length}/500
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex items-center gap-2 rounded-full bg-amber px-5 py-3 text-[0.8125rem] font-medium text-\[#0b0b0d\] transition-all duration-300 ease-editorial hover:bg-amber-2 disabled:cursor-not-allowed disabled:opacity-60 sm:px-6 sm:text-sm"
        >
          {loading ? "Sending…" : "Send message"}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            aria-hidden="true"
            className="shrink-0 transition-transform duration-300 ease-editorial group-hover:translate-x-1"
          >
            <path
              d="M2.5 7.5h10M8.5 3.5l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <p aria-live="polite" className="text-[0.8125rem] text-ink-2">
          {sent && !loading ? "Thanks — I'll get back to you soon." : ""}
        </p>
      </div>
    </form>
  );
}
