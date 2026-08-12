import Link from "next/link";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { getSiteSettings } from "@/lib/cms/queries";

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
    <footer className="px-6 py-16">
      <div className="container">
        <div className="glass rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-4 col-span-1 md:col-span-1">
            <h3 className="font-display text-xl font-bold tracking-tight">Himma Technologies</h3>
            <p className="leading-relaxed text-neutral-600 text-sm max-w-xs dark:text-neutral-400">
              We Build Brands, websites and digital experiences with intention, clarity and care.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-500">
              Location
            </h4>
            <div className="space-y-2 text-sm text-neutral-600 leading-relaxed font-medium dark:text-neutral-400">
              <p>{contact.location}</p>
              <a
                href={`mailto:${contact.email}`}
                className="block hover:text-black dark:hover:text-white transition"
              >
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="block hover:text-black dark:hover:text-white transition"
              >
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-500">
              Links
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 font-medium dark:text-neutral-400">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-black dark:hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-500">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 font-medium dark:text-neutral-400">
              {SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-600 font-medium dark:border-white/10 dark:text-neutral-500">
          <p>
            &copy; {CURRENT_YEAR} Hima Technologies. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-black dark:hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-black dark:hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
