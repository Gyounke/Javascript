// // 1. Exo 1 Boucles WHILE

// //     - Créez une variable classe avec un array
//     let classe = ["Aleks","Amanda","Elias","Elliot","Gursel","Imane","Jade","Kevin","Louis","Marcyl","Mich","Samy","Ilias","Adil","Isma","Nicola","Batou","Calvin","Momo"];

// //     - A l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe

//     let nombreMax = +prompt("Combien d'élèves choississez-vous?")

// //     - A l'aide d'une boucle while, inserez des étudiants dans la classe tant que la classe n'est pas remplie
// let remplissage = [];

// while (remplissage.length <nombreMax) {

//     remplissage.push(classe [(Math.round(18*Math.random()))]);
// }
// //     - Après avoir rempli la classe, affichez tous les etudiants

// console.log(remplissage);

// // 2. Exo 02
// //     - Créer un tableau de 9 prénoms 

// let classe = ["Aleks","Amanda","Elias","Elliot","Gursel","Imane","Jade","Kevin","Louis"];

// //     - Faire une boucle sur les prénoms précédé de Bonjour tant que 9 n'est pas atteint et les affiché dans la console
// //     - Astuce : let i = 0;
// //     - Astuce 2 : (i < 9)

// var i = 0;
// while (i <9) {
//     console.log(`Bonjour ${classe[i]}!`);
//     i++;
// }
// 3. Exo 03
//     - Créer un tableau de 6 fruits
//     let fruit = ["Banane", "pomme", "cerise", "fraise", "ananas", "goyave"];
// let stockage = [];
// //     - Avec l'aide d'une boucle while vider le tableau.
//     while (fruit.length> 0){
//         fruit.shift();
//         console.log (`On a retiré ${fruit[0]} du tableau`);
//     }
//     console.log(fruit)
//     - Utilisez fruits.length

// // 4. Exo 04
// //     - Créer un tableau de 4 légumes du nom de 'panierLegumes'

// let panierLegumes = ["Céléri", "radis" , "carotte", "betterave"];

// //     - Stocker la longueur du tableau dans une variable du nom de 'longeur'

// let longueur = panierLegumes.length;
// //     - Vider le tableau panierLegumes pour mettre son contenu dans un second tableau du nom de 'caisseLegumes'

// let caisseLegumes = [];
// while (longueur > 0) {
//     caisseLegumes = caisseLegumes.push(panierLegumes[0].shift());    
//     console.log (`On a retiré ${panierLegumes[0]} du tableau`);
//     longueur = panierLegumes.length;
// }
// console.log(caisseLegumes);


// 5. Exo 05
//     - Préparez une énigme, et faites une boucle WHILE qui va vérifier si l'utilisateur répond correctement à l'énigme via un prompt, tant qu'il se trompe, vous lui reposer la question. S'il a juste, faites une alerte qui le félicite

// let reponse = prompt("Quelle était la couleur du cheval blanc de Napoléon?");

// let veritas = "blanc"

// while (reponse != veritas) {
//     reponse = prompt("Quelle était la couleur du cheval blanc de Napoléon?");
//     if (reponse == veritas) {
//         alert("Bonne réponse!")
//     }
// }
// 6. Exo 06
//     - Re faire l'exo 4 avec DO WHILE

// // 7. Exo 07
// //     - Créer une variable avec l'année actuelle

// var annee = 2021;

// //     - Créer un programme qui génère une année de façon aléatoire entre 1970 et 2018. L’utilisateur doit donner le bon age en répondant à la question suivante
// var anneeRandom = math.round(((48*math.random())+1970));

// //     - : “Si je suis née en 1988(année généré aléatoirement), quel age ai-je aujourd’hui ? ”
// let reponse;
// //     - L’utilisateur a trois essais. S’il donne la bonne réponse, on sort et s’il arrive à trois essaies on sort également.
// var tentatives = 0;
// var veritas = annee - anneeRandom;
// while (tentatives <3) {
//     reponse = +prompt(`Si je suis né en ${anneeRandom}, quel age ai-je aujourd'hui?`);
//     tentatives++;
//     if (reponse == veritas) {
//         console.log("C'est la bonne réponse");
//         break;
//     } else {
//         console.log("Mauvaise réponse");
//     }
// }

//     - Finir avec un affichage.

// // 8. Exo 08
// //     - Demandez a l'utlisateur de remplir un panier de fruit jusqu'a en obtenir 8
// let demande;
// let panier = [];
// while (panier.length<8) {
//  demande = prompt("Balance un fruit");
//  panier.push(demande);
// }
// //     - Quand son panier est rempli montrez lui, puis demandez lui si il désire retirer un fruit
// alert(panier);

// let question = window.confirm("Voulez-vous retirer un fruit?");
// if (question ===  true) {
//     let question2 = prompt("Quel fruit voulez-vous retirer?");
    
//     for (let i =0; i < panier.length;){
//       if (question2 === panier[i]) {
//           panier.splice(panier[i],1);
//           alert("Le fruit a été retiré");
//           break;
//       } else {
//           i++
//       }
          
//     }
//     let question3 = prompt("Quel fruit voulez-vous retirer?");
    
//     for (let i =0; i < panier.length;){
//       if (question3 === panier[i]) {
//           panier.splice(panier[i],1);
//           alert("Le fruit a été retiré");
//           break;
//       } else {
//           i++
//       }
          
//     }
// } else {
//     alert("Bon appétit")
// }



// var continuer = true;
// var retirez;
// if (panier.length =8) {
//     while ( continuer == true){
//     retirez = prompt("Quel fruit voulez-vous retirer?");
//     panier.slice();
//     alert(panier);
//     }
// }
//     - Si il met le nom d'un fruit alors le fruit est retiré, on lui montre son nouveau panier puis on lui repose la question, si il met autre chose que le nom d'un fruit alors on lui dit "Merci bon appetit"
//     - Chaque fruit entré par l'utilisateur doit finir par etre ortographié avec une premiere lettre majuscule et le reste en minuscule 
//     - Lui montrer son panier avec la première lettre en majuscule

// // 8. Exo 08
// //     - Demandez a l'utlisateur de remplir un panier de fruit jusqu'a en obtenir 8
// //     - Quand son panier est rempli montrez lui, puis demandez lui si il désire retirer un fruit

// let demande;
// let panier = [];
// while (panier.length < 8) {
//     demande = prompt("Balance un fruit");
//     panier.push(demande);
// };

// alert(panier);

// let question = window.confirm("Retirer un fruit?");

// //     - Si il met le nom d'un fruit alors le fruit est retiré, on lui montre son nouveau panier puis on lui repose la question, si il met autre chose que le nom d'un fruit alors on lui dit "Merci bon appetit"

// if (question ===  true) {

//     let question2 = prompt("Quel fruit voulez-vous retirer?");

//     for(let i = 0; i < 8; i++){
//         for(let y = 0; y < panier.length; y++){
//             if(question2 === panier[y]){
//                 panier.splice(y, 1);
//                 alert(panier);
//                 question2 = prompt("Retirer un nouveau fruit ?");
//             }
//         }
//     }

//     alert("Merci, bon appétit !");
    
// } else {
//     alert("Merci, bon appétit !")
// }

// for(let z = 0; z < panier.length; z++){
//     panier[z] = panier[z].substring(0,1).toUpperCase() + panier[z].substring(1, panier[z].length).toLowerCase();
    
// }

// alert(panier);



//     - Chaque fruit entré par l'utilisateur doit finir par etre ortographié avec une premiere lettre majuscule et le reste en minuscule 
//     - Lui montrer son panier avec la première lettre en majuscule