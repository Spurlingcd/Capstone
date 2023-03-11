import html from "html-literal";
<<<<<<< HEAD
import myLogo from "/assets/images/Fudslogo.jpg";
=======
import myLogo from "/assets/images/FUDlogo.jpg";

>>>>>>> 26beed3fbf635a2b83fa9fd6499bd7e722a2d7f4
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
