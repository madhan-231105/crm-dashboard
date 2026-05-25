"use client";

import Card from "../ui/Card";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

import { salesData } from "@/data/crmData";

export default function SalesChart() {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-6">Sales Performance</h3>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={salesData}>
            <XAxis dataKey="month" />
            <Tooltip />
            <Bar dataKey="sales" fill="#d4d4d4" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}