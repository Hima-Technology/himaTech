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
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
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
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-white/10 bg-[#0c0c0c]/40 p-8 md:p-10 shadow-2xl backdrop-blur-sm">
      <h3 className="font-display text-2xl font-bold text-white tracking-tight">Let&apos;s Create Together</h3>
      <p className="text-sm text-neutral-400">Fill in the form below and we&apos;ll get back to you within 24 hours.</p>
      
      <div className="space-y-1">
        <label htmlFor="name" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="John Doe"
          className="w-full border-b border-white/10 bg-transparent py-3 px-0 text-white placeholder-neutral-700 outline-none focus:border-white transition-colors text-sm rounded-none"
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="email" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
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
          className="w-full border-b border-white/10 bg-transparent py-3 px-0 text-white placeholder-neutral-700 outline-none focus:border-white transition-colors text-sm rounded-none"
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="subject" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="How can we help?"
          className="w-full border-b border-white/10 bg-transparent py-3 px-0 text-white placeholder-neutral-700 outline-none focus:border-white transition-colors text-sm rounded-none"
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="message" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
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
          className="w-full border-b border-white/10 bg-transparent py-3 px-0 text-white placeholder-neutral-700 outline-none focus:border-white transition-colors text-sm rounded-none resize-none"
        />
      </div>
      
      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
      
      {status === "success" && (
        <p className="text-sm font-medium text-emerald-400">Thanks — we&apos;ll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-rose-400">
          Something went wrong. Please email us directly at {fallbackEmail}.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
