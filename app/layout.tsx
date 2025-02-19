import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fitness Studio",
  description: "Transform your body, transform your life.",
  url: "https://fitness-studio-landing.vercel.app",
  type: "website",
  keywords: ["fitness", "studio", "gym", "workout", "exercise"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
