import html from "html-literal";

export default links => html`
  <nav role="navigation">
    <div class="main-nav">
      <i class="fas fa-bars"></i>
      <ul class="hidden-mobile"></ul>

      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </div>
  </nav>
`;
