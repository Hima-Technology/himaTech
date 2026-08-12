import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="lg-scene" aria-hidden="true">
        <div className="lg-scene__blob lg-scene__blob--1" />
        <div className="lg-scene__blob lg-scene__blob--2" />
        <div className="lg-scene__blob lg-scene__blob--3" />
      </div>
      <Navbar />
      <div className="relative z-10 min-h-screen">{children}</div>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}

export default Layout;
