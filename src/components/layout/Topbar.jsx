"use client";

import {
  Bell,
  Menu,
} from "lucide-react";

export default function Topbar({
  setMobileMenuOpen,
}) {
  return (
    <header
      className="
        h-auto
        lg:h-20
        bg-[#DA291C]
        border-b
        border-black/10
        px-4
        sm:px-6
        md:px-8
        py-4
        flex
        items-center
        justify-between
        sticky
        top-0
        z-30
        shadow-[0_2px_10px_rgba(218,41,28,0.15)]
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <button
          className="
            lg:hidden
            w-10
            h-10
            rounded-xl
            border
            border-white/20
            flex
            items-center
            justify-center
            text-white
            hover:bg-white/10
            transition
          "
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={20} />
        </button>

        <div>
          <p className="text-[10px] text-white/70 font-bold uppercase tracking-wider">
            Dashboard / Overview
          </p>

          <h1 className="text-xl md:text-2xl font-black mt-0.5 tracking-tight text-white">
            CRM Analytics Dashboard
          </h1>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        {/* NOTIFICATION */}
        <button
          className="
            w-10
            h-10
            rounded-xl
            border
            border-white/20
            flex
            items-center
            justify-center
            text-white
            hover:bg-white/10
            transition
            relative
          "
        >
          <Bell size={18} />

          <span
            className="
              absolute
              top-2
              right-2
              w-2
              h-2
              rounded-full
              bg-white
              border
              border-[#DA291C]
            "
          />
        </button>

        {/* PROFILE */}
        <div className="flex items-center gap-3">
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-white
              flex
              items-center
              justify-center
              text-[#DA291C]
              font-extrabold
              text-sm
            "
          >
            M
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white">
              Madhan
            </p>

            <p className="text-xs text-white/70">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}