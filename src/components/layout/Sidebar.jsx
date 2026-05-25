"use client";

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
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Users, label: "Leads" },
  { icon: Briefcase, label: "Customers" },
  { icon: BarChart3, label: "Deals" },
  { icon: BarChart3, label: "Analytics" },
  { icon: CheckSquare, label: "Tasks" },
  { icon: MessageSquare, label: "Messages" },
  { icon: Calendar, label: "Calendar" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r border-neutral-200 h-screen sticky top-0 hidden lg:flex flex-col">
      <div className="p-8 text-2xl font-semibold tracking-tight">
        CRM Studio
      </div>

      <nav className="px-4 space-y-2">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                index === 0
                  ? "bg-neutral-100 text-black"
                  : "hover:bg-neutral-100 text-neutral-600"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}