// 1. Met un écouteur d'événement sur le h1, rajoute la class text-blue

let h1TheEternal = document.querySelector("h1");

h1TheEternal.addEventListener("click", () => {
    h1TheEternal.className = "text-blue";
})

// 2. Au double clique du h3, rajoute la class text-error

let h3LeCoquin = document.querySelector("h3");

h3LeCoquin.addEventListener("dblclick", () => {
    h3LeCoquin.className = "text-error"
})

// 3. Trouve une methode qui rajoute la class text-style sur le premier paragraphe mais qui en meme temps vérifie si la class est déjà dessus, dans ce cas la cette methode est capable de la retirer 

let paragraphesChelous = document.querySelectorAll("p");

paragraphesChelous[0].addEventListener("dblclick", () => {
    let choix = paragraphesChelous[0].hasAttribute("text-style");
    console.log(choix);
    if (choix == true) {
        paragraphesChelous[0].removeAttribute("text-style");
    } else if (choix == false) {
        paragraphesChelous[0].className = "text-style";
    }
})

// 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique 

let spanToutFous = paragraphesChelous[1].querySelectorAll("span");

console.log(spanToutFous);


for (const key in spanToutFous) {
    spanToutFous[key].addEventListener("click", () => {
        spanToutFous[key].className = "bolder";
    })

}

// 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !

let spanPasFous = paragraphesChelous[2].querySelectorAll("span");

let i = 0;

for (const lol in spanPasFous) {
    spanPasFous[lol].addEventListener("click", () => {
        spanPasFous[lol].deleteClass = "bolder-red";
        spanPasFous[lol].className = "bolder-red";

    })
    i++
}

console.log(i);