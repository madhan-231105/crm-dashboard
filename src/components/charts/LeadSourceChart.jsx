"use client";

import Card from "../ui/Card";

import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";

import { leadSourceData } from "@/data/crmData";

const COLORS = ["#111", "#777", "#aaa", "#ddd"];

export default function LeadSourceChart() {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-6">Lead Sources</h3>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={leadSourceData}
              innerRadius={70}
              outerRadius={100}
              dataKey="value"
            >
              {leadSourceData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}