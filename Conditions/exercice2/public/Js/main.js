
// // 1. Les réponses boléenes part 1

// let nombre1 = +prompt("File un nombre");
// let nombre2 = +prompt("File en un deuxième");

// // // alert("Le nombre" + nombre1 + "et le nombre" + nombre2 + "sont-ils égaux ?")
// // // 
// let nombre1 = +prompt ("Donne un premier nombre");
// let nombre2 = +prompt("Donne un deuxième nombre");

// if (nombre1 === nombre2) {
//         console.log(" Les deux nombres sont égaux");
// } else {
//         console.log(" Les deux nombres ne sont pas égaux")
// }
// // // 2. Les réponses boléenes part 2

// let nombre3 = +prompt("File un nombre");
// let nombre4 = +prompt("File en un deuxième");

// // // alert("Le nombre" + nombre3 + "es-il plus petit que le nombre" + nombre4 + "?");

// if (nombre3 < nombre4) {
//         console.log(" Le Nombre 3 est plus petit que le nombre 4");
// } else {
//         console.log("Bah c'est l'inverse");
// }


// // // 3. Les réponses boléenes part 3

// let nombre5 = +prompt("File un nombre");
// let nombre6 = +prompt("File en un deuxième");
// let nombre7 = +prompt("File en un troisième pose pas de question");

// let add = nombre5+nombre6

// // // alert("La somme du nombre" + nombre5+ "et du "+ nombre6 + "est-elle plus grande que le nombre" +nombre7+ "? :");

// if ( add < nombre7) {
//         console.log("La somme des deux nombres est inférieure à l'autre")
// } else {
//         console.log("c'est le contraire");
// }

// // 4.
// // Créer un programme qui récupère la phrase de l'utilisateur,l'utilisateur doit également pouvoir estimer le
// //nombre de caractères compris dans la phrase, ensuit retourne a l'utilisateur si oui ou non son estimation
// //était correct si ce n'était pas correct annonce lui que sa réponse est fausse et à combien d'unitéx il était
// //éloignée de la vrai réponse, exemple si la chaine de caractères fait 100 caractères et que l'utilisateur
// //répond 85 alors renvoyez lui "Incorrect tu étais à 15 unités de la bonne réponse !"

// let phrase = prompt("Balance ta meilleure punchline frr j'suis pas ta mère");
// let estimation = +prompt(" Elle fait combien de caractères ta phrase tu penses?");
// let erreur = Math.abs(estimation-phrase.length);

// if (phrase.length === estimation) {
//         console.log(" bien joué");
// } else {
//         console.log("Tu t'es trmopé de" + erreur + "unités");
// }

// // 5.
// Créer un programme ou tu vérifies que l'utilisateur à bien rentrer son prénom dans le prompt</li>
//         Si l'utilisateur ne rentre rien alors renvoyez un prompt avec comme texte "Attention vous devez remplir le
//           champs ci-dessous, Quel est votre prénom ?
//         Sinon, Bonjour, prénom 
//         A savoir ! Il est normal que la question n'est reposé qu'une seule fois

// let prenom = prompt("Quel est ton prénom?");

// if (prenom.length<1) {
//     let prenom2 = prompt("T'as rien rentré boloss... allez mets ton nom j'te dis")
// }

// 6.
{/* Trouver une méthode qui permet de répondre par l'affirmative et la negative</li>
    Lancer cette méthode en proposant à l'utilisateur de s'abonner</li>
        Si l'utilisateur confirme alors renvoyez lui un prompt pour lui demander quelle formule elle veut prendre
          Luxe ou Normal, selon ce qu'elle répond renvoyer une alert pour la féliciter de s'etre abonné</li>
        Si c'est Luxe renvoyez lui : Félicitation vous avez choisis la formule Luxe !</li>
        Si c'est normal renvoyez lui : Merci pour votre abonnement.</li>
        <li>Si l'utilisateur ne répond rien demandez lui si elle est certaine avec la meme methode que vous avez trouvé
          par l'affirmative ou la negative</li>
        <li>Si Elle répond par l'affirmation alors dite lui que c'est dommage et souhaiter lui une bonne journée</li>
        <li>Si elle répond par la négative reproposez lui de choisir entre les formules Luxe ou Normal</li> */}

// var rep1 = prompt("Tu veux prendre mon abonnement deluxe ou normal gros?");

// if (rep1 == "deluxe") {
//     alert(" Yes, bien ouej , vive l'extorsion stou")
// } else if (rep1 == "normal") {
//     alert("T'serais pas un peu radin des fois?")
// } else {
//         var rep3 = prompt("T'es sûr tu veux pas un ptit qqch genre normal ou deluxe? c'est oui ou c'est non?")
//         } 

// if (rep3 == "oui") {
//     alert( "c bon casse-toi");
// } else {
//     var rep4 = prompt("Un ptit deluxe ou un normal?")
// }

// if (rep4 = "deluxe"){
//     alert(" bien çaaa");
// } else if ( rep4 == "normal") {
//     alert("dommage mais alz");
// } else {
//     alert(" vazy tu crains");
// }

// 7.
// Dans cet exercice il faudra préparer un mini quizz</li>
//         Créer 2 variables contenant chacun un prompt posant une questions</li>
//         Créer 2 variables contenant la réponses a chacune de ces questions</li>
//         Si l'utilisateur ne répond a aucune réponse de manière correct alors affichez une alert pour lui dire qu'il
//           à échoué
//         Si l'utilisateur répond correctement à une des deux questions alors dit lui qu'il y est presque et renvoyez
//           lui comme information a quel question il a eu tord</li>
//         Si l'utilisateur répond correctement à toutes les questions, félicitez le

