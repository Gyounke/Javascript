// 1. Exo 1 
//   - Créez un objet avec vos valeurs
//   - 'Nom', 'prenom', 'age', 'taille'
//   - Affichez votre age via un console.log()
// let ouam = {
//     nom : "Blistein",
//     prenom : "Kevin",
//     age : 28,
//     taile : 184,
// }

// console.log(ouam.age);


// 2. Exo 2 
//   - Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)

// let ouat = {
//     nom : "Dylan",
//     prenom : "Dylan",
//     age : 69,
//     taile : 174,
// }

// let someone = {

// }

// 3. Exo 3
//   - Remplir les propriétées du 3eme personnage
//   - Son nom doit valoir le nom du personnage1
//   - Son age doit valoir celui du personnage2
//   - Et sa taille doit être rempli avec la valeur que vous souhaitez

// someone = Object.assign({nom: ouam.nom}, {age: ouat.age}, {taille: 209});

// console.log(someone);


// 4. Exo 4
//   - Créez un personnage avec un nom un et prenom et donnez lui une méthode 'se Presenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.

// let personnage = {
//     nom: Spider,
//     prenom: Man
// }

// let sePresenter = (nom,prenom) => {
//     console.log(`Bonjour je m'appelle ${nom} ${prenom}`)
// }

// 5. Exo 5
//   - Créer un objet avec un nom et une méthode
//   - La méthode de votre objet lance un prompt permetant de changer son age
//   - Une alert renvoi "[nom de l'objet] a [age de l'objet] ans"


// let personne = {
//     nom:"Saint",
//     méthode: prompt("quel age voulez-vous donner?")
// }

// personne = object.assign(personne, person)



// Suite exos (20/12)
// 1. Exo 1

// ### Créer deux personnages du nom de François et Sergio
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.


// var derober = () => {
//     var vol = perso1.panier.splice(2, 2);
//     perso2.panier.push(vol);
// }

// var perso1 = {
//     nom : "Sergio",
//     panier:["saucisson", "patates", "déo", "chicons","pleurottes"],
// }

// var perso2 = {
//     nom: "François",
//     panier: ["Banane", "mouchoirs", "savon", "baguette", "fromage", "lait", "jus"],
//     derober() {
//         var vol = perso1.panier.splice(2, 2);
//         this.panier = this.panier.push(vol);
//     }
// }

// perso2.derober();


// console.log(perso1,perso2);

// 2. Exo 02 

//    - Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne

let vieilleDame = {
    id : {
        prenom: "Giselle",
        nom:"Sinclair",
    },
    age: 103,
    moral: "mal",
    outils:"parapluie bulgare",
    parler() {
        if (this.moral ==="mal") {
            console.log(`${this.id.prenom} est dérangée et frappe x avec son ${this.outils}`);
        } else if ( this.moral === "bien") {
            console.log(`Bonjour x`);
        }
    }
}
//    - une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors elle dira "bonjour" + le nom du vieil_homme.

//    - Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".

let vieilHomme = {
    nom: "Gérard",
    adoucir() {
        vieilleDame.moral = "bien";
    },
}

vieilleDame.parler();
vieilHomme.adoucir();
vieilleDame.parler();



//    - Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame.

// // Corrections 

// // 1. Exo 1 
// //   - Créez un objet avec vos valeurs
// //   - 'Nom', 'prenom', 'age', 'taille'
// //   - Affichez votre age via un console.log()



// let Akiira = {
//     age: 28,
//     nom: "Aleksic",
//     prenom: "Akiira",
//     taille: 170
// }

// console.log(Akiira.age)


// // 2. Exo 2 
// //   - Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)



// let luffy = {
//     age: 27,
//     nom: "monkey D",
//     prenom: "Luffy",
//     taille: 170
// }

// let inconnu = {}

// // 3. Exo 3
// //   - Remplir les propriétées du 3eme personnage
// //   - Son nom doit valoir le nom du personnage1
// //   - Son age doit valoir celui du personnage2
// //   - Et sa taille doit être rempli avec la valeur que vous souhaitez

// inconnu.nom = Akiira.nom

// inconnu.age = Luffy.age

// inconnu.taille = 190

// console.log(inconnu)

// // 3. Exo 3
// //   - Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.

// let personnage = {
//     nom: "Akiira",
//     prenom: "Aleksic",
//     sePresenter(){
//         console.log(`Bonjour je m'appelle ${this.nom} ${this.prenom}`)
//     }
// }

// personnage.sePresenter()

// 5. Exo 5
//   - Créer un objet avec un nom et une méthode
//   - La méthode de votre objet lance un prompt permetant de changer son age
//   - Une alert renvoi "[nom de l'objet] a [age de l'objet] ans"

// let personne ={
//     nom: "Bobby",
//     alertPersonne: function(){
//         this.age = +prompt("Quelle est son age?");
//         alert(`${this.nom} a ${this.age} ans !`)
//     }
// }

// personne.alertPersonne();
// console.log(personne);