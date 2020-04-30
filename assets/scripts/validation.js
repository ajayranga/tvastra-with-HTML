const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const genderInput = document.getElementById("genderInput");
const dateInput = document.getElementById("dateInput");
const mobileInput = document.getElementById("mobileInput");
const cityInput = document.getElementById("cityInput");
const stateInput = document.getElementById("stateInput");
const countryInput = document.getElementById("countryInput");

nameInput.addEventListener("focusout", () => {
    borderChanger(nameInput.value.length < 5, nameInput);
})

emailInput.addEventListener("focusout", () => {
    borderChanger(emailInput.value.split("@")[0].length < 2 || emailInput.value.split("@")[1].split(".")[1].length.length < 2, emailInput);
})

passwordInput.addEventListener("focusout", () => {
    borderChanger(!passwordInput.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/), passwordInput);
})

genderInput.addEventListener("focusout", () => {
    borderChanger(genderInput.value === "", genderInput);
})

dateInput.addEventListener("focusout", () => {
    borderChanger(parseInt(dateInput.value.split("-")[0]) > 2005 || dateInput.value === "", dateInput);
})

mobileInput.addEventListener("focusout", () => {
    borderChanger(mobileInput.value.length !== 10, mobileInput)
})

cityInput.addEventListener("focusout", () => {
    borderChanger(cityInput.value.length <= 3, cityInput)
})

stateInput.addEventListener("focusout", () => {
    borderChanger(stateInput.value.length <= 3, stateInput)
})

countryInput.addEventListener("focusout", () => {
    borderChanger(countryInput.value === "", countryInput)
})



function borderChanger(x, elem) {
    if (x === true) {
        elem.style.border = "0.08rem solid #f40552";
    }
    else {
        elem.style.border = "0.1rem solid #cccccc";
    }
}