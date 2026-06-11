import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude Consulting Cowork Demo | Tensor Garden",
  description: "Portfolio demo for Claude cowork consulting, MCP integration, QuickBooks Online automation, JobTread workflow design, and guarded AI operating systems.",
  keywords: [
    "Claude consulting",
    "Claude cowork",
    "MCP integration",
    "QuickBooks Online automation",
    "JobTread automation",
    "AI systems integrator",
    "Tensor Garden"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
