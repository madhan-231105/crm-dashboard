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
      className="
      h-10
      px-5
      rounded-xl
      border
      border-white
      bg-white
      text-[#DA291C]
      hover:bg-white/95
      transition
      flex
      items-center
      gap-2
      text-xs
      font-extrabold
      uppercase
      tracking-wider
      shadow-sm
    "
    >
      <Download size={16} />

      Export Report
    </button>
  );
}