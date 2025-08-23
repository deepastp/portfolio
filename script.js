const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;
if(localStorage.getItem("theme") === "dark"){
  body.classList.add("dark");
  toggleBtn.textContent = "☀️ Light Mode";
}
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if(body.classList.contains("dark")){
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});
function openModal(id) { document.getElementById(id).style.display = "block"; }
function closeModal(id) { document.getElementById(id).style.display = "none"; }
window.onclick = function(event) {
  document.querySelectorAll(".modal").forEach(modal => {
    if (event.target == modal) { modal.style.display = "none"; }
  });
}