let monSuperTitre = document.querySelector("h1");

monSuperTitre.addEventListener("dblclick", () => {
    monSuperTitre.style.backgroundColor = "red";
    monSuperTitre.style.color = "white";
})

let monSousSousTitre = document.querySelector("h3");

monSousSousTitre.addEventListener("mouseover", () =>  {
    monSousSousTitre.style.fontSize = "small";
});

let monParagraphe = document.querySelector("p");

let whatBg = monParagraphe.getAttribute("background-color");
let whatColor = monParagraphe.getAttribute("color");

console.log(whatBg, whatColor);

monParagraphe.addEventListener("click", () => {
    
    if (monParagraphe.backgroundColor = "blue") {
        monParagraphe.style.backgroundColor = "white";
        monParagraphe.style.color = "black";
    } else {
        monParagraphe.style.backgroundColor = "blue";
        monParagraphe.style.color = "gold";
    }
})

