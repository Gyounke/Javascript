
// 1. Créer un programme en utilisant e.target, qui permet au click de la souris de : 
// - Mettre une bordure a la div
// - Mettre le paragraphe en gras et en rouge
// - Surligné le h1
// - Effacer le h2, a chaque fois que l'on clique dessus il perd une lettre.

// let div = document.querySelector("#content");
// let paragraphe = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");

// let truc1 = () => {
//     div.style.border = "2px solid black";
// }

// let truc2 = () => {
//     p.style.fontWeight = "bold";
// }

// let truc3 = () => {
//     p.style.color = "red";
// }

// let truc4 = () => {
//     h1.backgroundColor = "yellow";
// }

// let truc5 = () => {
//     h2.innerText = h2.textContent.splice(0,h2.target.length -1);
// }

// div.addEventListener("click", (e) => {
//     truc1(e);
//     truc2(e);
//     truc3(e);
//     truc4(e);
//     truc5(e);
// });

let cliffHanger = "Il est possible de placer des paramètres dans la fonction utilisée dans l'écouteur d'évènement et nous verrons ça dans le prochain exercice !"

let content = document.getElementById("content")

content.addEventListener("click", (event) => {
    switch (event.target) {
        case  document.querySelector("h1"):
            event.target.style.textDecoration = "underline";
            break;
            case  document.querySelector("h2"):
            event.target.innerText = event.target.innerText.substring(0, event.target.innerText.length - 1);
            break;
            case  document.querySelector("p"):
            event.target.style.color = "red";
            event.target.style.fontWeight = "bolder";
            break;
            case  document.querySelector("div"):
            event.target.style.border = "1px solid black";
            break;
    }
})

let sectionVide = document.querySelector("section");
sectionVide.style.padding = "50px";

let p2 = document.querySelector("section").firstElementChild;

sectionVide.addEventListener("mouseover", () => {
    p2.innerText = cliffHanger;
})