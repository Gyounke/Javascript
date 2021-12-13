// // # Exo 1 Switch
// //     - ## Stockez dans une variable, via un prompt, un jour de la semaine.
//     let jourSemaine = prmpt("Donne un jour de la semaine mf")
        // jourSemaine = jourSemaine.toLowerCase();

// //     - ## À l'aide d'un switch, affichez ce que vous avez planifié de faire ce jour-ci. 
// //         - ### Ex:  On est lundi. Tu as cours  à MolenGeek et tu as sport en soirée.
//     switch (jourSemaine) {
//         case "lundi":
//             console.log("On bosse sans wifi");
//             break;
//         case "mardi":
//             console.log("Distanciel maggle");
//             break;
//         case "mercredi":
//             console.log("c'est la mi semaine courache");
//             break;
//         case "jeudi":
//             console.log("c'est jeudredi");
//             break;
//         case "vendredi":
//             console.log("La semaine est fini chill");
//             break;
//         default:
//             console.log("c'est congé");
//             break;
// }

// - # Exo 2 Switch
//     - ## Déclarer une variable qui prendra comme valeur un type de météo

// let meteo = prompt ("Quel temps fait-il?");

// //     - ## À l'aide d'un switch, affichez une réaction appropriée au temps
// //         - ### Ex: Il pleut. Je prend un parapluie
//     switch (meteo) {
//         case "Il pleut" : 
//             alert("Choppe un parapluie");
//             break;
//         case " Il vente":
//             alert("Mets ta petite laine");
//             break;
//         case "Y a du soleil":
//             alert("Oublie pas la crème solaire");
//             break;
//         default:
//             alert("Prends pas de risque");
//             break;
//     }
// // - # Exo 3 Switch
// //     - ### Déclarez une variable dont la valeur sera donnée par l'utilisateur.
//         let chiffreChouette = +prompt("Donne un nombre vite")

//         let chiffreChouetteDiv = chiffreChouette % 2 ;
//         console.log(chiffreChouetteDiv);
// //     - ### Faites un switch, si la variable donnée est divisible par 2, faite une alert qui renvoit "Le nombre est un multiple de 2" sinon "Le nombre n'est pas un multiple de 2" ou encore si l'utilisateur n'a pas rentré un nombre "Ceci n'est pas un nombre"
//         switch (chiffreChouetteDiv) {
//             case 0:
//                 alert("C'est bien divisible par 2");
//                 break;
//             case  1 :
//                 alert("C'est pas divisible par 2");
//                 break;
//             default:
//                 alert("Ceci n'est pas un nombre");
//                 break;
//         }
// // - # Exo 4 Switch
//     - ### Déclarez trois variables que l'utilisateur remplira : nbr1 / operateur(+-/*) / nbr2;
//         let nbre1 = +prompt("Choisit un nombre");
//         let operateur = prompt("Donne un opérateur stout");
//         let nbre2 = + prompt("Choisit un 2e nombre allez zou");

// //     - ###  Faite switch qui en fonction de l'opérateur donné, effectuera le calcul avec cet opérateur et afficher le résultat.
// switch (operateur) {
//     case "+" :
//         alert(nbre1 + nbre2);
//         break;
//     case "-" :
//         alert(nbre1 - nbre2);
//         break;
//         case "*" :
//         alert(nbre1 * nbre2);
//         break;
//         case "/" :
//         alert(nbre1 / nbre2);
//         break;
// }
// //         - ### Ex:nbr1 = 1 | operateur = "+" | nbr2 = 3  => affichera 4