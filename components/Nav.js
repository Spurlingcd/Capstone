import html from "html-literal";

export default links => html`
<nav id="navigation">
  <div class="dropdown-menu">
    <li class="dropdown"><a href="#">Menu</a></li>
    <ul class="submenu">
      <li class="dropdown-content"><a href="/FUDs">Affirmations</a>
      </li>
      <li class="dropdown-content"><a href="/FUDs">Funnies</a>
      </li>
      <li class="dropdown-content"><a href="FUDs">Scripture Verses</a>
      </li>
    </ul>
    </li>
   </div>
   <div class="main-nav">
    <i class="fas fa-bars"></i>
   <ul class="hidden--mobile nav-links" >
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
