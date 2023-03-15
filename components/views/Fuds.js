import html from "html-literal";

export default state => html`
  <section id="fuds" class="page-content">
    <h2 class="content">
      Affirmations
      <p>${state.affirmation}</p>
      <button class="affirmation" type="button">Next</button>
    </h2>
    <h2 class="content">
      Funnies
      <p>${state.funnie}</p>
      <button class="funnie" type="button">Next</button>
    </h2>
    <h2 class="content">
      Scriptures
      <p>${state.scripture}</p>
      <button class="scripture" type="button">Next</button>
    </h2>
  </section>
`;
