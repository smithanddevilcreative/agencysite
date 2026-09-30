import { LegacyPage, getSnapshotMetadata } from "@/lib/legacy-page";
export const metadata = getSnapshotMetadata("services.html");
export default function Page() { return <LegacyPage file="services.html" />; }
