import html from "html-literal";

export default state => html`
  <section id="fuds" class="page-content">
    <h2 class="content">
      Affirmations
      <p>${state.affirmationsResponse}</p>
      <button class="affirmations" type="button">Next</button>
    </h2>
    <h2 class="content">
      Funnies
      <p>${state.funniesResponse}</p>
      <button class="funnies" type="button">Next</button>
    </h2>
    <h2 class="content">
      Scriptures
      <p>${state.scripturesResponse}</p>
      <button class="scripture" type="button">Next</button>
    </h2>
  </section>
`;
