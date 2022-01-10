let exo1 = document.getElementsByTagName("h1")[1].textContent;
console.log(exo1);

let exo2 = document.getElementsByTagName("li")[3].textContent;
console.log(exo2);

let exo3 = document.getElementsByTagName("p")[0].textContent;
console.log(exo3.toUpperCase());

let exo4 = document.getElementsByTagName("li");

[...exo4].forEach(element => console.log(element.textContent.toUpperCase()));