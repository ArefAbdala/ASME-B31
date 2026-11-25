/* Lets readers tick off study-plan steps; ticks are kept in this browser only. */
(function () {
  function key(i) { return "b31-progress:" + location.pathname.replace(/\/+$/, "") + ":" + i; }
  function read(k) { try { return localStorage.getItem(k) === "1"; } catch (e) { return false; } }
  function write(k, v) { try { v ? localStorage.setItem(k, "1") : localStorage.removeItem(k); } catch (e) {} }

  function run() {
    var boxes = document.querySelectorAll(".md-typeset .task-list-item input[type=checkbox]");
    if (!boxes.length) return;
    boxes.forEach(function (box, i) {
      box.disabled = false;
      box.checked = read(key(i));
      box.addEventListener("change", function () { write(key(i), box.checked); });
    });
    var list = boxes[0].closest("ul");
    if (list && !list.nextElementSibling?.classList.contains("b31-progress-note")) {
      var note = document.createElement("p");
      note.className = "b31-progress-note";
      note.textContent = "Tick each step as you finish it. Your ticks are saved in this browser only.";
      list.parentNode.insertBefore(note, list.nextSibling);
    }
  }

  if (window.document$ && document$.subscribe) document$.subscribe(run);
  else document.addEventListener("DOMContentLoaded", run);
})();
