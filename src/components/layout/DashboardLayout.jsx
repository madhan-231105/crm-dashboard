"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({
  children,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-[#ececec] flex">
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <Topbar setMobileMenuOpen={setMobileMenuOpen} />

        <main className="p-4 sm:p-6 md:p-8 overflow-x-hidden max-w-[1700px] w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}