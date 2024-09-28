// components
import { Navbar, Footer, FeatureCard } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Patners from "./patners";
import Testimonials from "./testimonials";
import ProjectCard from "@/components/project-card";
import Project from "@/components/project";


export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project/>
      <VideoIntro />
      <Feature />
      <MobileConvenience />
      <Testimonials />
      <Patners/>
      <Footer />
    </>
  );
}
