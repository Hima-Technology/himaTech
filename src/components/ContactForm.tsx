"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ fallbackEmail }: { fallbackEmail: string }) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
    if (!endpoint) {
      console.error("NEXT_PUBLIC_CONTACT_ENDPOINT is not set — see himatech-mailer/README.md");
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass glass-card space-y-6 md:p-10">
      <h3 className="font-display text-2xl font-bold text-black tracking-tight dark:text-white">Let&apos;s Create Together</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">Fill in the form below and we&apos;ll get back to you within 24 hours.</p>
      
      <div className="space-y-1">
        <label htmlFor="name" className="text-xs font-semibold text-neutral-600 uppercase tracking-wider dark:text-neutral-400">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="John Doe"
          className="glass-input"
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="email" className="text-xs font-semibold text-neutral-600 uppercase tracking-wider dark:text-neutral-400">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="john@example.com"
          className="glass-input"
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="subject" className="text-xs font-semibold text-neutral-600 uppercase tracking-wider dark:text-neutral-400">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="How can we help?"
          className="glass-input"
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="message" className="text-xs font-semibold text-neutral-600 uppercase tracking-wider dark:text-neutral-400">
          More About The Project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your goals, timeline, and scope..."
          className="glass-textarea"
        />
      </div>
      
      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
      
      {status === "success" && (
        <p className="glass rounded-xl px-4 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">
          Thanks — we&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="glass rounded-xl px-4 py-3 text-sm font-medium text-rose-600 dark:text-rose-400">
          Something went wrong. Please email us directly at {fallbackEmail}.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
