const otpInput = document.querySelectorAll(".otpInput");
otpInput.forEach(item => {
    item.addEventListener("keyup", (e) => {
        const x = item.id.split("")[item.id.length - 1];
        if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
            if (x !== "4") {
                document.getElementById(`otpInput${parseInt(x) + 1}`).focus();
            }
        }
        else
            if (e.keyCode === 8 || e.keyCode === 46) {//backspace of delete key
                document.getElementById(`otpInput${parseInt(x)}`).value = "";
                if (x !== "1") {
                    document.getElementById(`otpInput${parseInt(x) - 1}`).focus();
                }
            }
            else {
                document.getElementById(`otpInput${x}`).value = "";
            }
    })
});