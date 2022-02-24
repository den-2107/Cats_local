const cards = document.querySelectorAll(".card");
const infoCats = document.querySelector(".info-cats")

document.getElementById("lara-card").addEventListener("click", (e) => setClickEvent("lara-popup"));
document.getElementById("bazil-card").addEventListener("click", (e) => setClickEvent("bazil-popup"));
document.getElementById("rish-card").addEventListener("click", (e) => setClickEvent("rish-popup"));
document.getElementById("elli-card").addEventListener("click", (e) => setClickEvent("elli-popup"));
document.getElementById("charlye-card").addEventListener("click", (e) => setClickEvent("charlye-popup"));
document.getElementById("stefani-card").addEventListener("click", (e) => setClickEvent("stefani-popup"));
document.getElementById("dusya-card").addEventListener("click", (e) => setClickEvent("dusya-popup"));
document.getElementById("bruno-card").addEventListener("click", (e) => setClickEvent("bruno-popup"));
document.getElementById("svetlyachock-card").addEventListener("click", (e) => setClickEvent("svetlyachock-popup"));

function setClickEvent(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.add("container_active");
    infoCats.classList.add("info-cats_active");
    const cross = popup.querySelector(".close");
    cross.addEventListener("click", (e) => {
        e.stopPropagation();
        popup.classList.remove("container_active");
        infoCats.classList.remove("info-cats_active");
    });
}