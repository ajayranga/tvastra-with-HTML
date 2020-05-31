const bars = document.querySelector("#bars");
<<<<<<< HEAD
const sidebar = document.querySelector(".sidebar");
const arrowDown = document.querySelector("#arrowDown");
const treatmentsMenu = document.querySelector(".treatmentsMenu");
const sidebarDisplay = async () => {
    if (sidebar.style.display === "none")
        sidebar.style.display = "flex";
    else
        sidebar.style.display = "none";
}
const treatmentsMenuDisplay = async () => {
    if (treatmentsMenu.style.display === "block")
        treatmentsMenu.style.display = "none";
    else
        treatmentsMenu.style.display = "block";
}
bars.addEventListener("click", sidebarDisplay);
if (arrowDown) {
    arrowDown.addEventListener("click", treatmentsMenuDisplay)
}
=======
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
>>>>>>> 3fb0d31ff02ba213cabb10a962a937973bfc7104
