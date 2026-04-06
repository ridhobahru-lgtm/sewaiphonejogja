function formatDate(dateString) {
  const formatter = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return formatter.format(new Date(dateString));
}

function createParagraphs(paragraphs) {
  return paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function renderFeaturedArticle(article) {
  const featured = document.getElementById("featuredArticle");

  featured.innerHTML = `
    <div class="featured-article-media">
      <img src="${article.image}" alt="${article.imageAlt}">
    </div>
    <div class="featured-article-copy">
      <div class="article-meta">
        <span>${article.category}</span>
        <span>${formatDate(article.date)}</span>
      </div>
      <h3>${article.title}</h3>
      <p class="featured-excerpt">${article.excerpt}</p>
      <div class="article-body">
        ${createParagraphs(article.paragraphs)}
      </div>
    </div>
  `;
}

function renderArticleCards(articles) {
  const articleGrid = document.getElementById("articleGrid");

  articleGrid.innerHTML = articles
    .map(
      (article) => `
        <article class="article-card" id="${article.slug}">
          <img src="${article.image}" alt="${article.imageAlt}">
          <div class="article-card-content">
            <div class="article-meta">
              <span>${article.category}</span>
              <span>${formatDate(article.date)}</span>
            </div>
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <div class="article-body">
              ${createParagraphs(article.paragraphs)}
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function initArticlePage() {
  if (!Array.isArray(ARTICLE_DATA) || ARTICLE_DATA.length === 0) {
    return;
  }

  document.getElementById("articleCount").textContent = ARTICLE_DATA.length;
  renderFeaturedArticle(ARTICLE_DATA[0]);
  renderArticleCards(ARTICLE_DATA);
}

initArticlePage();
