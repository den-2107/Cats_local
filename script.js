const containers = document.querySelectorAll(".card");
containers.forEach((container) => {
    container.addEventListener("click", (e) => {
        const popup = container.querySelector(".info-container");
        popup.classList.add("active");

    })
});