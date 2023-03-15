import html from "html-literal";

export default () => html`
  <section id="contact" class="page-content">
    <form action="https://formspree.io/f/xwkjlowe" method="POST">
      <div>
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="First Last"
          required
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="me@example.com"
          required
        />
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="tel" name="phone" id="phone" placeholder="555-555-5555" />
      </div>

      <div>
        <label for="msg">Enter your message:</label>
        <div>
          <textarea
            name="msg"
            id="msg"
            cols="50"
            rows="3"
            placeholder=" What's this message about?"
          ></textarea>
        </div>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </section>
`;
