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
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-white p-8 shadow-soft-lg">
      <h2 className="font-display text-xl text-ink-950">Send us a Message</h2>
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-neutral-700">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1.5 w-full rounded-md border border-neutral-200 px-4 py-2.5 focus-visible:border-accent-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold text-neutral-700">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1.5 w-full rounded-md border border-neutral-200 px-4 py-2.5 focus-visible:border-accent-500"
        />
      </div>
      <div>
        <label htmlFor="subject" className="text-sm font-semibold text-neutral-700">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-1.5 w-full rounded-md border border-neutral-200 px-4 py-2.5 focus-visible:border-accent-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-neutral-700">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1.5 w-full rounded-md border border-neutral-200 px-4 py-2.5 focus-visible:border-accent-500"
        />
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
      {status === "success" && (
        <p className="text-sm font-medium text-success-600">Thanks — we&apos;ll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-accent-700">
          Something went wrong. Please email us directly at {fallbackEmail}.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
