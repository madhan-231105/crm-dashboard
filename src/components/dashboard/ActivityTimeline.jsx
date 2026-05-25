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

export default function ActivityTimeline() {
  return (
    <Card>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">
          Recent Activity
        </h3>

        <p className="text-sm text-neutral-500 mt-1">
          Latest CRM updates and actions
        </p>
      </div>

      <div className="space-y-6">
        {recentActivities.map((item) => {
          const Icon = iconMap[item.type];

          return (
            <div
              key={item.title}
              className="flex gap-4"
            >
              <div className="w-11 h-11 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center flex-shrink-0">
                <Icon size={18} />
              </div>

              <div className="flex-1">
                <p className="font-medium text-sm">
                  {item.title}
                </p>

                <p className="text-xs text-neutral-500 mt-1">
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