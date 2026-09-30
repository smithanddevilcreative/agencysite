import { LegacyPage, getSnapshotMetadata } from "@/lib/legacy-page";
export const metadata = getSnapshotMetadata("contact.html");
export default function Page() { return <LegacyPage file="contact.html" />; }
