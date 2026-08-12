import type { Metadata } from "next";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { Container } from "@/components/ui/Container";
import { JellyCard } from "@/components/ui/JellyCard";
import { ContactForm } from "@/components/ContactForm";
import { getSiteSettings } from "@/lib/cms/queries";

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
    <div className="min-h-screen pt-20">
      <section className="relative py-24 overflow-hidden">
        <Container className="text-center relative z-10">
          <span className="glass glass-badge glass-badge--violet">
            Contact Us
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight md:text-7xl">
            Let&apos;s Create{" "}
            <span className="font-serif italic text-accent-600 font-light block sm:inline dark:text-accent-400">
              Together
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-neutral-600 leading-relaxed font-medium dark:text-neutral-400">
            We&apos;d love to hear from you. Get in touch with our team.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-3xl font-bold text-black tracking-tight dark:text-white">Your Next Big Idea</h2>
              <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed font-medium dark:text-neutral-400">
                Have a question, or ready to kick off your project? Fill out the form and our technical team will respond within one business day.
              </p>

              <div className="mt-10 space-y-4">
                {contactItems.map((item) => (
                  <JellyCard key={item.label} className="glass glass-card glass-card--tension flex items-start gap-4 !p-5">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5e7bcb] to-[#26418c] text-white shadow-[0_4px_16px_rgba(58,90,176,0.4)]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-500">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-semibold text-neutral-700 hover:text-black transition mt-1 block dark:text-neutral-300 dark:hover:text-white">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-neutral-700 mt-1 dark:text-neutral-300">{item.value}</p>
                      )}
                    </div>
                  </JellyCard>
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
