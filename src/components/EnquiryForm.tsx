export function EnquiryForm({ service = "General" }: { service?: string }) {
  return (
    <form
      className="EnquiryForm-module__ZxCRSG__form"
      name="project-enquiry"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thank-you"
      method="POST"
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
      <button type="submit" className="EnquiryForm-module__ZxCRSG__submit">
        Send project enquiry<span aria-hidden="true">→</span>
      </button>
      <p className="EnquiryForm-module__ZxCRSG__formNote">
        Or email <a href="mailto:hello@smithanddevil.com">hello@smithanddevil.com</a>
      </p>
    </form>
  );
}
