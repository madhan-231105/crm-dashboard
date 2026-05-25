"use client";

import Card from "../ui/Card";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function StatCard({ title, value, growth }) {
  return (
    <motion.div whileHover={{ y: -4 }}>
      <Card>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-neutral-500">{title}</p>

            <h3 className="text-3xl font-semibold mt-3">{value}</h3>

            <div className="flex items-center gap-2 mt-4 text-sm text-neutral-500">
              <TrendingUp size={16} />
              {growth}
            </div>
          </div>

          <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center">
            <TrendingUp size={18} />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}