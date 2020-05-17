const bars = document.querySelector("#bars");
const list = document.querySelector(".list");
const end = document.querySelector(".end");
const collapse = () => {
    if (window.innerWidth < 1024) {
        if (list.classList.contains("disable")) {
            list.classList.remove("disable");
            end.classList.remove("disable");
            list.classList.add("enable");
            end.classList.add("enable");
            setTimeout(() => {
                list.style.display = "flex";
                end.style.display = "flex";
            }, 1000);
        }
        else if (list.classList.contains("enable")) {
            list.classList.add("disable");
            end.classList.add("disable");
            list.classList.remove("enable");
            end.classList.remove("enable");
            setTimeout(() => {
                list.style.display = "none";
                end.style.display = "none";
            }, 1000);
        }
    }
}
bars.addEventListener('click', collapse);
if (window.innerWidth >= 1024) {
    list.classList.remove("active");
    end.classList.remove("active");
    end.classList.remove("disable");
    list.classList.remove("disable");
}