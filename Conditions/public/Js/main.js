// let age = +prompt("Quel age avez-vous?");

// if (age>= 25){
//     console.log("Vous avez plus que 25 ans.");
// }
// else {
//     console.log("Vous avez moins de 25 ans.");
// }

// let age = +prompt("Quel age avez-vous?");

// if (age < 18){
//     console.log("Vous n'avez pas le droit de .");
// }
// else if (age >= 18 && age <= 50) {
//     console.log("Vousavez le droit de .");
// } else {
//     console.log("Vous êtes trop grand");
// }

// Révisons

// 1. Verifie si "5" est strictement égale à 5

// let check = 5;
// if (check === "5") {
//     console.log("Les deux sont strictement égaux");
// } else {
//     console.log("Les deux ne sont pas strictement égaux");
// }

// 2. Posez une question à l'utilisateur qui doit repondre avec un chiffre, et stockez un nombre aleatoire entre 1 et 20. Si la personne devine au premier coup, vous lui dites comme quoi elle a réussi, sinon vous lui dites qu'elle a raté

// let guess = +prompt("Choisissez un chiffre entre 1 et 20");

// let gamble = Math.floor((Math.random() * 19) + 1);
// alert(gamble);

// if (gamble === guess) {
//     alert("Bien joué!");
// } else {
//     while (guess !== gamble) {
//         guess = +prompt("Choisissez un chiffre entre 1 et 20")
//     }
// }

// 3. Créez une devinette (Un tableau avec des fruits, et vous devez deviner un fruit qui se trouve dans le tableau, si vous le trouvez, vous avez reussi, sinon vous avez raté)

// let fruits = ["banane", "cerise", "fraise", "ananas", "citron", "raisin", "goyave"];

// let devinette = prompt("Quel fruit de couleur rouge est en réalité constitué d'une multitude de petits fruits incrustés dans partie charnue?");

// if (devinette === "fraise") {
//     alert("Bonne réponse!");
// } else {    
//     while (devinette !== "fraise") {
//         alert("Vous vous êtes trompé !")
//         devinette = prompt("Quel fruit de couleur rouge est en réalité constitué d'une multitude de petits fruits incrustés dans partie charnue?");
//     }
// }

// 4. Posez une question à l'utilisateur sur le jour qu'on se trouve, si il reponde "lundi", "mardi", "mercredi" ou "jeudi" on lui dit "je suis fatigué", et le reste de la semaine "ouaaaaai c'est le weekend"

// let semaine

// let jour = prompt("Quel jour sommes-nous mf?");

// switch (jour) {
//     case "lundi":
//         alert("Je suis fatiguééééé");
//         break;
//     case "mardi":
//         alert("Je suis fatiguééééé");
//         break;
//     case "mercredi":
//         alert("Je suis fatiguééééé");
//         break;
//     case "jeudi":
//         alert("Je suis fatiguééééé");
//         break;
//     case "vendredi":
//         alert("Ouaaaaai c'est le week-end");
//         break;
//     case "samedi":
//         alert("Ouaaaaai c'est le week-end");
//         break;
//     case "dimanche":
//         alert("Ouaaaaai c'est le week-end");
//         break;
// }

// 5. Créer une variable qui affiche quel âge avez vous ? si l'âge de la personne de la personne est égal à 18 ou plus et que la personne à 30 ou moins elle rejoint la section des 18-30 ans sinon si la personne à 50 ans ou moins et plus de 30 ans elle rejoint la section des 30-50ans sinon si la personne à plus de 50 ans elle rejoint la section des plus de 50 ans sinon la personne est trop jeune pour rejoindre le site.

// let age = +prompt("Quel age avez-vous?");

// if (age < 18) {
//     alert("Vous êtes trop jeune pour rejoindre le site");
// } else if (age < 30) {
//     alert("Vous êtes dans la catégorie 18-30");
// } else if (age <50) {
//     alert("Vous êtes dans la catgéorie 30-50");
// } else {
//     alert("Vous êtes dans la catégorie senior");
// }


// 6. Créez 3 questions, si la personne repond bien à une seule question, elle a un message comme quoi elle a réussi
// 7. La même chose que le 6 mais la personne doit repondre bien aux trois questions