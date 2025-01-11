import { Metadata } from "next";
import OverviewSection from "./overview/OverviewSection";

export const metadata: Metadata = {
  title: "Joan Boix's Blog",
  description: "This is my blog, where I write about things that interest me.",
  openGraph: {
    title: "Joan Boix's Blog",
    description:
      "This is my blog, where I write about things that interest me.",
    url: "https://joanboix.dev/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joan Boix's Blog",
    description:
      "This is my blog, where I write about things that interest me.",
  },
};

export default function Blog() {
  return (
    <main className="flex-grow">
      <OverviewSection />
    </main>
  );
}
