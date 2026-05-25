"use client";

import Card from "../ui/Card";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";

import { leadSourceData } from "@/data/crmData";

const COLORS = [
  "#111111",
  "#444444",
  "#777777",
  "#aaaaaa",
  "#d4d4d4",
];

export default function LeadSourceChart() {
  return (
    <Card className="w-full min-w-0">
      <div className="mb-6">
        <h3 className="text-xl font-semibold">
          Lead Sources
        </h3>

        <p className="text-sm text-neutral-500 mt-1">
          Customer acquisition channels
        </p>
      </div>

      <div className="w-full h-[320px] min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={leadSourceData}
              innerRadius={70}
              outerRadius={100}
              dataKey="value"
            >
              {leadSourceData.map(
                (entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      COLORS[
                        index % COLORS.length
                      ]
                    }
                  />
                )
              )}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}