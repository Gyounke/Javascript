// EXO1
// Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)

// let calcul = (nbre1, nbre2) => {
//     let somme = nbre1 + nbre2;
//     return somme;
// }

// let choix1 = +prompt('Quel premier nobre additionner?');
// let choix2 = +prompt('Quel deuxième nobre additionner?');
// alert(calcul(choix1, choix2));

// EXO2
// Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)

// let calcul = (nbre1, nbre2) => {
//     let difference = nbre1 - nbre2;
//     return difference;
// }

// let choix1 = +prompt('Quel premier nombre utiliser?');
// let choix2 = +prompt('Quel deuxième nmbre soustraire?');
// alert(calcul(choix1, choix2));

// EXO3  
// Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)

// let calcul = (nbre1, nbre2) => {
//     let multiplication = nbre1 * nbre2;
//     return multiplication;
// }

// let choix1 = +prompt('Quel premier nombre multiplier?');
// let choix2 = +prompt('Quel deuxième nobre multiplier?');
// alert(calcul(choix1, choix2));

// EXO4 
// Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)

// let calcul = (nbre1, nbre2) => {
//     let division = nbre1 / nbre2;
//     return division;
// }

// let choix1 = +prompt('Quel premier nombre diviser?');
// let choix2 = +prompt('Quel deuxième nombre diviser?');
// alert(calcul(choix1, choix2));

// EXO5
// Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)

// let calcul = (nbre1, nbre2) => {
//     let divisionReste = nbre1 % nbre2;
//     return divisionReste;
// }

// let choix1 = +prompt('Quel premier nombre diviser?');
// let choix2 = +prompt('Quel deuxième nombre diviser?');
// alert(calcul(choix1, choix2));

// EXO6
// Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)

// let calcul = (nbre1) => {
//     let carre = sqrt(nbre1);
//     return carre;
// }

// let choix1 = +prompt('De quel nombre voulez-vous connaître la racine carrée?');

// alert(calcul(choix1));

// EXO7
// Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)

// let calcul = (nbre1, nbre2) => {
//     let puissance = Math.pow(nbre1, nbre2);
//     return puissance;
// }

// let choix1 = +prompt('Quel nombre utiliser comme base?');
// let choix2 = +prompt('Quel nombre utiliser comme exposant?');
// alert(calcul(choix1, choix2));

// EXO8
// Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;

// let capitalize = (mot) => {
//     let majFirst = mot.charAt(0).toUpperCase() + mot.substring(1,mot.length);
//     return majFirst;
// }

// let choixMot = prompt("Choisissez un mot");
// alert(capitalize(choixMot));

// EXO9
// Créer une function [calcul] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)

// let calcul = (nbre1,operateur,nbre2) => {
//     let result;
//     switch (operateur) {
//         case "+" : 
//         result = nbre1 + nbre2;
//         return result
//         case "-" :
//         result = nbre1 - nbre2;
//         return result
//         case "*" :
//         result = nbre1 * nbre2;
//         return result
//         case "/" :
//         result = nbre1 / nbre2;
//         return result
//     }
// }

// let choix1 = +prompt(" Qul premier nombre utiliser ?");
// let operateurChoix = prompt (" Quel opérateur utiliser?");
// let choix2 = +prompt ("Quel deuxième nombre utiliser?");
// alert(calcul(choix1,operateurChoix,choix2));

// EXO1
// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)

// let reverseNumber = (nbre) => {
//     var nbreTableau = [];
//     for (i =0; i < nbre.length;i++) {       
//         nbreTableau.push(nbre.charAt(i));
//     }

//     nbreTableau.reverse();
//     let finalTableau = nbreTableau.join('');
//     return finalTableau;
// } 

// let chiffreAReverse = prompt("Choississez un chiffre");
// alert(reverseNumber(chiffreAReverse));

// EXO2
// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2 x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"

// let divPar2 = (nbre1) => {
//     let division = nbre1 % 2;
//     switch (division) {
//         case 0 : 
//         let result = nbre1 /2;
//         alert(`Le nombre ${nbre1} est divisble par 2 et donne ${result}`)
//         case 1 : 
//         alert("Ce nombre n'est pas divisible par 2")
//     }
// }

// let choix = +prompt("Quel nombre choississez-vou?")
// divPar2(choix);

// EXO3
// Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"

// let logIn = () => {
//     var question = prompt("Veuillez insérer votre mot de passe");
//         if (question === "mdp") {
//             alert("Vous êtes connecté");
//         } else {
//             while (question != "mdp") {
//             question = prompt("Erreur.Veuillez réinsérer votre mot de passe");
//             if (question === "mdp") {
//                 alert("Vous êtes connecté");
//             } 
//         }
//     }
// }

// logIn();

// Révisions
// # Functions


// 1. Créez une fonction qui permet de returner la taille d'une chaine de caractères

// let question = prompt("Tape ce que tu veux sauce au poivre");

// let longueur = (phrase) => {
//     let calcul = phrase.length;
//     return calcul;
// }

// alert(longueur(question));

// 2. Créez une fonction qui permet de verifier quel est le type du parametre

// let paramverif = "5";

// let verif = (param) => {
//     let veritas = typeof(param);
//     return veritas;
// }

// alert(verif(paramverif));

// 3. Créez une fonction qui permet de vérifier si le chiffre est plus grand ou égale à 50

// let choix = +prompt("Donnez un nombre viiite")

// let check = (nombreCheck) => {
//     if (nombreCheck < 50){
//         let annonce1 = "Ce nombre est inférireur à 50";
//         return annonce1;
//     } else {
//         let annonce2 = "Ce nombre est supérieur à 50";
//         return annonce2;
//     }
// }

// alert(check(choix));

// 4. Créez une fonction qui permet de renvoyer la racine cubique du parametre

// let choix = +prompt("Donnez un nombre dont vous voulez la racine cubique brdl");

// let cubaaaar = (nombre) => {
//     let veritas = Math.cbrt(nombre);
//     return veritas;
// }

// alert(`La valeur de la racine cubique du nompbre choisi vaut ${cubaaaar(choix)}`);

// 5. Créez une fonction qui met en majuscule qu'à partir de la 5ème lettre

// let phrase = prompt("Donne la phrase que tu veux sale type");

// let major = (mots) => {
//     let newPhrase = mots.substring(0,4) + mots.substring(4).toUpperCase();
//     return newPhrase;
// }

// alert(major(phrase));

// 6. Créez une fonction qui met en miniscule qu'à partir de la 9ème lettre

// let phrase = prompt("Donne la phrase que tu veux sale type");

// let minor = (mots) => {
//     let newPhrase2 = mots.substring(0,8) + mots.substring(8).toLowerCase();
//     return newPhrase2;
// }

// alert(minor(phrase));


// 7. Fusionnez les deux fonctions

// let phrase = prompt("Donne la phrase que tu veux sale type");

// let fuckedUp = (mots) => {
//     let newPhrase3 = mots.substring(0,4) + mots.substring(4,8).toUpperCase() + mots.substring(8).toLowerCase();
//     return newPhrase3;
// }

// alert(fuckedUp(phrase));