const containers = document.querySelectorAll(".card");
containers.forEach((container) => {
    container.addEventListener("click", (e) => {
        const popup = container.querySelector(".container");
        console.log(popup);
        popup.classList.add("active");

        containers.forEach(c => c.classList.remove("card_hover"));
    })
});