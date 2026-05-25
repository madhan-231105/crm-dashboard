"use client";

import Card from "../ui/Card";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

import { revenueData } from "@/data/crmData";

export default function RevenueChart() {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-6">Revenue Overview</h3>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData}>
            <CartesianGrid stroke="#ececec" vertical={false} />

            <XAxis dataKey="name" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#111"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}