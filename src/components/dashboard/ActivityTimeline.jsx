import Card from "../ui/Card";

import {
  Mail,
  Phone,
  CalendarCheck,
  Briefcase,
} from "lucide-react";

import { recentActivities } from "@/data/crmData";

const iconMap = {
  Call: Phone,
  Email: Mail,
  Meeting: CalendarCheck,
  Deal: Briefcase,
};

const colorClasses = {
  Call: "bg-red-50/50 text-[#DA291C] border-red-100",
  Email: "bg-red-50/50 text-[#DA291C] border-red-100",
  Meeting: "bg-red-50/50 text-[#DA291C] border-red-100",
  Deal: "bg-red-50/50 text-[#DA291C] border-red-100",
};

export default function ActivityTimeline() {
  return (
    <Card className="border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-black">
          Recent Activity
        </h3>

        <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mt-1">
          Latest CRM updates and actions
        </p>
      </div>

      <div className="relative space-y-4">
        {/* Real timeline vertical line connector */}
        <div className="absolute left-5 top-2 bottom-8 w-0.5 bg-red-100 pointer-events-none" />

        {recentActivities.map((item) => {
          const Icon = iconMap[item.type];
          const colorStyles = colorClasses[item.type] || "bg-zinc-50 text-black border-zinc-200/80";

          return (
            <div
              key={item.title}
              className="relative flex gap-4 items-start group"
            >
              <div className={`w-10 h-10 rounded-xl ${colorStyles} border flex items-center justify-center flex-shrink-0 z-10 bg-white shadow-xs transition group-hover:scale-105 duration-200`}>
                <Icon size={16} className="stroke-[2.5]" />
              </div>

              <div className="flex-1 min-w-0 pt-0.5">
                <p className="font-bold text-xs text-black leading-snug">
                  {item.title}
                </p>

                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-1">
                  {item.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}