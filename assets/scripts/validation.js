const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const genderInput = document.getElementById("genderInput");
const dateInput = document.getElementById("dateInput");
const mobileInput = document.getElementById("mobileInput");
const cityInput = document.getElementById("cityInput");
const stateInput = document.getElementById("stateInput");
const countryInput = document.getElementById("countryInput");
const showPassword = document.getElementById("showPassword");
const show = document.getElementById("show");
const hide = document.getElementById("hide");

showPassword.addEventListener("click", () => {
    if (show.classList.contains("disabled")) {
        show.classList.remove("disabled");
        show.classList.add("enabled");
        hide.classList.remove("enabled");
        hide.classList.add("disabled");
        passwordInput.type = "text";
    }
    else {
        show.classList.remove("enabled");
        show.classList.add("disabled");
        hide.classList.remove("disabled");
        hide.classList.add("enabled");
        passwordInput.type = "password";
    }
})


function borderChanger(x, elem) {
    if (x === true) {
        elem.style.border = "0.08rem solid #f40552";
    }
    else {
        elem.style.border = "0.1rem solid #cccccc";
    }
}

async function allEventListeners() {
    if (nameInput) {
        await nameInput.addEventListener("focusout", () => {
            borderChanger(nameInput.value.length < 5, nameInput);
        }, false)
    }

    if (emailInput) {
        await emailInput.addEventListener("focusout", () => {
            borderChanger(emailInput.value.split("@")[0].length < 2 || emailInput.value.split("@")[1].split(".")[1].length.length < 2, emailInput);
        })
    }

    if (passwordInput) {
        await passwordInput.addEventListener("focusout", () => {
            borderChanger(!passwordInput.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/), passwordInput);
        })
    }

    if (genderInput) {
        await genderInput.addEventListener("focusout", () => {
            borderChanger(genderInput.value === "", genderInput);
        })
    }

    if (dateInput) {
        await dateInput.addEventListener("focusout", () => {
            borderChanger(parseInt(dateInput.value.split("-")[0]) > 2005 || dateInput.value === "", dateInput);
        })
    }

    if (mobileInput) {
        await mobileInput.addEventListener("focusout", () => {
            borderChanger(mobileInput.value.length !== 10, mobileInput)
        })
    }

    if (cityInput) {
        await cityInput.addEventListener("focusout", () => {
            borderChanger(cityInput.value.length <= 3, cityInput)
        })
    }

    if (stateInput) {
        await stateInput.addEventListener("focusout", () => {
            borderChanger(stateInput.value.length <= 3, stateInput)
        })
    }
}
allEventListeners();