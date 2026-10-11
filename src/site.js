// Theme filter on the pattern list. The page works without this script.
(function () {
  var bar = document.querySelector("[data-filter]");
  var target = document.querySelector("[data-filter-target]");
  if (!bar || !target) return;
  var empty = document.querySelector(".filter-empty");
  bar.addEventListener("click", function (event) {
    var button = event.target.closest("button");
    if (!button) return;
    var value = button.getAttribute("data-value");
    bar.querySelectorAll("button").forEach(function (b) {
      b.setAttribute("aria-pressed", b === button ? "true" : "false");
    });
    var shown = 0;
    target.querySelectorAll("[data-themes]").forEach(function (item) {
      var ok = !value || (item.getAttribute("data-themes") || "").split(" ").indexOf(value) !== -1;
      item.hidden = !ok;
      if (ok) shown++;
    });
    if (empty) empty.hidden = shown !== 0;
  });
})();

// On narrow screens the timeline scrolls sideways; start it with the playhead in view.
(function () {
  var box = document.querySelector(".timeline-scroll");
  if (!box || box.scrollWidth <= box.clientWidth) return;
  box.scrollLeft = box.scrollWidth * 0.78 - box.clientWidth * 0.7;
})();
