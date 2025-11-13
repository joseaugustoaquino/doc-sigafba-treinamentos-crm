document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('copyright-year');
  if (el) el.textContent = String(new Date().getFullYear());
});