import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex bg-[#f5f5f5] min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}