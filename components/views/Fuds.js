import html from "html-literal";

export default state => {
  console.log(state);
  return html`
  // <section id="fuds" class="page-content">
    <table id="affirmations" class="content">
        <tr>
          <th>Affirmations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${state.affirmation.quote}</td>
        </tr>
      </tbody>
    </table>

    <table id= "funnies" class="content">
      <tr>
        <th>Funnies</th>
        <td>${state.funnie.setup}</td>
        <td>${state.funnie.punchline}</td>
      </tr>
    </table>

    <table id="scriptures" class="content">
      <tr>
        <th>Scriptures</th>
        <td>${state.scripture.reference}</td>
        <td>${state.scripture.verse}</td>

      </tr>
    </table>
  // </section>
  <button onclick="window.location.reload()" >Next</button>
`;
};
