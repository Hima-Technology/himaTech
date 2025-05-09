// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Patners from "./patners";
import Testimonials from "./testimonials";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <VideoIntro /> */}
      <Feature />
      <MobileConvenience />
      {/* <Testimonials /> */}
      <Patners/>
      <Footer />
    </>
  );
}
