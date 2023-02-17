import html from "html-literal";

export default () => html`

<section id="contact-us"class="page-content">
      <h2 class="title"><b><u>Contact Us</u></b></h2>
      <form action="https://formspree.io/f/xwkjlowe" method="POST">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" placeholder="First Last" required />

        <label for="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="me@example.com" required />

        <label for="phone">Phone:</label>
        <input type="tel" name="phone" id="phone" placeholder="555-555-5555" />

        <div>
          <label for="msg">Enter your message:</label>
          <textarea name="msg" id="msg" cols="150" rows="30" placeholder=" What's this message about?"></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </section>
