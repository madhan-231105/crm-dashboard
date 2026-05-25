import Card from "../ui/Card";

export default function ForecastWidget() {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-neutral-500">
            Predicted Revenue
          </p>

          <h3 className="text-4xl font-semibold mt-3 tracking-tight">
            $182,400
          </h3>

          <p className="text-sm text-neutral-500 mt-3 max-w-sm">
            Forecasted monthly revenue based on current CRM
            pipeline performance.
          </p>
        </div>

        <div className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs">
          +14.2%
        </div>
      </div>
    </Card>
  );
}