"use client";

import {
  Bell,
  Search,
  Moon,
  Menu,
} from "lucide-react";

import ExportReportButton from "../reports/ExportReportButton";

export default function Topbar({
  setMobileMenuOpen,
}) {
  return (
    <header className="h-auto lg:h-20 bg-white border-b border-neutral-200 px-4 md:px-6 py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4 sticky top-0 z-30">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div>
          <p className="text-sm text-neutral-500">
            Dashboard / Overview
          </p>

          <h1 className="text-xl md:text-2xl font-semibold mt-1 tracking-tight">
            CRM Analytics Dashboard
          </h1>
        </div>

        <button
          className="lg:hidden w-11 h-11 rounded-xl border border-neutral-200 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={20} />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="hidden md:flex items-center gap-2 bg-neutral-100 px-4 py-2 rounded-xl min-w-[220px]">
          <Search
            size={16}
            className="text-neutral-500"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>

        <ExportReportButton />

        <button className="w-11 h-11 rounded-xl border border-neutral-200 flex items-center justify-center hover:bg-neutral-100">
          <Bell size={18} />
        </button>

        <button className="w-11 h-11 rounded-xl border border-neutral-200 flex items-center justify-center hover:bg-neutral-100">
          <Moon size={18} />
        </button>

        <div className="hidden sm:flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-neutral-200" />

          <div>
            <p className="text-sm font-medium">
              Madhan
            </p>

            <p className="text-xs text-neutral-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}