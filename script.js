const data = window.siteData;

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
};

const setHTML = (id, value) => {
  const element = document.getElementById(id);
  if (element) element.innerHTML = value;
};

const setLink = (id, link) => {
  const element = document.getElementById(id);
  if (!element || !link) return;

  element.textContent = link.label;
  element.href = link.href;
};

const renderList = (id, items, template) => {
  const target = document.getElementById(id);
  if (!target || !items) return;
  target.innerHTML = items.map(template).join("");
};

const renderNavigation = () => {
  setText("brand-title", data.brand.title);
  setText("brand-kicker", data.brand.kicker);
  setText("footer-text", data.footer);

  renderList(
    "site-nav",
    data.navigation,
    (item) =>
      `<a href="${item.href}"${item.highlight ? ' class="nav-highlight"' : ""}>${item.label}</a>`
  );
};

const renderHomePage = () => {
  if (!document.getElementById("hero-title")) return;

  document.title = data.brand.title;
  setText("hero-eyebrow", data.hero.eyebrow);
  setText("hero-title", data.hero.title);
  setText("hero-summary", data.hero.summary);
  setLink("hero-primary-link", data.hero.primaryAction);
  setLink("hero-secondary-link", data.hero.secondaryAction);

  renderList(
    "hero-metrics",
    data.hero.metrics,
    (item) => `
      <article class="metric-card">
        <span class="metric-value">${item.value}</span>
        <span class="metric-label">${item.label}</span>
      </article>
    `
  );

  setText("highlight-title", data.hero.highlight.title);
  setText("highlight-summary", data.hero.highlight.summary);
  document.getElementById("highlight-link").href = data.hero.highlight.href;

  renderList("hero-tags", data.hero.tags, (item) => `<span class="tag">${item}</span>`);

  setText("about-title", data.about.title);
  setHTML(
    "about-copy",
    data.about.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")
  );

  renderList(
    "research-grid",
    data.researchThemes,
    (item) => `
      <article class="research-card">
        <span class="tag">${item.tag}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `
  );

  document.getElementById("all-publications-link").href = data.publications.fullListHref;

  renderList(
    "publication-list",
    data.publications.selected,
    (item) => publicationTemplate(item)
  );

  renderList(
    "news-grid",
    data.news,
    (item) => `
      <article class="news-card">
        <span class="news-date">${item.date}</span>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
      </article>
    `
  );

  renderList("people-grid", data.people, (item) => personTemplate(item));
  renderList(
    "resource-grid",
    data.resources,
    (item) => `
      <article class="resource-card">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `
  );

  renderContact();
};

const publicationTemplate = (item) => `
  <article class="publication-item">
    <div class="publication-year">${item.year}</div>
    <h3>${item.title}</h3>
    <div class="publication-meta">${item.authors} &middot; <em>${item.venue}</em></div>
    <p class="publication-abstract">${item.abstract}</p>
    <div class="publication-links">
      ${item.links
        .map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`)
        .join("")}
    </div>
  </article>
`;

const personTemplate = (item) => `
  <article class="person-card">
    <h3>${item.name}</h3>
    <div class="person-role">${item.role}</div>
    <p>${item.bio}</p>
    <div class="person-links">
      ${item.links
        .map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`)
        .join("")}
    </div>
  </article>
`;

const renderContact = () => {
  setText("contact-title", data.contact.title);
  setText("contact-summary", data.contact.summary);

  renderList(
    "contact-details",
    data.contact.details,
    (item) => `
      <div class="contact-item">
        <span class="contact-label">${item.label}</span>
        ${
          item.href
            ? `<a href="${item.href}">${item.value}</a>`
            : `<span>${item.value}</span>`
        }
      </div>
    `
  );
};

const renderResearchPage = () => {
  if (!document.getElementById("research-page-grid")) return;

  document.title = `${data.brand.title} | Research`;
  setText("page-eyebrow", data.researchPage.eyebrow);
  setText("page-title", data.researchPage.title);
  setText("page-summary", data.researchPage.summary);

  renderList(
    "research-page-grid",
    data.researchPage.sections,
    (item) => `
      <article class="feature-card">
        <p class="section-kicker">${item.kicker}</p>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `
  );

  renderList(
    "timeline-list",
    data.researchPage.timeline,
    (item) => `
      <article class="timeline-item">
        <div class="timeline-year">${item.period}</div>
        <div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
        </div>
      </article>
    `
  );
};

const renderPublicationsPage = () => {
  if (!document.getElementById("publication-archive")) return;

  document.title = `${data.brand.title} | Publications`;
  setText("page-eyebrow", data.publicationPage.eyebrow);
  setText("page-title", data.publicationPage.title);
  setText("page-summary", data.publicationPage.summary);

  renderList(
    "publication-categories",
    data.publicationPage.categories,
    (item) => `<span class="tag">${item}</span>`
  );

  renderList("publication-archive", data.publications.all, (item) => publicationTemplate(item));
};

const renderPeoplePage = () => {
  if (!document.getElementById("people-page-grid")) return;

  document.title = `${data.brand.title} | People`;
  setText("page-eyebrow", data.peoplePage.eyebrow);
  setText("page-title", data.peoplePage.title);
  setText("page-summary", data.peoplePage.summary);

  renderList("people-page-grid", data.peoplePage.members, (item) => personTemplate(item));

  renderList(
    "mentorship-list",
    data.peoplePage.mentorship,
    (item) => `
      <article class="feature-card">
        <p class="section-kicker">${item.kicker}</p>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `
  );
};

renderNavigation();
renderHomePage();
renderResearchPage();
renderPublicationsPage();
renderPeoplePage();
