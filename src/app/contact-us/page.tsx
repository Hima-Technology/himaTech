"use client";

import { useState } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const CONTACT_ITEMS = [
  { icon: HiOutlineMail, label: "Email", value: "info@himatech.co.tz", href: "mailto:info@himatech.co.tz" },
  { icon: HiOutlinePhone, label: "Phone", value: "+255 628 404 865", href: "tel:+255628404865" },
  { icon: HiOutlineLocationMarker, label: "Location", value: "Zanzibar, Tanzania", href: undefined },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactUs() {
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
    <div className="page-transition">
      <section className="bg-brand-950 pb-20 pt-40 text-center text-white">
        <Container>
          <h1 className="font-display text-display-lg">Contact Us</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            We&apos;d love to hear from you. Get in touch with our team.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl text-brand-900">Get in Touch</h2>
              <p className="mt-4 text-lg text-neutral-600">
                Have a question or want to work together? Fill out the form and we&apos;ll respond
                within one business day.
              </p>

              <div className="mt-8 space-y-5">
                {CONTACT_ITEMS.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 rounded-xl bg-neutral-50 p-5">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-900 text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-900">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-neutral-600 hover:text-accent-600">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-neutral-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-white p-8 shadow-soft-lg">
              <h2 className="font-display text-xl text-brand-900">Send us a Message</h2>
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
                <p className="text-sm font-medium text-success-600">
                  Thanks — we&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-accent-700">
                  Something went wrong. Please email us directly at info@himatech.co.tz.
                </p>
              )}
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
}
