"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { trackGA4Event } from "@/lib/analytics";

export function EnquiryForm({ service = "General" }: { service?: string }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const isMiniGolf = /mini golf/i.test(service);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/form-handler/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) throw new Error("Submission failed");
      trackGA4Event("generate_lead", { enquiry_service: service, form_location: window.location.pathname });
      router.push("/thank-you/");
    } catch {
      setError("Something went wrong. Please try again or email hello@smithanddevil.com.");
      setSubmitting(false);
    }
  }

  return (
    <form
      className="EnquiryForm-module__ZxCRSG__form"
      name="project-enquiry"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="project-enquiry" />
      <input type="hidden" name="service" value={service} />
      <p className="EnquiryForm-module__ZxCRSG__honeypot">
        <label>
          Do not fill this in: <input tabIndex={-1} autoComplete="off" name="bot-field" />
        </label>
      </p>
      <div className="EnquiryForm-module__ZxCRSG__formGrid">
        <label className="EnquiryForm-module__ZxCRSG__field">
          <span>Name</span>
          <input type="text" required autoComplete="name" name="name" />
        </label>
        <label className="EnquiryForm-module__ZxCRSG__field">
          <span>Email</span>
          <input type="email" required autoComplete="email" name="email" />
        </label>
        <label className="EnquiryForm-module__ZxCRSG__field">
          <span>Organisation</span>
          <input type="text" autoComplete="organization" name="organisation" />
        </label>
        <label className="EnquiryForm-module__ZxCRSG__field">
          <span>What stage is your project at?</span>
          <select name="project_stage" defaultValue="">
            <option value="" disabled>Choose a stage</option>
            <option>Exploring an idea</option>
            <option>Concept and business planning</option>
            <option>Site identified or secured</option>
            <option>Design or refurbishment underway</option>
            <option>Preparing to launch</option>
            <option>Existing venue looking to grow</option>
          </select>
        </label>
        <label className="EnquiryForm-module__ZxCRSG__field">
          <span>Anticipated total project investment</span>
          <select name="project_investment" defaultValue="">
            <option value="">Still working this out</option>
            <option>Under £100,000</option>
            <option>£100,000–£250,000</option>
            <option>£250,000–£500,000</option>
            <option>£500,000–£1 million</option>
            <option>Over £1 million</option>
          </select>
        </label>
        {isMiniGolf ? (
          <>
            <label className="EnquiryForm-module__ZxCRSG__field">
              <span>How many holes are you considering?</span>
              <select name="course_holes" defaultValue="">
                <option value="">Not decided yet</option>
                <option>9 holes</option>
                <option>18 holes</option>
                <option>Other / multiple courses</option>
              </select>
            </label>
            <label className="EnquiryForm-module__ZxCRSG__field">
              <span>Where is the proposed course?</span>
              <input type="text" name="project_location" placeholder="Town, region or country" />
            </label>
          </>
        ) : (
          <label className="EnquiryForm-module__ZxCRSG__field EnquiryForm-module__ZxCRSG__fieldWide">
            <span>What would you like our help with?</span>
            <select name="project_interest" defaultValue="">
              <option value="">Not decided yet</option>
              <option>Creating and launching a new concept</option>
              <option>Improving an existing customer experience</option>
              <option>Brand strategy and identity</option>
              <option>Venue and interior design</option>
              <option>Marketing and customer acquisition</option>
              <option>Something else</option>
            </select>
          </label>
        )}
        <label className="EnquiryForm-module__ZxCRSG__field EnquiryForm-module__ZxCRSG__fieldWide">
          <span>What are you building, changing or trying to solve?</span>
          <textarea name="message" rows={5} required />
        </label>
      </div>
      <button type="submit" className="EnquiryForm-module__ZxCRSG__submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send project enquiry"}<span aria-hidden="true">→</span>
      </button>
      {error ? <p role="alert" className="EnquiryForm-module__ZxCRSG__formNote">{error}</p> : null}
      <p className="EnquiryForm-module__ZxCRSG__formNote">
        Or email <a href="mailto:hello@smithanddevil.com">hello@smithanddevil.com</a>
      </p>
    </form>
  );
}
