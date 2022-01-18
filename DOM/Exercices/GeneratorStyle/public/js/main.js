let boutons = document.querySelectorAll("button");
let input = document.querySelectorAll("input");
let test = document.querySelector(".div_test");

let whiteBg = () => {
    test.style.backgroundColor = "blue";
}

boutons[0].addEventListener("click", whiteBg);