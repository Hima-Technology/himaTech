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
    <div className="page-transition">
      <section className="bg-ink-950 pb-20 pt-40 text-center text-white">
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
              <h2 className="font-display text-2xl text-ink-950">Get in Touch</h2>
              <p className="mt-4 text-lg text-neutral-600">
                Have a question or want to work together? Fill out the form and we&apos;ll respond
                within one business day.
              </p>

              <div className="mt-8 space-y-5">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 rounded-xl bg-neutral-50 p-5">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent-900 text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink-950">{item.label}</p>
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

            <ContactForm fallbackEmail={contact.email} />
          </div>
        </Container>
      </section>
    </div>
  );
}
