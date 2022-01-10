// 1.
let exo1 = document.getElementsByTagName("input")[0];

exo1.addEventListener("focus", () => {
    exo1.style.backgroundColor = "blue";
})

// 2.

let exo2 = document.getElementsByTagName("input")[1];

exo2.addEventListener("focus" , () => {
    exo2.style.backgroundColor = "blue";
})

exo2.addEventListener("focusout", () => {
    exo2.style.backgroundColor = "white";
});

// 3.

let p1 = document.getElementsByClassName("premierParagraphe"); 
let p2 = document.getElementsByClassName("secondParagrap"); let p3 = document.getElementsByClassName("dernierParagraphe");
let button = document.getElementsByClassName("buttonExo");
console.log(exo3);

button.addEventListener("click", () => {
p1[0].innertext = p2[0].textContent;
p3[0].innertext = p2[0].textContent;
});