import html from "html-literal";

export default () => html`
  <footer>
    <div id="moodTracker">
      <fieldset class="mood">
        <legend>How is your mood today?</legend>
        <label
          ><input
            type="radio"
            value="frown"
            name="tracker"
            onclick="window.location='/fuds'"
          />
          Not So Good
        </label>
        <label
          ><input
            type="radio"
            onclick="window.location='/fuds'"
            value="meh"
            name="tracker"
          />
          Just... Meh
        </label>
        <label
          ><input
            type="radio"
            onclick="window.location='/fuds'"
            value="fud"
            name="tracker"
          />
          Need a Quick Pick Me Up
        </label>
      </fieldset>
    </div>
  </footer>
`;
