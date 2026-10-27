"use client";

import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { trackGA4Event } from "@/lib/analytics";
import styles from "./EnquiryContactActions.module.css";

export function BookCallLink({ service, placement = "form" }: { service: string; placement?: "hero" | "form" }) {
  return (
    <a
      className={placement === "hero" ? styles.heroCallLink : styles.callLink}
      href="https://calendly.com/hello-zkdj"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackGA4Event("book_call_click", {
        enquiry_service: service,
        form_location: window.location.pathname,
        cta_location: placement,
      })}
    >
      Book a call <span aria-hidden="true">→</span>
    </a>
  );
}

export function EnquiryForm({ service = "General" }: { service?: string }) {
  const router = useRouter();
  const started = useRef(false);
  const reportedErrors = useRef(new Set<string>());

  function trackStart() {
    if (started.current) return;
    started.current = true;
    trackGA4Event("enquiry_form_start", { enquiry_service: service, form_location: window.location.pathname });
  }

  function trackInvalid(event: FormEvent<HTMLFormElement>) {
    const field = event.target;
    if (!(field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement)) return;
    if (field.name === "bot-field") return;
    const reason = field.validity.valueMissing ? "required" : field.validity.typeMismatch ? "format" : "invalid";
    const key = field.name + ":" + reason;
    if (reportedErrors.current.has(key)) return;
    reportedErrors.current.add(key);
    trackGA4Event("enquiry_form_error", {
      enquiry_service: service, form_location: window.location.pathname,
      field_name: field.name, error_type: reason,
    });
  }
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const isMiniGolf = /mini golf/i.test(service);
  const isConceptToMarket = /concept to market/i.test(service);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    trackStart();
    reportedErrors.current.clear();
    trackGA4Event("enquiry_form_submit", { enquiry_service: service, form_location: window.location.pathname });
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
      trackGA4Event("enquiry_form_error", { enquiry_service: service, form_location: window.location.pathname, error_type: "submission_failed" });
      setError("Something went wrong. Please try again or email hello@smithanddevil.com.");
      setSubmitting(false);
    }
  }

  return (
    <form
      className={`EnquiryForm-module__ZxCRSG__form ${styles.form}`}
      name="project-enquiry"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="POST"
      onInputCapture={(event) => {
        const target = event.target;
        if (target instanceof HTMLElement && target.getAttribute("name") !== "bot-field") trackStart();
      }}
      onInvalidCapture={trackInvalid}
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
            <option>Developing the brief</option>
            {isConceptToMarket && <option>Seeking investment</option>}
            {isConceptToMarket && <option>Preparing to launch</option>}
            <option>Ready to appoint a creative partner</option>
            <option>Ready to get started</option>
            <option>Improving something that already exists</option>
          </select>
        </label>
        <label className="EnquiryForm-module__ZxCRSG__field">
          <span>What budget do you have in mind for our help?</span>
          <select name="project_investment" defaultValue="" aria-describedby="enquiry-budget-note">
            <option value="" disabled>Choose a budget</option>
            <option>Still working this out</option>
            <option>Under £10,000</option>
            <option>£10,000–£25,000</option>
            <option>£25,000–£50,000</option>
            <option>£50,000–£100,000</option>
            <option>£100,000+</option>
          </select>
          <small id="enquiry-budget-note">An estimate is fine. This helps us suggest the right approach.</small>
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
              <option value="" disabled>See options</option>
              <option>Not decided yet</option>
              <option>Concept development</option>
              <option>Concept to Market / proposition & launch</option>
              <option>Brand strategy and identity</option>
              <option>Website design and development</option>
              <option>Marketing and campaigns</option>
              <option>Venue and interior design</option>
              <option>Mini golf design and build</option>
              <option>Themed experiences</option>
              <option>Something else</option>
            </select>
          </label>
        )}
        <label className="EnquiryForm-module__ZxCRSG__field EnquiryForm-module__ZxCRSG__fieldWide">
          <span>Tell us a bit more.</span>
          <textarea name="message" rows={5} required placeholder="A little about the project, what you need and any timings you have in mind." />
        </label>
      </div>
      <button type="submit" className="EnquiryForm-module__ZxCRSG__submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send project enquiry"}<span aria-hidden="true">→</span>
      </button>
      {error ? <p role="alert" className="EnquiryForm-module__ZxCRSG__formNote">{error}</p> : null}
      <div className={styles.actions}>
        <BookCallLink service={service} />
        <a className={styles.emailLink} href="mailto:hello@smithanddevil.com">Send an email</a>
      </div>
    </form>
  );
}
