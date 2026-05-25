import Card from "../ui/Card";

const columns = [
  "New Lead",
  "Contacted",
  "Proposal",
  "Negotiation",
  "Closed",
];

export default function PipelineBoard() {
  return (
    <Card>
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-semibold">Sales Pipeline</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {columns.map((column, index) => (
          <div
            key={index}
            className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200"
          >
            <h4 className="font-medium mb-4">{column}</h4>

            <div className="space-y-4">
              <div className="bg-white border border-neutral-200 rounded-xl p-4 hover:shadow-sm transition">
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-neutral-500 mt-1">Linear</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm">$12,000</span>

                  <span className="text-xs px-2 py-1 rounded-full bg-neutral-100">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}