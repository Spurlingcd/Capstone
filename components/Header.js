import html from "html-literal";
import myLogo from "/assets/images/FUDslogo.jpg";

export default state => html`
  <header>
    <div id="brandAttributes">
      <h1 id="businessName">
        <b><u>Frown Upside Down</u></b>
        <img src="${myLogo}" height="90" width="90" />
      </h1>
    </div>
    <div id="pageName">
      <h3>${state.header}</h3>
    </div>
  </header>
`;
