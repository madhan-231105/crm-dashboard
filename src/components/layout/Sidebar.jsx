"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  Briefcase,
  BarChart3,
  CheckSquare,
  MessageSquare,
  Calendar,
  Settings,
  X,
} from "lucide-react";

const items = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Leads",
    href: "/dashboard/leads",
    icon: Users,
  },
  {
    label: "Customers",
    href: "/dashboard/customers",
    icon: Briefcase,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    label: "Tasks",
    href: "/dashboard/tasks",
    icon: CheckSquare,
  },
  {
    label: "Messages",
    href: "/dashboard/messages",
    icon: MessageSquare,
  },
  {
    label: "Calendar",
    href: "/dashboard/calendar",
    icon: Calendar,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar({
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const pathname = usePathname();

  return (
    <>
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <aside
        className={`
        fixed lg:sticky top-0 left-0 z-50
        h-screen w-64 bg-[#fbf5f5] border-r border-[#DA291C]/10
        transform transition-transform duration-300
        flex flex-col
        ${
          mobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }
        lg:translate-x-0
      `}
      >
        <div className="px-6 py-6 border-b border-[#DA291C]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#DA291C] flex items-center justify-center text-white shadow-xs">
              <Briefcase size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <h2 className="text-base font-extrabold tracking-tight text-black">
                CRM Studio
              </h2>
              <span className="text-[10px] text-zinc-600 font-bold bg-zinc-100 px-2 py-0.5 rounded-full inline-block mt-0.5 uppercase tracking-wider border border-zinc-200/50">
                Enterprise
              </span>
            </div>
          </div>

          <button
            className="lg:hidden text-zinc-500 hover:text-black"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {items.map((item) => {
            const Icon = item.icon;

            const active = pathname === item.href;

            return (
              <Link
                href={item.href}
                key={item.label}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold border ${
                  active
                    ? "bg-[#DA291C] text-white border-[#DA291C] shadow-xs"
                    : "text-zinc-700 hover:bg-[#DA291C]/5 hover:text-[#DA291C] border-transparent"
                }`}
              >
                <Icon size={18} className={active ? "text-white" : "text-[#DA291C]/65"} />

                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#DA291C]/10">
          <div className="bg-[#DA291C]/5 rounded-2xl p-4 border border-[#DA291C]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#DA291C] flex items-center justify-center text-white font-extrabold text-sm shadow-xs">
                M
              </div>

              <div>
                <p className="text-sm font-extrabold text-black leading-none">
                  Madhan
                </p>

                <p className="text-[10px] text-zinc-450 mt-1 font-bold uppercase tracking-wider">
                  CRM Administrator
                </p>
              </div>
            </div>

            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse border border-white shadow-xs" title="Active session" />
          </div>
        </div>
      </aside>
    </>
  );
}