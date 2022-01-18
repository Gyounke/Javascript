// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

// 1. Créer un programme qui au clique d'un des éléments de la div l'élément s'affiche dans la console, en utilisant une boucle pour appliquer un écouteur d'événement sur chaque élément !

let div = document.querySelector("#content");
let divChildren = document.querySelector("#content").children;

console.log(divChildren);

let i = 0;

for (i; i < divChildren.length; i++) {

    divChildren[i].addEventListener("click", (e) => {
        console.log(e.target);

})
}

// 2.  Créer un programme qui au double click d'un élément son texte est en majuscule

for (let j = 0 ; j < divChildren.length; j++) {

    divChildren[j].addEventListener("dblclick", (e) => {
       e.target.style.textTransform = "uppercase";
})
}

// 3. Créer un programme qui au hasard choisis parmis les propriétés suivants et l'applique aux éléments quand on clique sur le button GO : 

let input = document.querySelector("input");

let styles = ["1px solid gold", "blue", "red","5px dotted gold"];



input.addEventListener("click", () => {
    for ( let k =0; k < divChildren.length; k++) {
        let randomNumber = Math.floor(Math.random()*4);
        console.log(randomNumber);
        if (randomNumber == 0 || randomNumber == 3) {
        divChildren[k].style.border = styles[randomNumber];
        } else if (randomNumber == 1 || randomNumber == 2) {
            divChildren[k].style.backgroundColor = styles[randomNumber];
        }
    }
})