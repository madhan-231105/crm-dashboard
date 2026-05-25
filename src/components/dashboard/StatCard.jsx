"use client";

import Card from "../ui/Card";
import { motion } from "framer-motion";
import { DollarSign, Users, Zap, Target } from "lucide-react";

const iconMap = {
  Revenue: DollarSign,
  Customers: Users,
  Conversion: Zap,
  Leads: Target,
};

export default function StatCard({ title, value, growth, description, iconName }) {
  const Icon = iconMap[iconName];
  const isNegative = growth.startsWith("-");

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card className="min-h-[140px] relative overflow-hidden flex flex-col justify-between border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{title}</p>
            <h3 className="text-2xl font-black text-black mt-2 tracking-tight">{value}</h3>
          </div>

          <div className="w-10 h-10 rounded-xl bg-red-50/40 border border-red-100/50 text-[#DA291C] flex items-center justify-center shadow-xs">
            {Icon && <Icon size={18} className="stroke-[2.5]" />}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 text-xs font-semibold">
          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${isNegative ? 'bg-zinc-100 text-zinc-650 border-zinc-200' : 'bg-red-50 text-[#DA291C] border-red-100 shadow-[0_1px_2px_rgba(218,41,28,0.02)]'}`}>
            {growth}
          </span>
          <span className="text-[10px] text-zinc-450 font-bold uppercase tracking-wider">{description}</span>
        </div>
      </Card>
    </motion.div>
  );
}