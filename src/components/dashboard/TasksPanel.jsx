import Card from "../ui/Card";

import { tasks } from "@/data/crmData";

export default function TasksPanel() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold">
            Tasks & Deadlines
          </h3>

          <p className="text-sm text-neutral-500 mt-1">
            Team productivity overview
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {tasks.map((task) => (
          <div key={task.title}>
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm font-medium">
                  {task.title}
                </p>

                <p className="text-xs text-neutral-500 mt-1">
                  Deadline: {task.deadline}
                </p>
              </div>

              <span className="text-sm font-medium">
                {task.progress}%
              </span>
            </div>

            <div className="w-full h-2 rounded-full bg-neutral-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-neutral-700"
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