import type { Metadata } from "next";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { getSiteSettings } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Contact Us | Hima Technologies",
  description: "We'd love to hear from you. Get in touch with the Hima Technologies team.",
};

const FALLBACK_CONTACT = {
  email: "info@himatech.co.tz",
  phone: "+255 628 404 865",
  location: "Zanzibar, Tanzania",
};

export default async function ContactUs() {
  const settings = await getSiteSettings();
  const contact = {
    email: settings?.email || FALLBACK_CONTACT.email,
    phone: settings?.phone || FALLBACK_CONTACT.phone,
    location: settings?.location || FALLBACK_CONTACT.location,
  };

  const contactItems = [
    { icon: HiOutlineMail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: HiOutlinePhone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: HiOutlineLocationMarker, label: "Location", value: contact.location, href: undefined },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden border-b border-white/10 bg-[#030303]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        <Container className="text-center relative z-10">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Contact Us
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight md:text-7xl">
            Let&apos;s Create{" "}
            <span className="font-serif italic text-neutral-400 font-light block sm:inline">
              Together
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-neutral-400 leading-relaxed font-medium">
            We&apos;d love to hear from you. Get in touch with our team.
          </p>
        </Container>
      </section>

      <section className="py-24 bg-black">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-3xl font-bold text-white tracking-tight">Your Next Big Idea</h2>
              <p className="mt-4 text-sm md:text-base text-neutral-400 leading-relaxed font-medium">
                Have a question, or ready to kick off your project? Fill out the form and our technical team will respond within one business day.
              </p>

              <div className="mt-10 space-y-4">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0c0c0c]/60 p-5 hover:border-white/20 transition-all duration-300">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-black">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-semibold text-neutral-300 hover:text-white transition mt-1 block">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-neutral-300 mt-1">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ContactForm fallbackEmail={contact.email} />
          </div>
        </Container>
      </section>
    </div>
  );
}
