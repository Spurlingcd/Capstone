import html from "html-literal";

export default state => {
  console.log(state);
  return html`
    //
    <section id="fuds" class="page-content">
      <table id="affirmations" class="content">
        <thead>
          <tr>
            <th>Affirmations:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"${state.affirmation.quote}"</td>
            <td>
              <button id="affirmation-button" onclick="window.location.reload">
                Next
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <table id="funnies" class="content">
        <thead>
          <tr>
            <th>Funnies:</th>
          </tr>
        </thead>
        <tr>
          <th>Setup</th>
          <td>${state.funnie.setup}</td>
        </tr>
        <tr>
          <th>Punchline</th>
          <td>${state.funnie.punchline}</td>
          <td>
            <button id="funnies-button" onclick="window.location.reload">
              Next
            </button>
          </td>
        </tr>
      </table>

      <table id="scriptures" class="content">
        <tr>
          <th>Scriptures:</th>
          <td>${state.scripture.reference}</td>
          <td>"${state.scripture.verse}"</td>
          <td>
            <button id="scripture-button" onclick="window.location.reload" ;>
              Next
            </button>
          </td>
        </tr>
      </table>
    </section>
  `;
};
