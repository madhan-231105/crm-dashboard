import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export default function generatePdfReport(
  customers,
  stats
) {
  try {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(24);

    doc.text("CRM Dashboard Report", 20, 20);

    // Subtitle
    doc.setFontSize(11);

    doc.setTextColor(100);

    doc.text(
      "Enterprise CRM Analytics Overview",
      20,
      30
    );

    // KPI Section
    doc.setFontSize(18);

    doc.setTextColor(20);

    doc.text("KPI Overview", 20, 50);

    stats.forEach((stat, index) => {
      doc.setFontSize(12);

      doc.text(
        `${stat.title}: ${stat.value} (${stat.growth})`,
        20,
        65 + index * 10
      );
    });

    // Table
    autoTable(doc, {
      startY: 115,

      head: [
        [
          "Name",
          "Company",
          "Email",
          "Deal Value",
          "Status",
        ],
      ],

      body: customers.map((customer) => [
        customer.name,
        customer.company,
        customer.email,
        customer.deal,
        customer.status,
      ]),

      styles: {
        fontSize: 10,
        cellPadding: 4,
      },

      headStyles: {
        fillColor: [240, 240, 240],
        textColor: [20, 20, 20],
      },
    });

    doc.save("crm-dashboard-report.pdf");
  } catch (error) {
    console.error("PDF Export Error:", error);
  }
}