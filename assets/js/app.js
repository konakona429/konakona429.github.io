(function () {
  const data = window.PORTFOLIO_DATA;

  if (!data) {
    console.error("PORTFOLIO_DATA not found. Check assets/js/data.js");
    return;
  }

  const $ = (sel) => document.querySelector(sel);

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function renderChips(container, items) {
    container.innerHTML = "";
    items.forEach((t) => {
      const span = document.createElement("span");
      span.className = "chip";
      span.textContent = t;
      container.appendChild(span);
    });
  }

  function renderHeroLinks(container, links) {
    container.innerHTML = "";
    links.forEach((l, idx) => {
      const a = document.createElement("a");
      a.className = "btn " + (idx === 0 ? "btn-primary" : "");
      a.href = l.url;
      a.target = l.url.startsWith("mailto:") ? "_self" : "_blank";
      a.rel = l.url.startsWith("mailto:") ? "" : "noreferrer";
      a.textContent = l.label;
      container.appendChild(a);
    });
  }

  function renderCards(container, items) {
    container.innerHTML = "";
    items.forEach((item) => {
      const title = escapeHtml(item.title ?? "");
      const when = escapeHtml(item.when ?? "");
      const desc = escapeHtml(item.description ?? "");
      const tags = Array.isArray(item.tags) ? item.tags : [];
      const links = Array.isArray(item.links) ? item.links : [];

      const card = document.createElement("article");
      card.className = "card";

      const top = document.createElement("div");
      top.className = "card-top";

      const h3 = document.createElement("h3");
      h3.innerHTML = title;

      const badge = document.createElement("div");
      badge.className = "badge";
      badge.textContent = when;

      top.appendChild(h3);
      top.appendChild(badge);

      const p = document.createElement("p");
      p.textContent = desc;

      const tagWrap = document.createElement("div");
      tagWrap.className = "tags";
      tags.forEach((t) => {
        const s = document.createElement("span");
        s.className = "tag";
        s.textContent = t;
        tagWrap.appendChild(s);
      });

      const linkRow = document.createElement("div");
      linkRow.className = "linkrow";
      links.forEach((l) => {
        const a = document.createElement("a");
        a.className = "link";
        a.href = l.url;
        a.target = l.url.startsWith("mailto:") || l.url === "#" ? "_self" : "_blank";
        a.rel = l.url.startsWith("mailto:") || l.url === "#" ? "" : "noreferrer";
        a.textContent = l.label;
        linkRow.appendChild(a);
      });

      card.appendChild(top);
      card.appendChild(p);
      if (tags.length) card.appendChild(tagWrap);
      if (links.length) card.appendChild(linkRow);

      container.appendChild(card);
    });
  }

  function renderSimpleLinks(container, items) {
    container.innerHTML = "";
    items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "card";

      const top = document.createElement("div");
      top.className = "card-top";

      const h3 = document.createElement("h3");
      h3.textContent = item.title;

      const badge = document.createElement("div");
      badge.className = "badge";
      badge.textContent = "Link";

      top.appendChild(h3);
      top.appendChild(badge);

      const p = document.createElement("p");
      p.textContent = item.description ?? "";

      const linkRow = document.createElement("div");
      linkRow.className = "linkrow";

      const a = document.createElement("a");
      a.className = "link";
      a.href = item.url;
      a.target = item.url.startsWith("mailto:") ? "_self" : "_blank";
      a.rel = item.url.startsWith("mailto:") ? "" : "noreferrer";
      a.textContent = item.url.startsWith("mailto:") ? "メールする" : "開く";

      linkRow.appendChild(a);

      card.appendChild(top);
      card.appendChild(p);
      card.appendChild(linkRow);

      container.appendChild(card);
    });
  }

  function setupActiveNav() {
    const links = Array.from(document.querySelectorAll(".nav-link"));
    const targets = links
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        links.forEach((a) => a.classList.remove("is-active"));
        const active = links.find((a) => a.getAttribute("href") === "#" + visible.target.id);
        if (active) active.classList.add("is-active");
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.1, 0.2, 0.35] }
    );

    targets.forEach((t) => io.observe(t));
  }

  function boot() {
    // Profile
    $("#name").textContent = data.profile.name;
    $("#footerName").textContent = data.profile.name;
    $("#kicker").textContent = data.profile.kicker;
    $("#headline").textContent = data.profile.headline;
    $("#about").textContent = data.profile.about;
    $("#metaLine").textContent = data.profile.metaLine;

    // Hero links & skills
    renderHeroLinks($("#heroLinks"), data.heroLinks ?? []);
    renderChips($("#skills"), data.profile.skills ?? []);

    // Sections
    renderCards($("#experienceList"), data.experience ?? []);
    renderCards($("#talksList"), data.talks ?? []);
    renderCards($("#certsList"), data.certifications ?? []);
    renderCards($("#activitiesList"), data.activities ?? []);
    renderSimpleLinks($("#linksList"), data.links ?? []);

    // Footer
    $("#year").textContent = String(new Date().getFullYear());
    $("#lastUpdated").textContent = data.lastUpdated ?? "";

    setupActiveNav();
  }

  document.addEventListener("DOMContentLoaded", boot);
})();
