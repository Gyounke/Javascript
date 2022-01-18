
// Pour l'exercice 2

let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"


// 1.

let paragraphe = document.querySelector("p");

let contenu = (truc) => {
    paragraphe.innerText = truc;
}

let bouton = document.querySelector("input");

bouton.addEventListener("click",() => contenu(pContent));

// 2.

let h1 =document.querySelector("h1");

let change = (bg, color) => {
    h1.style.backgroundColor = bg;
    h1.style.color = color;
}

h1.addEventListener("click", () => change(theBackground,theColor));