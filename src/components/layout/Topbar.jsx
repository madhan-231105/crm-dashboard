"use client";

import { Bell, Search, Moon } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-20 bg-white border-b border-neutral-200 px-6 flex items-center justify-between">
      <div>
        <p className="text-sm text-neutral-500">Dashboard / Overview</p>
        <h1 className="text-2xl font-semibold mt-1">
          CRM Analytics Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 bg-neutral-100 px-4 py-2 rounded-xl">
          <Search size={16} className="text-neutral-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm"
          />
        </div>

        <button className="w-11 h-11 rounded-xl border border-neutral-200 flex items-center justify-center hover:bg-neutral-100">
          <Bell size={18} />
        </button>

        <button className="w-11 h-11 rounded-xl border border-neutral-200 flex items-center justify-center hover:bg-neutral-100">
          <Moon size={18} />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-neutral-200" />

          <div className="hidden md:block">
            <p className="text-sm font-medium">Madhan</p>
            <p className="text-xs text-neutral-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}