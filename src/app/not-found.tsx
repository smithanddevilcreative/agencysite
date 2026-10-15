import type { Metadata } from "next";
import { Pixel404Game } from "@/components/Pixel404Game";

export const metadata: Metadata = {
  title: "404",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <Pixel404Game />;
}
