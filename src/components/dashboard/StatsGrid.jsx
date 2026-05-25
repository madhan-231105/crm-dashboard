"use client";

import { stats } from "@/data/crmData";
import StatCard from "./StatCard";

const itemConfig = {
  "Revenue": {
    iconName: "Revenue"
  },
  "Active Customers": {
    iconName: "Customers"
  },
  "Conversion Rate": {
    iconName: "Conversion"
  },
  "New Leads": {
    iconName: "Leads"
  }
};

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">
      {stats.map((item) => {
        const config = itemConfig[item.title] || { iconName: "Revenue" };
        return (
          <StatCard
            key={item.title}
            {...item}
            {...config}
          />
        );
      })}
    </div>
  );
}