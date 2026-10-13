/**
 * moustaqbili | مستقبلي
 * Dark mode: loaded in each page's <head>, before anything is drawn, so a student who chose
 * dark mode never sees a white flash. The header button (toggleTheme in layout.js) changes it.
 * The site starts in light mode until the student switches.
 */
(function () {
  var saved = null;
  try { saved = localStorage.getItem("moustaqbili_theme"); } catch (e) { /* storage blocked: stay light */ }
  if (saved === "dark") document.documentElement.classList.add("dark");
})();
