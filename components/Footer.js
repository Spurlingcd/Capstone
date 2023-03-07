import html from "html-literal";

export default () => html`
  <footer>
    <div id="moodTracker">
      <fieldset class="mood">
        <legend>How is your mood today?</legend>
        <label
          ><input type="radio" value="frown" name="tracker" /> Not So Good
        </label>
        <label
          ><input type="radio" value="meh" name="tracker" /> Just... Meh
        </label>
        <label
          ><input type="radio" value="fud" name="tracker" /> Frown Upside Down
        </label>
      </fieldset>
    </div>
  </footer>
`;
