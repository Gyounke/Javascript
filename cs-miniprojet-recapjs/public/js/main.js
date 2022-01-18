let lesh2 = [...document.querySelectorAll("h2")];
let exerciceDiv = document.querySelectorAll(".exercice");
let titreE1 = exerciceDiv[0].querySelector("h3");


// Exercice 1 

lesh2[0].addEventListener("click", () => {
    exerciceDiv[0].style.display = "contents"
    titreE1.innerText = "le titre modifié"
    titreE1.style.color = "red"
    titreE1.className = "bg-secondary"
    exerciceDiv[0].style.backgroundColor = "black"
})

// Exercice 2 

lesh2.forEach(element => {
    element.addEventListener("click", () => {
        for (let i = 0; i < lesh2.length; i++) {
            exerciceDiv[i].style.display = "none";
        }
        let indexo = lesh2.indexOf(element);
        console.log(indexo);
        exerciceDiv[indexo].style.display = "contents";
    })
}
)

// Exercice 3 

let input = document.querySelector("input");
let boutons = document.querySelectorAll("button");
let entrees = document.querySelectorAll("span");
let square1 = document.querySelector(".square1");
let square2 = document.querySelector(".square2");

boutons[0].addEventListener("click", () => {
    entrees[0].innerText = input.value;
    input.value= "";
})

// Exercice 4 

let compteur = 0;

boutons[1].addEventListener("click", () => {
    
    if (compteur%2 == 0) {
        square1.style.display = "none"
        square2.style.display = "inline"
    } else if (compteur%2 == 1) {
        square1.style.display = "inline"
        square2.style.display = "none"
    } 
    compteur++
    entrees[1].innerText = compteur;
}) 

// Exercice 5 

let panier = document.querySelector(".panier");

boutons[2].addEventListener("click", () => {
    let newImg = document.createElement("img");
    newImg.style.width= "80px"
    newImg.style.height= "100px"
    newImg.src = "./public/img/oeuf.png"
    panier.append(newImg);
})


// Exercice 6

let input1 = document.querySelector(".addition1");
let input2 = document.querySelector(".addition2");

let egalite = document.querySelector(".egalite");
let answer = document.querySelector(".answer");

egalite.addEventListener("click", () => {
    let valeur1 = Number (input1.value);
    let valeur2 = Number (input2.value);
    let total = valeur1 + valeur2;
    answer.innerText = total;
    input1.value = "";
    input2.value = "";
})

let affichage = document.querySelector(".affichage");

let touches = document.querySelectorAll(".touche");
console.log(touches);


let calcul;
let operator;
let resultat;

boutons[4].addEventListener("click", () =>{
    affichage.value =  Number(1)
    
})

boutons[5].addEventListener("click", () =>{
    
    affichage.value = Number(2)
    
})

boutons[6].addEventListener("click", () =>{
    affichage.value = Number(3)

})

boutons[7].addEventListener("click", () =>{
    calcul = affichage.value
    affichage.value = affichage.value + "+"
    operator = "+"
})

boutons[8].addEventListener("click", () =>{
    
    affichage.value = Number(4)
})

boutons[9].addEventListener("click", () =>{
    affichage.value = Number(5)
})

boutons[10].addEventListener("click", () =>{
    affichage.value = Number(6)
})

boutons[11].addEventListener("click", () =>{
    calcul = affichage.value
    affichage.value = affichage.value + "-"
    operator = "-"
})

boutons[12].addEventListener("click", () =>{
    affichage.value = Number(7)
})

boutons[13].addEventListener("click", () =>{
    
    affichage.value = Number(8)
})

boutons[14].addEventListener("click", () =>{
    affichage.value = Number(9)
})

boutons[15].addEventListener("click", () =>{
    calcul = affichage.value
    affichage.value = affichage.value + "*"
    operator = "*"
})

boutons[16].addEventListener("click", () =>{
   affichage.value = affichage.value.slice(0,affichage.value.length-1);
})

boutons[17].addEventListener("click", () =>{
    affichage.value = Number(0)
})

boutons[18].addEventListener("click", () =>{
console.log(calcul , operator, affichage.value)
if (operator == "+") {
    resultat = Number(Number(calcul) + Number(affichage.value))
    affichage.value = resultat;
} else if (operator == "-") {
    resultat = Number(calcul - affichage.value)
    affichage.value = resultat;
} else if (operator == "*") {
    resultat = Number(calcul * affichage.value);
    affichage.value = resultat
} else if (operator == "/") {
    resultat = Number(calcul / affichage.value);
    affichage.value = resultat;
}
})

boutons[19].addEventListener("click", () =>{
    calcul = affichage.value
    affichage.value = affichage.value + "/"
    operator = "/"
})