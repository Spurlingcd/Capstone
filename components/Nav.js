import html from "html-literal";

export default links => html`
<nav role="navigation">
  <div id="menuToggle" class="dropdown">
    <li class="dropdown"><a href="#">Menu</a></li>
  <div class="dropdown-menu">
    <ul class="submenu">
      <li class="dropdown-content"><a href="#">Affirmations</a></li>
      <li class="dropdown-content"><a href="#">Funnies</a></li>
      <li class="dropdown-content"><a href="#">Scripture Verses</a></li>
    </ul>
  </div>
    </li>
  </div>
  <div class="main-nav">
    <ul class="hidden--mobile nav-links" >
    <i class="fas fa-bars"></i>
    <li><a  href="./home.html">Home</a></li>
    <li><a  href="./about.html"><u>About</u></a></li>
    <li><a  href="./contactus.html"><u>Contact Us</u></a></li>
    </ul>

   ${links
     .map(
       link =>
         `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
     )
     .join("")}
  </div>

</nav>
`;
