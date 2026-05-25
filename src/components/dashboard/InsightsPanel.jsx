import Card from "../ui/Card";

const insights = [
  "Lead conversion increased 12% this month.",

  "Enterprise customers generate 68% more revenue.",

  "Organic traffic is the top acquisition source.",

  "Deal closing time reduced by 4 days.",
];

export default function InsightsPanel() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold tracking-tight">
          AI Insights
        </h3>

        <span className="text-xs px-3 py-1 rounded-full border border-neutral-200 bg-neutral-100">
          Smart Analytics
        </span>
      </div>

      <div className="space-y-4">
        {insights.map((item) => (
          <div
            key={item}
            className="border border-neutral-200 rounded-xl p-4 bg-neutral-50"
          >
            <p className="text-sm leading-relaxed text-neutral-700">
              {item}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}