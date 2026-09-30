import { LegacyPage, getSnapshotMetadata } from "@/lib/legacy-page";
export const metadata = getSnapshotMetadata("index.html");
export default function Page() { return <LegacyPage file="index.html" />; }
