"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
