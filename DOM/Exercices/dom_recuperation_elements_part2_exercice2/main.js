let exo1 = document.querySelector("#content h3");
console.log(exo1);

let exo2 = document.querySelector("#titreNiv3");
console.log(exo2);

let exo3 = document.querySelector("#titreNiv3").previousElementSibling;
console.log(exo3);

// let exo4 = document.querySelector("#petitParagraphe").nextElementSibling;
// console.log(exo4);

let exo5 = document.querySelector(".important").parentNode;
console.log(exo5);

let exo6 = document.querySelector("#content").firstElementChild;
console.log(exo6);

let exo7 = document.querySelector("#important").nextElementSibling;
console.log(exo7);

let exo8 = document.querySelector("#textGeneral").nextElementSibling.nextElementSibling;
console.log(exo8);



// Correction Michael :

// let exo7 = document.getElementsByTagName('li')[3].nextElementSibling
// console.log(exo7)
// //8

// let exo8 = document.getElementsByTagName('p')[3].nextElementSibling.nextElementSibling
// console.log(exo8)
// //9


let exo9 = document.getElementsByTagName("span")[1].parentElement.nextElementSibling;
console.log(exo9);
//10


let exo10 = exo9.firstElementChild.firstElementChild;
console.log(exo10.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.textContent);

//11


let exo11 = document.querySelector(".grandParagraphe");
console.log(exo11);

//12

let exo12 = Array.from(document.querySelector("li"));

exo12.forEach(element => {
    console.log(element);
})