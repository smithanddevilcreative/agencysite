"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function EnquiryForm({ service = "General" }: { service?: string }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) throw new Error("Submission failed");
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
