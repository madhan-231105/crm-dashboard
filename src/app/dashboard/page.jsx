import StatsGrid from "@/components/dashboard/StatsGrid";

import RevenueChart from "@/components/charts/RevenueChart";
import SalesChart from "@/components/charts/SalesChart";
import LeadSourceChart from "@/components/charts/LeadSourceChart";

import PipelineBoard from "@/components/pipeline/PipelineBoard";

import CustomerTable from "@/components/tables/CustomerTable";

import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import TasksPanel from "@/components/dashboard/TasksPanel";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <StatsGrid />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>

        <LeadSourceChart />
      </div>

      <SalesChart />

      <PipelineBoard />

      <CustomerTable />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ActivityTimeline />

        <TasksPanel />
      </div>
    </div>
  );
}