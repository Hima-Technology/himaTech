import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Work from "@/components/sections/Work";
import Partners from "@/components/sections/Partners";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import { getSiteSettings, getTestimonials } from "@/lib/cms/queries";

export default async function Home() {
  const [settings, testimonials] = await Promise.all([getSiteSettings(), getTestimonials()]);
  const showTestimonials = Boolean(settings?.showTestimonials && testimonials && testimonials.length > 0);

  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <Work />
      <Partners />
      {showTestimonials && <Testimonials items={testimonials ?? []} />}
      <CTA
        title="Ready to build something great?"
        description="Tell us about your project and we'll get back to you within one business day."
        buttonText="Start a Project"
      />
    </>
  );
}
