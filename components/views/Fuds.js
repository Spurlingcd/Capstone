import html from "html-literal";

export default state => {
  console.log(state);
  return html`
    <section id="fuds" class="page-content">
      <table id="affirmations" class="content">
        <thead>
          <tr>
            <th><u>Affirmations:</u></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"${state.affirmation.quote}"</td>
          </tr>

          <tr>
            <td>
              <input
                type="button"
                id="affirmations-button"
                class="next-button"
                onclick="window.location.reload()"
                value="Next"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <table id="funnies" class="content">
        <thead>
          <tr>
            <th><u>Funnies:</u></th>
          </tr>
        </thead>
        <tr>
          <td><b>Setup:</b> ${state.funnie.setup}</td>
        </tr>
        <tr>
          <td><b>Punchline:</b> ${state.funnie.punchline}</td>
        </tr>
        <tr>
          <td>
            <input
              type="button"
              id="affirmations-button"
              class="next-button"
              onclick="window.location.reload()"
              value="Next"
            />
          </td>
        </tr>
      </table>

      <table id="scriptures" class="content">
        <tr>
          <th><u>Scriptures:</u></th>
        </tr>
        <tr>
          <td>
            <b>${state.scripture.reference}</b> "${state.scripture.verse}"
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="button"
              id="affirmations-button"
              class="next-button"
              onclick="window.location.reload()"
              value="Next"
            />
          </td>
        </tr>
      </table>
    </section>
  `;
};
