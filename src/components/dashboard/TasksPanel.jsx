"use client";

import Card from "../ui/Card";
import { tasks } from "@/data/crmData";

export default function TasksPanel() {
  return (
    <Card className="border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-black">
            Tasks & Deadlines
          </h3>

          <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mt-1">
            Team productivity overview
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.title} className="p-3 border border-zinc-200/60 bg-zinc-50/20 rounded-xl hover:bg-zinc-50/60 transition duration-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-xs font-bold text-black leading-tight">
                  {task.title}
                </p>

                <p className="text-[10px] text-zinc-400 mt-1 font-bold uppercase tracking-wider">
                  Due: {task.deadline}
                </p>
              </div>

              <span className="text-[10px] font-bold text-white bg-black px-1.5 py-0.5 rounded-md">
                {task.progress}%
              </span>
            </div>

            <div className="w-full h-1.5 rounded-full bg-zinc-100 border border-zinc-200/40 overflow-hidden">
              <div
                className="h-full rounded-full bg-[#DA291C] transition-all duration-300"
                style={{
                  width: `${task.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}