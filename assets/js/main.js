(function () {
  "use strict";

  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Email addresses are stored reversed in data attributes (not as plain
  // text) so simple scrapers that regex raw HTML for "user@domain" never
  // see a live address; this reassembles real mailto links for visitors.
  function reverse(str) {
    return str.split("").reverse().join("");
  }

  document.querySelectorAll(".email-link").forEach(function (link) {
    var user = reverse(link.getAttribute("data-u") || "");
    var domain = reverse(link.getAttribute("data-d") || "");
    if (!user || !domain) return;
    var email = user + "@" + domain;
    link.href = "mailto:" + email;
    if (link.classList.contains("email-link--show")) {
      link.textContent = email;
    }
  });
})();
