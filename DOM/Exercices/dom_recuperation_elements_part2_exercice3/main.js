// 1

let exo1 = document.querySelector("#content");
console.log(exo1);

// 2

let exo2 = document.querySelectorAll("#content");
console.log(exo2);
// 3

let exo3 = document.querySelector(".important");
console.log(exo3);

// 4

let exo4 = document.querySelectorAll(".important")
console.log(exo4);

// 5
let li = document.querySelectorAll("li")

li.forEach(element => {
    console.log(element.innerText.substring(0, element.innerText.length - 1) + element.innerText[element.innerText.length - 1].toUpperCase());
});

// 6
let para = document.getElementsByClassName("grandParagraphe")
console.log(para);

let cont = document.getElementById("content");
console.log(cont);