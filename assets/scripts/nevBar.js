const bars = document.querySelector("#bars");
const loginButton = document.querySelectorAll("#loginButton");
const quoteButton=document.querySelectorAll("#quoteButton");
const collapse = () => {
    if (document.querySelector(".sideBar").style.display !== "block") {
        document.querySelector(".sideBar").style.display = "block";
    }
    else {
        document.querySelector(".sideBar").style.display = "none";
    }
}
for (var i = 0; i < loginButton.length; i++) {
    loginButton[i].addEventListener('click', () => {
        window.location.href = "login.html";
    });
}
for (var i = 0; i < quoteButton.length; i++) {
    quoteButton[i].addEventListener('click', () => {
        window.location.href = "contactUs.html";
    });
}
bars.addEventListener('click', collapse);