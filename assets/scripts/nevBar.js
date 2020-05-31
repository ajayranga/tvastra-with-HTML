const bars = document.querySelector("#bars");
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