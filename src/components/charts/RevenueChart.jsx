"use client";

import Card from "../ui/Card";
import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
  YAxis,
} from "recharts";
import { revenueData } from "@/data/crmData";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-md px-3.5 py-2.5 border border-zinc-200/80 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
        <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider">{label}</p>
        <p className="text-sm font-black text-black mt-1">${payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

export default function RevenueChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Card className="w-full min-w-0 border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.015)] h-[320px]">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-black">
            Revenue Overview
          </h3>
          <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mt-1">
            Loading metrics...
          </p>
        </div>
        <div className="w-full h-[220px] bg-zinc-50 rounded-xl animate-pulse" />
      </Card>
    );
  }

  return (
    <Card className="w-full min-w-0 border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-black">
          Revenue Overview
        </h3>

        <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mt-1">
          Monthly revenue performance metrics
        </p>
      </div>

      <div className="w-full h-[220px] min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DA291C" stopOpacity={0.08} />
                <stop offset="95%" stopColor="#DA291C" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#f4f4f5"
              vertical={false}
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="name"
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
              tickFormatter={(value) => `$${value / 1000}k`}
            />

            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#e4e4e7', strokeWidth: 1.5 }} />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#DA291C"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#revenueGrad)"
              dot={{ r: 3, fill: '#DA291C', strokeWidth: 1.5, stroke: '#ffffff' }}
              activeDot={{ r: 5, fill: '#DA291C', strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}