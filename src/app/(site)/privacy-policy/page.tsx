import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | Hima Technologies",
  description: "How Hima Technologies collects, uses, and protects your information.",
};

const LAST_UPDATED = "18 July 2026";

export default function PrivacyPolicy() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-neutral-500">Last updated: {LAST_UPDATED}</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-neutral-400">
          <p>
            Hima Technologies (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This policy explains what
            information we collect through himatech.co.tz, how we use it, and the choices you have.
          </p>

          <section>
            <h2 className="font-display text-xl font-bold text-white">Information We Collect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Contact details you submit through our contact form (name, email, subject, message).</li>
              <li>Basic technical data collected automatically by our hosting provider (e.g. IP address, browser type) for security and analytics purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">How We Use Information</h2>
            <p className="mt-3">
              We use the information you provide solely to respond to your inquiry and, if you become a client,
              to deliver the services you&apos;ve engaged us for. We do not sell your personal information to third
              parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">Data Retention</h2>
            <p className="mt-3">
              We retain contact form submissions only as long as necessary to respond to your inquiry or fulfill a
              contractual relationship, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">Your Rights</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your personal information at any time by
              contacting us at{" "}
              <a href="mailto:info@himatech.co.tz" className="text-white underline underline-offset-4">
                info@himatech.co.tz
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">Contact</h2>
            <p className="mt-3">
              Questions about this policy can be sent to{" "}
              <a href="mailto:info@himatech.co.tz" className="text-white underline underline-offset-4">
                info@himatech.co.tz
              </a>
              .
            </p>
          </section>

          <p className="border-t border-white/10 pt-6 text-xs text-neutral-500">
            This is a general-purpose privacy policy template and has not been reviewed by legal counsel. Have it
            reviewed by a qualified lawyer before relying on it, particularly if you serve clients in jurisdictions
            with specific requirements (e.g. GDPR, CCPA).
          </p>
        </div>
      </Container>
    </div>
  );
}
