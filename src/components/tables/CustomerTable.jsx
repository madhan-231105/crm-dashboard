import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { customers } from "@/data/crmData";
import { Search, SlidersHorizontal } from "lucide-react";

export default function CustomerTable() {
  return (
    <Card>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-semibold">Customers</h3>

        <div className="flex gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-xl">
            <Search size={16} />
            <input
              placeholder="Search customers..."
              className="bg-transparent outline-none text-sm"
            />
          </div>

          <button className="px-4 py-2 border border-neutral-200 rounded-xl hover:bg-neutral-100 flex items-center gap-2">
            <SlidersHorizontal size={16} />
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-neutral-500 border-b border-neutral-200">
              <th className="pb-4">Name</th>
              <th className="pb-4">Company</th>
              <th className="pb-4">Email</th>
              <th className="pb-4">Deal</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Activity</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer, index) => (
              <tr
                key={index}
                className="border-b border-neutral-100 hover:bg-neutral-50 transition"
              >
                <td className="py-5">{customer.name}</td>
                <td>{customer.company}</td>
                <td>{customer.email}</td>
                <td>{customer.deal}</td>
                <td>
                  <Badge>{customer.status}</Badge>
                </td>
                <td>{customer.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}