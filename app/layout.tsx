import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://czarinaagoncillo.com"),
  title: "Czarina Agoncillo | Marketing Technologist, Systems Builder, Author",
  description:
    "Official website of Czarina Agoncillo — marketing technologist, systems builder, SEO specialist, author, and creator of Strategos.",
  openGraph: {
    title: "Czarina Agoncillo",
    description:
      "Marketing Technologist, Systems Builder, SEO Specialist, Author, and creator of Strategos.",
    url: "https://czarinaagoncillo.com",
    siteName: "Czarina Agoncillo",
    type: "website",
    images: [
      {
        url: "/czarina.png",
        width: 1200,
        height: 1200,
        alt: "Czarina Agoncillo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Czarina Agoncillo",
    description:
      "Marketing Technologist, Systems Builder, SEO Specialist, Author, and creator of Strategos.",
    images: ["/czarina.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}