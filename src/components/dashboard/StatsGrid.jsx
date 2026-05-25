import { stats } from "@/data/crmData";

import StatCard from "./StatCard";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <StatCard key={index} {...item} />
      ))}
    </div>
  );
}