// var question1 = prompt("Quel était la couleur du célèbre cheval blanc de Napoléon?");
// var question2 = prompt("Qu'est-ce qui est jaune et qui attend?");

// var answer1 = "blanc";
// var answer2 = "Jonathan";

// if ((question1 === answer1) && (question2 === answer2)) {
//     alert("Bien joué, t'es le S"); 
// } else if ((question1 === answer1)  && (question2 != answer2)) {
//     alert("moyen, tu t'es gouré sur la question 2");
// } else if ((question1 != answer1)  && (question2 == answer2)) {
//     alert("moyen, tu t'es gouré sur la question 1");
// } else {
//     alert("M'enfin c'est pas possible d'être aussi nul!!");
// }

// 8. Conditions sur les nombres
//         Lancez un prompt pour qu'un utilisateur entre son age (pour une réservation au cinéma). Suivant l'age entré,
//           vous devez afficher une alerte (une seule) avec un des messages suivant :</p>
//         Si la personne est majeur (18 ou plus) => affiche "vous êtes majeur, vous pouvez réserver"</li>
//         Si la personne est mineur (moins que 18) => "vous êtes mineur, l’accès est réservé aux grands"</li>
//         Ajoutons quelques conditions supplémentaires :</p>
//         Si la personne n'est pas née (moins de 0) => "vous n’êtes même pas nés, n’essayez pas de tricher"</li>
//         Si la personne est trop vieille (plus de 100) => "vous êtes encore vivant ? Évitez de voir ce film pour le
//           rester."
//         Si la personne passe tout juste (pile 18) => "pouvez rentrer mais c’est tout juste, n'oubliez pas que ce
//           film peut être choquant."
//         
//           <i class="astuce">L'ordre de ces conditions a de l'importance, il faut mettre les plus sensées d'abord. (si on
//             vérifie < 18 puis < 0, on ne rentrera jamais dans la deuxième condition avec un else if ...)</i> <br>
//         
//         <p><strong>Avancé :</strong></p>
//         <li>Même chose sauf que l'utilisateur entre son année de naissance. Votre calcul pour obtenir l'age doit être
//           fait en fonction de l'année actuelle (qui change chaque année).</li>

// var age = +prompt("Quel age avez-vous?")

// if ( age < 1 ){
//     alert("vous n’êtes même pas nés, n’essayez pas de triche");
// } else if ( age < 18 ) {
//     alert("vous êtes mineur, l’accès est réservé aux grand");
// } else if ( age == 18 ) {
//     alert("pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant.");
// } else if ((age > 18) && (age< 100)) {
//     alert("vous êtes majeur, vous pouvez réserver");
// } else if ( age >= 100 ) {
//     alert("vous êtes encore vivant ? Évitez de voir ce film pour le rester.");
// }

// 9.
// Opérateurs Logique</h3>
// Vous allez lancer plusieurs prompt et les stocker dans différentes variables. Puis faire des vérifications
// plus poussées et afficher une alerte avec les phrases mentionnées plus loin.</p>
// Lancer 3 prompts pour demander:
//
//               "est-ce que vous êtes riche ?"
//               "voulez-vous partir en vacance ?"          
//               "est-ce que vous avez un chat ?"
//          
//         Les 3 valeurs doivent être stockées dans 3 variables sachant que si on répond "oui" c'est considéré comme
//           positif. (Stocker true/false dans les variables est une bonne façon de réaliser cet exercice.) </li>
//         !!Attention!! les points suivant ne doivent pas être fait en même temps.</i></p>
//         si la personne ne veut pas partir en vacance => affichez "pas de problème, ne partez pas en vacance"
//           (utilisez l'opérateur "!")
//         Si la personne n'est pas riche ou qu'elle a un chat => "Même si vous le voulez, vous ne pouvez pas partir."
//           (utiliser l'opérateur "!" ainsi que l'opérateur "||")
//         Si la personne est riche et n'a pas de chat => "Vous pourriez partir en vacance si vous le voulez" (utiliser
//           "&&" et "!")
//         Si la personne est riche et n'a pas de chat et veut partir en vacance => "Tout est parfait, partez en
//           vacance !" (utilisez "&&" et "!")
//         Même chose que le point précédent, mais seulement avec "||" et "!" <br><i class="astuce">Si la personne
//             n'est pas riche ou qu'elle a un chat ou qu'elle ne veut pas partir, et que <strong>tout ce qu'elle dit est
//               faux...</strong> (n'oubliez pas d'utiliser des parenthèses)

var question1 = prompt("est-ce que vous êtes riche ?");
var question2 = prompt("voulez-vous partir en vacance ?");
var question3 = prompt ("est-ce que vous avez un chat ?");


 if (question2 == false) {
     alert("pas de problème, ne partez pas en vacance");
}  else if ((question1 == false) && (question3 == false)) {
            alert("Vous pourriez partir en vacance si vous le voulez");
} else if ((question1 == true) && (question3 == false)) {
            alert("Tout est parfait, partez en vacance !");
} else if ((question1 == false) || (question3 == true)){
        alert("Même si vous le voulez, vous ne pouvez pas partir.");
} else {
        alert("Tu pipoterais pas un peu toi?");
}     
