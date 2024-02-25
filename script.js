const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const img = document.querySelector(".img");


btn.addEventListener("click", () =>{
    const inputval = input.value
    console.log(inputval)

    if (! input.value) {
        alert("Please enter a valid URL")
        return
    }
    else {
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputval}`;
        arimg.alt = `QR Code for ${inputval}`;
    }

})