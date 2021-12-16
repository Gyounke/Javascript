/*alert("Salut tout le monde!");
console.log("Salut tout le monde!");
let phrase="lorem ipsum samere";
let age = 28;*/

// let firstName = "Kevin";
// console.log(firstName);


// // Tab Arrays

// let nom = "Kevin";
// let tableau = ["Bonjour", 25, true, "Hello", "Salut", false, 85512, nom];
// console.log(typeof tableau); //  réponse : objet car langage orienté objet
// console.log(tableau[tableau.length-1]);


// // Switch

// let question = prompt("Prenom");

// switch (question) {
//     case "Elias":
//         console.log("Bonjour Elias");
//         break;
//     case "Nicolas":
//         console.log("Bonjour Nicola");
//         break;
//     default:
//         console.log("Bonjour inconnu");
//         break;
// }


// Boucles
let tableau = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

// for 

// for (let i = 0; i < tableau.length; i++) {
//     console.log(tableau[i]);
// }
//  for each
tableau.forEach(element =>{
    console.log(element);
});

//  while

let prenom = prompt("Prénom");

while (prenom != "Elias") {
    alert("Mauvais prénom");
    prenom = prompt("Prénom");
}

//  do while 


// Functions 

// Trouvable
function saluer() {

}

// Plus rare
const saluer = function(){

}

// Après 2015 

const saluer = (prenom) => {
    console.log(`Bonjour ${prenom}`)
}

saluer("Elias");
saluer("Michael");

// Return

const saluer = (nbre1, nbre2) => {
    let somme = nbre1 + nbre2;
    return somme; // renvoye le résultat de la fonction
}

console.log(saluer(2,5))


// Objects

let personne = {
    nom: "Blistein",
    prenom: "Kevin",
    age: 25,
    origine: "Whonose"
}

let tableau = [personne]
console.log(personne); //affiche toutes les valeurs de l'objet

console.log(personne.prenom);

console.log(tableau[0].prenom);