"use client";

import Card from "../ui/Card";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  YAxis,
} from "recharts";

import { revenueData } from "@/data/crmData";

export default function RevenueChart() {
  return (
    <Card className="w-full min-w-0">
      <div className="mb-6">
        <h3 className="text-xl font-semibold">
          Revenue Overview
        </h3>

        <p className="text-sm text-neutral-500 mt-1">
          Monthly revenue performance
        </p>
      </div>

      <div className="w-full h-[320px] min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData}>
            <CartesianGrid
              stroke="#ececec"
              vertical={false}
            />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#111111"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}