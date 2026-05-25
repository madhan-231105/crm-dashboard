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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 border-r border-neutral-200 bg-white">
      <div className="px-8 pt-8 pb-6 border-b border-neutral-200">
        <h2 className="text-2xl font-semibold tracking-tight">
          CRM Studio
        </h2>

        <p className="text-sm text-neutral-500 mt-1">
          Enterprise Workspace
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {items.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              href={item.href}
              key={item.label}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                active
                  ? "bg-neutral-100 text-black border border-neutral-200"
                  : "text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-neutral-200">
        <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-neutral-200" />

            <div>
              <p className="text-sm font-medium">Madhan</p>
              <p className="text-xs text-neutral-500">
                CRM Administrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}