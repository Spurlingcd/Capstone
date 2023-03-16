import html from "html-literal";

export default state => {
  console.log(state);
  return html`
  <section id="fuds" class="page-content">
    <table id="affirmations" class="content">
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

    <table id= "funnies" class="content">
      <tr>
        <th>Funnies</th>
        <td>${state.funnie}</td>
      </tr>
    </table>

    <table id="scriptures" class="content">
      <tr>
        <th>Scriptures</th>
        <td>${state.scripture}</td>
      </tr>
    </table>
  </section>
`;
};
