import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Work from "@/components/sections/Work";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <Work />
      <Testimonials />
      <CTA
        title="Ready to build something great?"
        description="Tell us about your project and we'll get back to you within one business day."
        buttonText="Start a Project"
      />
    </>
  );
}
