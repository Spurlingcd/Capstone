import html from "html-literal";

export default state => html`
  <section id="fuds" class="page-content">
    <h2 class="content">
      Affirmations
      <p>${state.affirmation}</p>
    </h2>
    <h2 class="content">
      Funnies
      <p>${state.funnie}</p>
    </h2>
    <h2 class="content">
      Scriptures
      <p>${state.scripture}</p>
    </h2>
  </section>
`;
