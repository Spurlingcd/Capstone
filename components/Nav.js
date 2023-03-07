import html from "html-literal";

export default links => html`
  <nav role="navigation">
    <div class="main-nav">
      <i class="fas fa-bars"></i>
      <ul class="hidden-mobile">
        <!-- <li class="dropdown-content"><a href="/Home" title="Home" data-navigo>Home</a>
      </li>
      <li class="dropdown-content"><a href="/About" title="About" data-navigo>About</a>
      </li>
      <li class="dropdown-content"><a href="/FUDs" title="FUDs" data-navigo>FUDs</a>
      <li class="dropdown-content"><a href= "/ContactUs" title="Contact Us" data-navigo>Contact Us</a>
      </li> -->
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
