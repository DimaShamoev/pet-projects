let container = document.querySelector(".container");
let input = document.querySelector(".input input");
let btn = document.querySelector(".btn button");
let QrImg = document.querySelector(".qr-code-block img")

let generateQr = () => {
    let inputValue = input.value;
    if (!inputValue) return;

    QrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputValue}`;


    QrImg.addEventListener("load", () => {
        container.classList.add("active")

    })
}

btn.addEventListener("click", generateQr)
input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        generateQr()
    }

    if (!input.value) {
        container.classList.remove("active")

    }
})