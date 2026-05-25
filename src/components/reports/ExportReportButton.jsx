"use client";

import { Download } from "lucide-react";

import generatePdfReport from "@/utils/generatePdfReport";

import {
  customers,
  stats,
} from "@/data/crmData";

export default function ExportReportButton() {
  const handleExport = () => {
    generatePdfReport(customers, stats);
  };

  return (
    <button
      onClick={handleExport}
      className="h-11 px-5 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-100 transition flex items-center gap-2 text-sm font-medium"
    >
      <Download size={16} />

      Export PDF
    </button>
  );
}