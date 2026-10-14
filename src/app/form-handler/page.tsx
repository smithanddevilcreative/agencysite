export default function FormHandlerPage() {
  return (
    <main hidden>
      <form
        name="project-enquiry"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/thank-you/"
      >
        <input type="hidden" name="form-name" value="project-enquiry" />
        <input type="hidden" name="service" />
        <input name="bot-field" />
        <input name="name" />
        <input name="email" type="email" />
        <input name="organisation" />
        <textarea name="message" />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
