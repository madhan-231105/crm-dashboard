import StatsGrid from "@/components/dashboard/StatsGrid";

import RevenueChart from "@/components/charts/RevenueChart";
import SalesChart from "@/components/charts/SalesChart";
import LeadSourceChart from "@/components/charts/LeadSourceChart";

import PipelineBoard from "@/components/pipeline/PipelineBoard";

import CustomerTable from "@/components/tables/CustomerTable";

import ActivityTimeline from "@/components/dashboard/ActivityTimeline";

import TasksPanel from "@/components/dashboard/TasksPanel";

import ForecastWidget from "@/components/dashboard/ForecastWidget";

import InsightsPanel from "@/components/dashboard/InsightsPanel";

export default function DashboardPage() {
  return (
    <div className="space-y-6 pb-10">
      <StatsGrid />

      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
        <ForecastWidget />

        <InsightsPanel />
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6">
        <div className="2xl:col-span-2 min-w-0">
          <RevenueChart />
        </div>

        <div className="min-w-0">
          <LeadSourceChart />
        </div>
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