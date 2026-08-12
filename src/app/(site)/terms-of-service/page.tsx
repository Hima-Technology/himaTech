import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service | Hima Technologies",
  description: "Terms governing use of the Hima Technologies website and services.",
};

const LAST_UPDATED = "18 July 2026";

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-500">Last updated: {LAST_UPDATED}</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          <p>
            These terms govern your use of the himatech.co.tz website. By using this site, you agree to these
            terms.
          </p>

          <section>
            <h2 className="font-display text-xl font-bold">Website Use</h2>
            <p className="mt-3">
              This website is provided for informational purposes to describe Hima Technologies&apos; services and
              facilitate contact with our team. Content may be updated without notice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold">Intellectual Property</h2>
            <p className="mt-3">
              All content on this site — including text, graphics, logos, and design — is the property of Hima
              Technologies unless otherwise noted, and may not be reproduced without permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold">Client Engagements</h2>
            <p className="mt-3">
              Pricing shown on this site is indicative and non-binding. Actual project scope, timelines, and fees
              are defined in a separate signed agreement between Hima Technologies and the client before any work
              begins.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold">Limitation of Liability</h2>
            <p className="mt-3">
              Hima Technologies makes reasonable efforts to keep this website accurate and available, but provides
              it &quot;as is&quot; without warranties of any kind, to the extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
              <a href="mailto:info@himatech.co.tz" className="text-black underline underline-offset-4 dark:text-white">
                info@himatech.co.tz
              </a>
              .
            </p>
          </section>

          <p className="border-t border-black/10 pt-6 text-xs text-neutral-600 dark:border-white/10 dark:text-neutral-500">
            This is a general-purpose terms-of-service template and has not been reviewed by legal counsel. Have it
            reviewed by a qualified lawyer before relying on it.
          </p>
        </div>
      </Container>
    </div>
  );
}
