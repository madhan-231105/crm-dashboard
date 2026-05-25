import StatsGrid from "@/components/dashboard/StatsGrid";

import RevenueChart from "@/components/charts/RevenueChart";

import LeadSourceChart from "@/components/charts/LeadSourceChart";

import PipelineBoard from "@/components/pipeline/PipelineBoard";

import CustomerTable from "@/components/tables/CustomerTable";

import ActivityTimeline from "@/components/dashboard/ActivityTimeline";

import TasksPanel from "@/components/dashboard/TasksPanel";

export default function DashboardPage() {
  return (
    <div className="space-y-4 pb-8">
      {/* KPI */}
      <StatsGrid />

      {/* ANALYTICS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 items-start">
        {/* LEFT */}
        <div className="xl:col-span-2 space-y-4">
          <RevenueChart />

          <LeadSourceChart />
        </div>

        {/* RIGHT */}
        <div>
          <TasksPanel />
        </div>
      </div>

      {/* PIPELINE */}
      <PipelineBoard />

      {/* TABLE + ACTIVITY */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 items-start">
        <div className="xl:col-span-2">
          <CustomerTable />
        </div>

        <ActivityTimeline />
      </div>
    </div>
  );
}