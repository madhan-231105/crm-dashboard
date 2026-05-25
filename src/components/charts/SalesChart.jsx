"use client";

import Card from "../ui/Card";

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

export default function SalesChart() {
  return (
    <Card className="w-full min-w-0">
      <div className="mb-6">
        <h3 className="text-xl font-semibold">
          Sales Performance
        </h3>

        <p className="text-sm text-neutral-500 mt-1">
          Yearly sales analytics
        </p>
      </div>

      <div className="w-full h-[320px] min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={salesData}>
            <CartesianGrid
              stroke="#ececec"
              vertical={false}
            />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="sales"
              fill="#d4d4d4"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}