const Contact = () => {
  return (
    <section className="px-4 mx-auto max-w-screen-md">
      {/* Contact Heading */}
      <h2 className="heading text-center">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text__para">
        Got a technical issue? Want to send feedback about a beta feature? Let us know.
      </p>

      {/* Contact Form */}
      <form action="#" className="space-y-8">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="form__label">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className="form__input mt-1"
            required
          />
        </div>

        {/* Subject Input */}
        <div>
          <label htmlFor="subject" className="form__label">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Let us know how we can help you"
            className="form__input mt-1"
            required
          />
        </div>

        {/* Message Input */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="form__label">
            Your Message
          </label>
          <textarea
            rows="6"
            id="message"
            placeholder="Leave a comment..."
            className="form__input mt-1"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn rounded sm:w-fit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
