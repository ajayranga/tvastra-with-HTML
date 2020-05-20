const bars = document.querySelector("#bars");
const navBar2 = document.querySelector(".navbar2");
bars.addEventListener('click', () => {
    if (navBar2.style.display === "flex") {
        navBar2.style.display = "none";
        bars.classList.add("fa", "fa-bars");
        bars.classList.remove("fas", "fa-times");
        bars.style.fontSize = "1.2rem";
    }
    else {
        navBar2.style.display = "flex";
        bars.classList.remove("fa", "fa-bars");
        bars.classList.add("fas", "fa-times");
        bars.style.fontSize = "2rem";
    }
})