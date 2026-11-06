export default function ContactOffcanvas() {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="contactOffcanvas"
      aria-labelledby="contactOffcanvasLabel"
    >
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id="contactOffcanvasLabel">
          Get in Touch
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <p className="text-muted">
          Interested in working together? Fill out the form below and I will get
          back to you shortly.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!");
          }}
        >
          <div className="mb-3">
            <label htmlFor="contact-name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              aria-label="Your Name"
              autoComplete="name"
              className="form-control"
              placeholder="Your name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact-email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              aria-label="Your Email"
              autoComplete="email"
              className="form-control"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact-message" className="form-label">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              aria-label="Your Message"
              className="form-control"
              rows="4"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
