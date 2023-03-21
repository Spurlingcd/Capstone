import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
      ${Header(state)}
      ${Nav(store.Links)}
      ${Main(state)}
      ${Footer()}
    `;
  afterRender(state);
  router.updatePageLinks();
}

function afterRender() {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
  const handleClick = () => {
    location.reload();
  };

  const button = document.getElementById("fuds");
  button.addEventListener("click", handleClick);

  const targetElement = document.getElementById("fuds");
  targetElement.scrollIntoView({ behavior: "smooth" });

  const form = document.querySelector("form");

  form.addEventListener("submit", event => {
    event.preventDefault();
    alert("The form was submitted!");

    const inputs = event.target.elements;
    console.log("form's input elements: ", inputs);

    Array.from(inputs).forEach(input => {
      console.log(
        `This input is named ${input.name} and has a value of ${input.value}`
      );
    });
  });
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            // Replace the key provided here with your own key from openweathermap
            `https://api.openweathermap.org/data/2.5/weather?q=st%20louis&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
          )
          .then(response => {
            console.log(response.data);
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            // Save Data into state
            // name is the name of the location from the weather, created a property and a key inside that property (city). We can create properties after object creation.

            store.Home.weather = {};
            store.Home.weather.city = response.data.name;
            store.Home.weather.temp = kelvinToFahrenheit(
              response.data.main.temp
            );
            store.Home.weather.feelsLike = kelvinToFahrenheit(
              response.data.main.feels_like
            );
            store.Home.weather.description =
              response.data.weather[0].description;
            console.log(store.Home.weather);

            done();
          })
          .catch(err => {
            console.log("why you no work", err);
            done();
          });
        break;

      case "Fuds":
        Promise.allSettled([
          axios.get("https://fuds-api.onrender.com/affirmations?random=1"),
          axios.get("https://fuds-api.onrender.com/funnies?random=1"),
          axios.get("https://fuds-api.onrender.com/scriptures?random=1")
        ]).then(responses => {
          console.log(responses);
          const [
            affirmationsResponse,
            funniesResponse,
            scripturesResponse
          ] = responses;
          store.Fuds.affirmation = affirmationsResponse.value.data;
          store.Fuds.funnie = funniesResponse.value.data;
          store.Fuds.scripture = scripturesResponse.value.data;
          done();
        });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

// needs to be last thing in index.js
router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
