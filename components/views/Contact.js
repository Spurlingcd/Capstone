import html from "html-literal";

export default () => html`
  <section id="contact" class="page-content">
    <form
      cols="70"
      id="contact-form"
      action="https://formspree.io/f/xwkjlowe"
      method="POST"
      window.location.href="http://localhost:1234"
    >
      <div class="contact">
        <label for="name" required>Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="First Last"
          required
        />
      </div>
      <div class="contact">
        <label for="email" required>Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="me@example.com"
          required
        />
      </div>
      <div class="contact">
        <label for="phone">Phone:</label>
        <input type="tel" name="phone" id="phone" placeholder="555-555-5555" />
      </div>

      <div class="contact">
        <label for="msg" required>Enter your message:</label>
        <div>
          <textarea
            name="msg"
            id="msg"
            cols="40"
            rows="3"
            placeholder=" What's this message about?"
          ></textarea>
        </div>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </section>
`;
