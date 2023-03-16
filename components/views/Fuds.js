import html from "html-literal";

export default state => html`
  <section id="fuds" class="page-content">
    <table class="content" span="2">
      <thead>
        <tr>
          <th>Affirmations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${state.affirmation}</td>
        </tr>
      </tbody>
    </table>

    <table class="content">
      <tr>
        <th>Funnies</th>
        <td>${state.funnie}</td>
      </tr>
    </table>

    <table class="content">
      <tr>
        <th>Scriptures</th>
        <td>${state.scripture}</td>
      </tr>
    </table>
  </section>
`;
