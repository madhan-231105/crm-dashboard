import Card from "../ui/Card";
import { Mail, Phone, CalendarCheck } from "lucide-react";

const items = [
  {
    icon: Phone,
    title: "Call with Linear",
    time: "1 hour ago",
  },
  {
    icon: Mail,
    title: "Proposal email sent",
    time: "3 hours ago",
  },
  {
    icon: CalendarCheck,
    title: "Meeting scheduled",
    time: "Yesterday",
  },
];

export default function ActivityTimeline() {
  return (
    <Card>
      <h3 className="text-xl font-semibold mb-6">Recent Activity</h3>

      <div className="space-y-6">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                <Icon size={18} />
              </div>

              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-neutral-500 mt-1">
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