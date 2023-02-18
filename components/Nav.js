import html from "html-literal";

export default links => html`
<nav role="navigation">
  <div id="menuToggle" class="dropdown">
    <li class="dropdown"><a href="#">Menu</a></li>
  <div class="dropdown-menu">
    <ul aria-label="submenu">
      <li class="dropdown-content"><a href="#">Affirmations</a></li>
      <li class="dropdown-content"><a href="#">Funnies</a></li>
      <li class="dropdown-content"><a href="#">Scripture Verses</a></li>
    </ul>
  </div>
    </li>
  </div>
  <div class="main-nav">
    <a class="push" href="./home.html">Home</a>
    <a class="push" href="./about.html"><u>About</u></a>
    <a class="push" href="./contactus.html"><u>Contact Us</u></a>
    ${links
      .map(
        link =>
          `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
      )
      .join("")}
  </div>

</nav>
`;
