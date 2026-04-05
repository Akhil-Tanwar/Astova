import type { Metadata } from "next";
import SqlTutorial from "./SqlTutorial";

export const metadata: Metadata = {
  title: "Interactive SQL Tutorial | Astova",
  description:
    "Learn SQL hands-on with a live, interactive editor powered by SQLite. Practice queries against real data — no setup required.",
};

export default function SqlTutorialPage() {
  return <SqlTutorial />;
}
