import Card from "../ui/Card";

export default function TasksPanel() {
  return (
    <Card>
      <h3 className="text-xl font-semibold mb-6">Tasks & Meetings</h3>

      <div className="space-y-5">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Design onboarding flow</span>
            <span>80%</span>
          </div>

          <div className="w-full h-2 rounded-full bg-neutral-200">
            <div className="w-4/5 h-full rounded-full bg-neutral-700" />
          </div>
        </div>

        <div className="border border-neutral-200 rounded-xl p-4">
          <p className="font-medium">Meeting with Framer</p>
          <p className="text-sm text-neutral-500 mt-1">
            Tomorrow • 11:00 AM
          </p>
        </div>
      </div>
    </Card>
  );
}