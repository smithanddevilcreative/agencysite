import { LegacyPage, getSnapshotMetadata } from "@/lib/legacy-page";
export const metadata = getSnapshotMetadata("work.html");
export default function Page() { return <LegacyPage file="work.html" />; }
