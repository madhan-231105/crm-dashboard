import "./globals.css";

export const metadata = {
  title: "Premium CRM Dashboard",
  description: "Modern CRM Dashboard UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}