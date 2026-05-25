"use client";

import Card from "../ui/Card";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { leadSourceData } from "@/data/crmData";

const COLORS = [
  "#E1251B",
  "#E8453A",
  "#ED6A61",
  "#F18D86",
  "#F5B3AE",
];

export default function LeadSourceChart() {
  return (
    <Card className="h-full">
      {/* HEADER */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-neutral-900">
          Lead Sources
        </h3>

        <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400 mt-1">
          Customer acquisition channels
        </p>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10">
        {/* CHART */}
        <div className="relative w-[190px] h-[190px] flex-shrink-0">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={leadSourceData}
                innerRadius={58}
                outerRadius={84}
                paddingAngle={2}
                strokeWidth={0}
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
            </PieChart>
          </ResponsiveContainer>

          {/* CENTER LABEL */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400">
              Total
            </p>

            <h4 className="text-4xl font-bold text-neutral-900 leading-none mt-1">
              100%
            </h4>
          </div>
        </div>

        {/* LEGEND */}
        <div className="flex-1 w-full max-w-[320px]">
          <div className="space-y-5">
            {leadSourceData.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                {/* LEFT */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor:
                        COLORS[index],
                    }}
                  />

                  <span className="text-[15px] font-medium text-neutral-700">
                    {item.name}
                  </span>
                </div>

                {/* RIGHT */}
                <span className="text-[15px] font-semibold text-neutral-900">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}