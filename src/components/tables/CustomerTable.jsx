import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { customers } from "@/data/crmData";
import { Search, SlidersHorizontal } from "lucide-react";

export default function CustomerTable() {
  return (
    <Card className="border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-black">Customers</h3>
          <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mt-1">Enterprise account details</p>
        </div>

        <div className="flex gap-2">
          <div className="flex items-center gap-2 px-3 py-2 bg-zinc-50 border border-zinc-200/60 hover:bg-zinc-100/50 focus-within:bg-white focus-within:border-[#DA291C] focus-within:ring-2 focus-within:ring-[#DA291C]/10 rounded-xl transition duration-150">
            <Search size={14} className="text-zinc-450" />
            <input
              placeholder="Search..."
              className="bg-transparent outline-none text-xs text-black placeholder-zinc-400 w-[120px] md:w-[150px] font-bold"
            />
          </div>

          <button className="px-3.5 py-2 border border-zinc-200 rounded-xl hover:bg-zinc-50 flex items-center gap-1.5 text-xs font-bold text-black transition">
            <SlidersHorizontal size={14} />
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="text-left text-[10px] font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-150">
              <th className="pb-3">Name</th>
              <th className="pb-3">Company</th>
              <th className="pb-3">Email</th>
              <th className="pb-3">Deal Value</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Last Activity</th>
            </tr>
          </thead>

          <tbody>
            {customers.slice(0, 7).map((customer, index) => (
              <tr
                key={customer.email}
                className="border-b border-zinc-50 hover:bg-zinc-50/20 transition duration-150"
              >
                <td className="py-2 text-xs font-black text-black">{customer.name}</td>
                <td className="text-xs font-bold text-zinc-500">{customer.company}</td>
                <td className="text-xs font-bold text-zinc-400">{customer.email}</td>
                <td className="text-xs font-black text-black">{customer.deal}</td>
                <td>
                  <Badge>{customer.status}</Badge>
                </td>
                <td className="text-[11px] font-bold text-zinc-400">{customer.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Spacing Fix: SaaS Table Footer */}
      <div className="mt-4 pt-4 border-t border-zinc-150 flex items-center justify-between">
        <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider">
          Showing 7 of {customers.length} Accounts
        </span>
        <button className="text-[10px] font-black text-black hover:underline uppercase tracking-wider transition">
          View All Accounts
        </button>
      </div>
    </Card>
  );
}