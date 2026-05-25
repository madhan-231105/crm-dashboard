"use client";

import Card from "../ui/Card";
import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  YAxis,
  CartesianGrid,
} from "recharts";
import { salesData } from "@/data/crmData";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-md px-3.5 py-2.5 border border-zinc-200/80 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
        <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider">{label}</p>
        <p className="text-sm font-black text-black mt-1">{payload[0].value.toLocaleString()} deals</p>
      </div>
    );
  }
  return null;
};

export default function SalesChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Card className="w-full min-w-0 border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.015)] h-[300px]">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-black">
            Sales Performance
          </h3>
          <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mt-1">
            Loading metrics...
          </p>
        </div>
        <div className="w-full h-[200px] bg-zinc-50 rounded-xl animate-pulse" />
      </Card>
    );
  }

  return (
    <Card className="w-full min-w-0 border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-black">
          Sales Performance
        </h3>

        <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mt-1">
          Yearly sales analytics and performance indicators
        </p>
      </div>

      <div className="w-full h-[200px] min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff4d4d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#DA291C" stopOpacity={1} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#f4f4f5"
              vertical={false}
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="month"
              tick={{ fill: '#000000', fontSize: 10, fontWeight: 700 }}
              axisLine={false}
              tickLine={false}
              dy={10}
            />

            <YAxis
              tick={{ fill: '#000000', fontSize: 10, fontWeight: 700 }}
              axisLine={false}
              tickLine={false}
              width={45}
              tickFormatter={(value) => `${value / 1000}k`}
            />

            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f4f4f5', opacity: 0.4 }} />

            <Bar
              dataKey="sales"
              fill="url(#salesGrad)"
              radius={[5, 5, 0, 0]}
              barSize={14}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}