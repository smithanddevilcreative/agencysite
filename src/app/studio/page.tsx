import { LegacyPage, getSnapshotMetadata } from "@/lib/legacy-page";
export const metadata = getSnapshotMetadata("studio.html");
export default function Page() { return <LegacyPage file="studio.html" />; }
