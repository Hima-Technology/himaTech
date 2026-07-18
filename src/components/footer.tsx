import Link from "next/link";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { getSiteSettings } from "@/sanity/queries";

const CURRENT_YEAR = new Date().getFullYear();

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/Our-Products", label: "Products" },
  { href: "/contact-us", label: "Contact" },
];

const SERVICES = ["Software Development", "AI Solutions", "Data Analytics", "Cybersecurity", "IT Consulting"];

const FALLBACK_CONTACT = {
  email: "info@himatech.co.tz",
  phone: "+255 628 404 865",
  location: "Zanzibar, Tanzania",
};

export async function Footer() {
  const settings = await getSiteSettings();
  const contact = {
    email: settings?.email || FALLBACK_CONTACT.email,
    phone: settings?.phone || FALLBACK_CONTACT.phone,
    location: settings?.location || FALLBACK_CONTACT.location,
  };

  return (
    <footer className="bg-ink-950 px-6 pt-16 text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <h3 className="font-display text-xl">Hima Technologies</h3>
            <p className="leading-relaxed text-white/60">
              Founded in Zanzibar. Software development, AI, data analytics
              and cybersecurity for businesses across East Africa and beyond.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm uppercase tracking-widest text-white/50">
              Quick Links
            </h4>
            <ul className="space-y-2 font-medium text-white/70">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-accent-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm uppercase tracking-widest text-white/50">
              Services
            </h4>
            <ul className="space-y-2 font-medium text-white/70">
              {SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm uppercase tracking-widest text-white/50">
              Contact
            </h4>
            <div className="space-y-3 font-medium text-white/70">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-start gap-3 transition hover:text-accent-400"
              >
                <HiOutlineMail className="mt-0.5 flex-shrink-0" />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-3 transition hover:text-accent-400"
              >
                <HiOutlinePhone className="mt-0.5 flex-shrink-0" />
                {contact.phone}
              </a>
              <div className="flex items-start gap-3">
                <HiOutlineLocationMarker className="mt-0.5 flex-shrink-0" />
                {contact.location}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 py-8">
          <p className="text-center text-sm text-white/50">
            &copy; {CURRENT_YEAR} Hima Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
