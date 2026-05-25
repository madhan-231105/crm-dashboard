import Card from "../ui/Card";
import { TrendingUp, Target, ShieldCheck, BarChart3 } from "lucide-react";

export default function ForecastWidget() {
  const currentPredicted = 182400;
  const targetGoal = 200000;
  const progressPercent = Math.round((currentPredicted / targetGoal) * 100);

  return (
    <Card className="border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-6 border-b border-zinc-100">
        <div>
          <span className="text-[10px] text-black font-bold bg-zinc-100 px-2.5 py-0.5 rounded-full inline-block uppercase tracking-wider border border-zinc-200">
            AI Sales Predictor
          </span>

          <h3 className="text-3xl font-black text-black mt-2.5 tracking-tight">
            $182,400
          </h3>

          <p className="text-xs text-zinc-500 mt-2 max-w-xl leading-relaxed font-semibold">
            Forecasted monthly revenue based on machine learning analysis of active pipelines, deal progression velocity, and seasonal team conversion patterns.
          </p>
        </div>

        <div className="flex flex-col items-start lg:items-end gap-2 flex-shrink-0">
          <span className="flex items-center gap-1 text-[11px] font-bold text-black bg-zinc-100 px-2.5 py-1 rounded-lg border border-zinc-200">
            <TrendingUp size={14} />
            +14.2%
          </span>

          <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
            Est. next quarter growth
          </span>
        </div>
      </div>

      {/* Realignment Gaps Fix: Adding Sales Goal Progress & Details Grid */}
      <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-zinc-450 font-bold uppercase tracking-wider">Q3 Revenue Target Goal</span>
            <span className="text-xs text-black font-black">{progressPercent}% Achieved</span>
          </div>

          <div className="w-full h-2 rounded-full bg-zinc-100 border border-zinc-200/40 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#DA291C] transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex justify-between items-center mt-2 text-[10px] text-zinc-450 font-bold uppercase tracking-wider">
            <span>Current: $182,400</span>
            <span>Goal: $200,000</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 border-l border-zinc-100 pl-0 md:pl-6">
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-400 font-bold uppercase flex items-center gap-1">
              <Target size={12} className="text-zinc-450" /> Goal
            </span>
            <span className="text-sm font-black text-black mt-1">$200K</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-400 font-bold uppercase flex items-center gap-1">
              <BarChart3 size={12} className="text-zinc-450" /> Pipeline
            </span>
            <span className="text-sm font-black text-black mt-1">$240K</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-400 font-bold uppercase flex items-center gap-1">
              <ShieldCheck size={12} className="text-zinc-450" /> Confidence
            </span>
            <span className="text-sm font-black text-black mt-1">94%</span>
          </div>
        </div>
      </div>
    </Card>
  );
}