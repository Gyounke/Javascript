
// 1.

let lastDiv = document.getElementsByTagName("div")[2];
console.log(lastDiv.firstElementChild);

// 2.

let firstDiv = document.getElementsByTagName("div")[2];
console.log(firstDiv.lastElementChild);

// 3.

let exo3 = document.getElementsByTagName("div")[2];
let exo31 = exo3.getElementsByTagName("p")[0];
let exo32 = exo31.getElementsByTagName("i");
console.log(exo32);

let exo4 = document.getElementsByTagName("div")[2];
let exo4_1 = exo4.getElementsByTagName("p")[1];
let exo4_2 = exo4_1.getElementsByTagName("b");
console.log(exo4_2);

console.log(exo32.parentNode);

console.log(exo4_2.parentNode);

console.log(exo4.childNodes[1]);