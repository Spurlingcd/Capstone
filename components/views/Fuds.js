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
            <td>
              <button
                id="affirmations-button"
                class="next-button"
                onclick="location.href='#affirmations'"
              >
                Next
              </button>
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
          <th>Setup:</th>
          <td>${state.funnie.setup}</td>
        </tr>
        <tr>
          <th>Punchline:</th>
          <td>${state.funnie.punchline}</td>
          <td>
            <button
              id="funnies-button"
              class="next-button"
              onclick="location.href='#funnies'"
            >
              Next
            </button>
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
            <button
              id="scriptures-button"
              class="next-button"
              onclick="location.href='#scriptures'"
            >
              Next
            </button>
          </td>
        </tr>
      </table>
    </section>
  `;
};
