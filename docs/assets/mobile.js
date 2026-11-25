/* Small-screen helpers: card-style tables, readable flowcharts, PDF link behavior. */
(function () {
  var coarse = window.matchMedia("(pointer: coarse)");
  var phone = window.matchMedia("(max-width: 600px)");

  function labelTables(root) {
    root.querySelectorAll(".md-typeset table").forEach(function (table) {
      if (table.hasAttribute("data-cards")) return;
      var heads = Array.prototype.map.call(table.querySelectorAll("thead th"), function (th) {
        return th.textContent.trim();
      });
      if (!heads.length) return;
      table.setAttribute("data-cards", "");
      var longest = 0;
      table.querySelectorAll("tbody tr").forEach(function (tr) {
        Array.prototype.forEach.call(tr.children, function (td, i) {
          if (i === 0 && td.textContent.trim().length <= 14) td.setAttribute("data-short", "");
          if (i > 0) longest = Math.max(longest, td.textContent.trim().length);
          td.setAttribute("data-label", heads[i] || "");
          var t = td.textContent.trim();
          if (t === "" || t === "—") td.setAttribute("data-empty", "");
        });
      });
      // Short values (such as paragraph numbers) sit beside their label instead of below it
      if (longest <= 24) table.setAttribute("data-compact", "");
    });
  }

  function externalPdfLinks(root) {
    root.querySelectorAll('.md-typeset a[href^="http"]').forEach(function (a) {
      if (/\.pdf(#|$)|archive\.org\/details|law\.resource\.org/.test(a.href)) {
        a.target = "_blank";
        a.rel = "noopener";
      }
    });
  }

  function pdfTip(root) {
    if (!coarse.matches || root.querySelector(".b31-pdf-tip")) return;
    var first = root.querySelector(".md-typeset a.pdfpage");
    if (!first) return;
    var table = first.closest(".md-typeset__scrollwrap") || first.closest("table");
    if (!table) return;
    var tip = document.createElement("div");
    tip.className = "admonition tip b31-pdf-tip";
    tip.innerHTML = '<p class="admonition-title">Reading on a phone or tablet</p>' +
      "<p>PDFs open in a new tab. Some mobile PDF viewers start at page 1 instead of the linked page: " +
      "use the viewer's page box to jump to the <strong>PDF p.</strong> number shown. " +
      "The files are 4 to 26 MB, so you may want Wi-Fi.</p>";
    table.parentNode.insertBefore(tip, table);
  }

  function readableMermaid(root) {
    // Material renders Mermaid inside a closed shadow root, so size the host element
    // and let a wrapper scroll sideways on narrow screens.
    if (!phone.matches) return;
    root.querySelectorAll(".mermaid").forEach(function (host) {
      if (host.parentNode.classList.contains("b31-mermaid-scroll")) return;
      var wrap = document.createElement("div");
      wrap.className = "b31-mermaid-scroll";
      host.parentNode.insertBefore(wrap, host);
      wrap.appendChild(host);
      var hint = document.createElement("p");
      hint.className = "b31-swipe";
      hint.textContent = "Swipe sideways to follow the chart, or open the list version below it.";
      wrap.parentNode.insertBefore(hint, wrap);
    });
  }

  function run() {
    var root = document.querySelector(".md-content") || document;
    labelTables(root);
    externalPdfLinks(root);
    pdfTip(root);
    readableMermaid(root);
    // Material may swap the diagram element after rendering; check again shortly.
    [400, 1500, 4000].forEach(function (ms) { setTimeout(function () { readableMermaid(root); }, ms); });
  }

  if (window.document$ && document$.subscribe) document$.subscribe(run);
  else document.addEventListener("DOMContentLoaded", run);
})();
