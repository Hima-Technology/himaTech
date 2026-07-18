import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
