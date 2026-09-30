import { LegacyPage, getSnapshotMetadata } from "@/lib/legacy-page";
export const metadata = getSnapshotMetadata("thank-you.html");
export default function Page() { return <LegacyPage file="thank-you.html" />; }
