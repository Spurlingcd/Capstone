import html from "html-literal";

export default state => html`
  <header>
    <div id="brandAttributes">
      <h1 id="businessName">
        <b><u>Frown Upside Down</u></b>
        <img src="/FUDlogo.jpg" height="90" width="90" />
      </h1>
    </div>
    <h1>${state.header}</h1>
  </header>
`;
