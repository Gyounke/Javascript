// - Les conditions - Exercice 1
//     1. Via un console.log() vérifie l'egalité entre 1 et "1"

// if ("1" == 1 ){
//     console.log("l'égalité est vérifiée");
// } else {
//     console.log("l'égalité n'est pas vérifiée");
// }

// //     2. Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"

// if ("1" === 1 ){
//     console.log("l'égalité est vérifiée");
// } else {
//     console.log("l'égalité n'est pas vérifiée");
// }

// //     3. Créer un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichée une alerte avec comme message " Ton nom est trop court "

// let prenom = prompt("Quel est ton prénom ?")

// if (prenom.length < 5) {
//     console.log("Ton prénom est trop court frr");
// } else {
//     console.log(" Alzz, ça passe");
// }

// //     4. Affiche une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.

// let answer = +prompt("Combien font 3*4 ?")

// if (answer == 12){
//     console.log("Bonne réponse fouuu")
// } else if ( answer == 9) {
//     console.log("Tu connais tes classiques!")
// } else {
//     console.log(" Bah alors?")
// }

// //     5. Affiche une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dite lui, à combien d'unité il était de la réponse exemple si la réponse etait 35 et qu'il répont 40 renvoyez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"

// let multi = +prompt("Résolvez 5*6")

// if (multi === 30) {
//     console.log("Bravo champion!")
// } else {
//     let ecart = Math.abs(multi - 30);
//     console.log(" Tu n'étais qu'à" + ecart + " unités de la réponse");
// }
// //     6. Créer un programme qui permet d'ajouter des elements dans un tableau via des prompts quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau


// var tableau = [];

// do { 
//     let ajout = prompt("Ajoute un truc dans mon tableau stp")
//     tableau.push(ajout) 
// } while (tableau.length < 3)   

// alert(" Oh stop y a trop là");



//     7. Créer un programme qui permet a l'utilisateur de mettre des chiffres dans des bacs, si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres" affiche ensuite une seule alerte avec le contenu des deux bacs

// let petitNombre = [];
// let grandNombre = [];

// let nombre = +prompt ("Rajoute un premier nombre");

// if (nombre < 12) {
//     petitNombre.push(nombre);
// } else {
//     grandNombre.push(nombre)
// }

// nombre = +prompt ("Rajoute un second nombre");

// if (nombre < 12) {
//     petitNombre.push(nombre);
// } else {
//     grandNombre.push(nombre)
// }

//  nombre = +prompt ("Rajoute un troisième nombre");

//  if (nombre < 12) {
//     petitNombre.push(nombre);
// } else {
//     grandNombre.push(nombre)
// }

// nombre = +prompt ("Rajoute un quatrième nombre");

// if (nombre < 12) {
//     petitNombre.push(nombre);
// } else {
//     grandNombre.push(nombre);
// }

// console.log ("Petits Nombres:" + petitNombre);
// console.log ("Grands Nombres :" + grandNombre);


//     8. Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluent des conditions



let humeur = +prompt( "Sur une échelle de 1 (bad total) à 10 ( super forme) quel est ton humeur du moment?") 

if (humeur < 4) {
    alert("Si tu as besoin d'un soutien alz frr j'suis al");
} else if (humeur < 7) {
    alert("Y a des jours comme ça, mais on est là vieux, même juste pour tuer le temps");
} else {
    alert("Bien ou bien alors?");
}

