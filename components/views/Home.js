import html from "html-literal";

export default state => html`
  <section id="home" class="page-content">
    <p class="content">
      In a funk? Have a smile that you can't seem to turn right side up? Welcome
      to Frown Upside Down!! We've all had bad days...weeks...months...but here
      at Frown Upside Down, we'll try and give you a hand, as best we can...for
      our fellow man. Or woman, we don't discriminate. First, rate your mood
      using the daily mood tracker at the bottom of the home page. Then, check
      out our daily affirmations to get you going. Or maybe our funnies can give
      you a genuine giggle--we hope. And if all is lost--only God can help you
      now. But you're in luck! We've got something for that too. Scripture
      Verses!! If you can successfully turn your frown upside down (with our
      help of course), let us know what worked by rating the content that worked
      for you using our mood tracker.
      <b>HAPPY TRAVELS!!</b>
    </p>

    <div>
      <p class="content">
        The current weather in ${state.weather.city} is
        ${state.weather.description}. The temp is ${state.weather.temp} degrees
        and feels like ${state.weather.feelsLike}.
      </p>
    </div>
  </section>
`;
