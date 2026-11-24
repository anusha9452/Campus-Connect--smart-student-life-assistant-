// CampusConnect - small JavaScript helpers
// 1. Mobile sidebar toggle
var menuBtn = document.getElementById("menuBtn");
var sidebar = document.getElementById("sidebar");
if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", function () { sidebar.classList.toggle("open"); });
}
// 2. Ask confirmation before deleting
document.querySelectorAll("form.confirm").forEach(function (f) {
  f.addEventListener("submit", function (e) {
    if (!confirm("Are you sure you want to delete this item?")) e.preventDefault();
  });
});
