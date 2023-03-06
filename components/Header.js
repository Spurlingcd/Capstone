import html from "html-literal";
import myLogo from "/assets/images/FUDlogo.jpg";

export default state => html`
  <header>
    <div id="brandAttributes">
      <h1 id="businessName">
        <b><u>Frown Upside Down</u></b>
        <img src="${myLogo}" height="90" width="90" />
      </h1>
    </div>
    <div id="pageName">
      <h1>${state.header}</h1>
    </div>
  </header>
`;
