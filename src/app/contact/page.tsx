import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact — Smith & Devil",
  description: "Start a conversation with Smith & Devil about your next brand, venue, website, campaign or experience.",
};

export default function ContactPage() {
  return (
    <main className="contact-module__swMWYG__main">
      <div className="contact-module__swMWYG__inner">
        <div className="Reveal-module__U2Tp6W__base">
          <p className="contact-module__swMWYG__kicker">Start a conversation</p>
          <h1>Tell us what you are <em>building.</em></h1>
          <p className="contact-module__swMWYG__intro">
            Bring us a defined project, an early idea or a commercial challenge that needs sharper creative thinking.
          </p>
        </div>
        <div className="Reveal-module__U2Tp6W__base contact-module__swMWYG__formWrap">
          <EnquiryForm service="Contact page" />
        </div>
      </div>
    </main>
  );
}
