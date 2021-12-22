// 1. EXO1
//   - Traduire le code suivant en class et en instances

// lieux
// ### let maison = {
// ###   nom: "maison",
// ###   contenu: [],
// ### };
// ### let epicerie = {
// ###   nom: "epicerie",
// ###   contenu: [],
// ###   ingredients: [],
// ### };
// ### let cuisine = {
// ###   nom: "cuisine",
// ###   contenu: [],
// ###   ingredients: [],
// ### };

// class Lieux {
//     constructor (nom, contenu, ingredients) {
//         this.nom = nom; this.contenu = contenu;
//         this.contenu = contenu;
//         this.ingredients = ingredients;
//     }
// }

// let maison = new Lieux ("maison",[]);
// let epicerie = new Lieux ("epicerie",[],[]);
// let cuisine = new Lieux ("cuisine",[],[]);

// console.log(maison,epicerie,cuisine);

// // ingredients
// ### let poivron = {
// ###   nom: 'poivron',
// ###   etat: 'entier',
// ###   prix:  1 ,
// ###  };
// ###  let oignon = {
// ###   nom: 'oignon',
// ###   etat: 'entier',
// ###   prix:  2 ,
// ###  };
// ###  let oeuf = {
// ###   nom: 'oeuf',
// ###   etat: 'entier',
// ###   prix:  4 ,
// ###  };
// ###  let epice = {
// ###   nom: 'epice',
// ###   etat: 'moulu',
// ###   prix:  3.25 ,
// ###  };
// ###  let paprika = {
// ###   nom: 'paprika',
// ###   etat: 'moulu',
// ###   prix:  1.5 ,
// ###  };
// ###  let fromage = {
// ###   nom: 'fromage',
// ###   etat: 'coupé',
// ###   prix:  1.6 ,
// ###  };

// class Ingredients {
//     constructor(nom,etat,prix) {
//         this.nom = nom;
//         this.etat = etat;
//         this.prix = prix;
//     }
// }

// let poivron = new Ingredients("poivron", "entier",1);
// let oignon = new Ingredients ("oignon", "entier", 2);
// let oeuf = new Ingredients ("oeuf", "entier", 4);
// let epice = new Ingredients ("epice", "moulu", 3.25);
// let paprika = new Ingredients ("paprika", "moulu", 1.5);
// let fromage = new Ingredients ("fromage", "coupé", 1.6);

// console.log(poivron,oignon,oeuf,epice,paprika,fromage);

// // Personne
// ### let personnage = {
// ###  nom: "Maxime",
// ###  lieu: "néant",
// ###  argent: 100,
// ###  panier: [],
// ###  se_deplacer(x){
// ###  },

// ###  payer(x){
// ###  },
// ###  couper(x,y){
// ###  }
// ### }

// class Personne {
//     constructor (nom,lieu,argent,panier)
// }

// 2. EXO02
//   - Créer une class Personnage avec comme propriétés : 
//   - age , nom , ville
//   - Faire 2 instances de cette class.

// class Personnage {
//     constructor (age, nom, ville) {
//         this.age = age;
//         this.nom = nom;
//         this.ville = ville;
//         this.sePresenter = () => {
//             console.log(`Bonjour, je m'appelle ${this.nom}!`);
//         }
//     }
// }

// let perso1 = new Personnage(25, "Lilien", "Bruxelles");
// let perso2 = new Personnage(34,"Titien","Liège");

// console.log(perso1,perso2);

// perso1.sePresenter();
// perso2.sePresenter();



// 3. EXO03
//   - Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
//   - Lancer cette méthode sur les deux instances de l'exo1

// 4. Exo04
//    - Créer une class Objet
//      - _Propriétés : nom, prix

// class Objet {
//     constructor (nom, prix) {
//         this.nom = nom;
//         this.prix = prix;
//     }
// }

// let bidule1 = new Objet ("Vase", 250);
// let bidule2 = new Objet("Lampe", 110);

// console.log(bidule1,bidule2);

//    - Créer deux instances d'objets avec un nom et un prix
//    - Créer une boite (tableau) et mettre les deux objets dedans.

// let boite = [];
// boite.push(bidule1);
// boite.push(bidule2);

// console.log(boite);

//    - Créer une class Personnage
//     - _Propriétés : nom(string), sac(tableau), argent(number)
//     - _Méthode : prendre(objet)
//     - _Méthode : acheter(vendeur, objet)

// class Personnage {
//     constructor (nom, sac, argent) {
//         this.nom = nom;
//         this.sac = sac;
//         this.argent = argent;
//         prendre = (objet) => {
//             this.sac = this.sac.push(boite[0]);
//         }
//         acheter = (vendeur, objet) => {
//             console.log(`${vendeur} a vendu ${objet}`);
//         }
//     }
// }

// - Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// - Ensuite faites acheter à l'un des deux, l'objet de l'autre.

// let perso1 = new Personnage("Jacques", ["brosse", "couteau"," essui"], 120);
// let perso2 = new Personnage("John", ["Loupe", "sac de couchage", "petite laine"], 105);

// // ## EXO5

// // ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).

// class Lieu {
//     constructor(nom, personnes) {
//         this.nom = nom;
//         this.personnes = personnes;
//     }
// }

// // ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison

// let lieu1 = new Lieu("Molengeek",[]);
// let lieu2 = new Lieu("Snack",[]);
// let lieu3 = new Lieu("Maison",[]);

// // ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.

// class Personne  {
//     constructor(nom, prenom,argent) {
//         this.nom = nom;
//         this.prenom = prenom;
//         this.argent = argent;
//         seDeplacer = (depart,arrivee,transport) => {
//             arrivee.personnes.push(this);
//             depart.personnes.splice(depart.personnes.indexOf(this), 1);
//         }
//     }
// }


// // ### Puis créez une instance de votre personnage.

// let personnage1 = new Personne ("Blistein", "Kevin", 100);

// // ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.

// class Bus {
//     constructor (personnes, caisse) {
//         this.personnes = personnes;
//         this.caisse = caisse;
//         this.embarquer = () => {
//             if (personnage1.argent > 2.80) {
//                 personnage1.argent = personnage1.argent -2.80;
//                 this.caisse = this.caisse + 2.80;
//                 this.personnes.push(personnage1);
//             } else {
//                 console.log("Vous n'avez pas assez d'argent pour payer le transport...")
//             }
//         }
//     }
// }

// // ### Créez une instance de Bus. 

// let bus1 = new Bus ([], 0);

// // ### 8h00 Vous êtes à la maison.
// lieu3.personnes.push(personnage1);
// console.log(lieu3.personnes);

// // ### 8h30 Vous prennez le bus vers MolenGeek.
// lieu3.personnes.shift();
// // bus1.personnes.push(personnage1);

// bus1.embarquer(personnage1);
// console.log(bus1.personnes);

// // personnage1.seDeplacer

// // ### 8h45 Vous êtes à MolenGeek.

// lieu1.personnes.push(personnage1);
// console.log(`${personnage1.nom} se trouve à ${lieu1.nom} avec ${personnage1.argent}`);


// // ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.

// lieu1.personnes.shift();
// bus1.embarquer(personnage1);
// console.log(`${personnage1.nom} se trouve dans le bus avec ${personnage1.argent}`);

// bus1.personnes.shift();
// lieu2.personnes.push(personnage1);
// console.log(`${personnage1.nom} se trouve à ${lieu2.nom} avec ${personnage1.argent}`);

// // ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.

// lieu2.personnes.shift();
// lieu1.personnes.push(personnage1);
// console.log(`${personnage1.nom} se trouve à ${lieu1.nom} avec ${personnage1.argent}`);

// // ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.

// lieu1.personnes.shift();
// bus1.embarquer();
// lieu3.personnes.push(personnage1);
// console.log(`${personnage1.nom} se trouve à ${lieu3.nom} avec ${personnage1.argent}`);

// // ### Faites un console.log() de votre argent, ainsi que l'argent du Bus

// console.log(personnage1.argent, bus1.caisse);


// // EXO5 Correction Elias

// // Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// class Lieu {
//     constructor(nom, personnes) {
//         this.nom = nom;
//         this.personnes = personnes;
//     }
// }

// // Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
// let molengeek = new Lieu("MolenGeek", []);
// let snack = new Lieu("Snack", []);
// let maison = new Lieu("Maison", []);

// // Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
// class Personne {
//     constructor(nom, prenom, argent) {
//         this.nom = nom;
//         this.prenom = prenom;
//         this.argent = argent;
//         this.seDeplacer = (depart, arrivee, transport) => {
//             depart.personnes.splice(depart.personnes.indexOf(this), 1);
//             if (transport !== "pied") {
//                 transport.embarquer(this)
//             } else {
//                 console.log(`${this.prenom} va aller à pied`);
//             }
//             arrivee.personnes.push(this);
//             console.log(`${this.prenom} est actuellement à ${arrivee.nom}`);
//         }
//     }
// }

// // Puis créez une instance de votre personnage.
// let elias = new Personne("Aboutaharan", "Elias", 100);
// let michael = new Personne("Test", "Michael", 100)

// // Créez une class [Transport] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.
// class Transport {
//     constructor(personnes, caisse) {
//         this.personnes = personnes;
//         this.caisse = caisse;
//         this.embarquer = (x) => {
//             if (x.argent >= 2.80) {
//                 x.argent -= 2.80;
//                 x.argent = Number(x.argent.toFixed(2))
//                 this.caisse += 2.80;
//                 this.caisse = Number(this.caisse.toFixed(2));
//                 this.personnes.push(x)
//                 console.log(`${x.prenom} est dans le bus`);
//                 console.log(`${x.prenom} vient de descendre du bus`);
//                 this.personnes.splice(this.personnes.indexOf(x), 1);
//             } else {
//                 console.log(`${x.prenom} n'a pas assez d'argent pour payer le bus`);
//                 console.log(`${x.prenom} va continuer à pied`);
//             }
//         }
//     }
// }

// // Créez une instance de Transport (Bus). 
// let bus = new Transport([], 0);

// // 8h00 Vous êtes à la maison.
// maison.personnes.push(elias)
// console.log(`${elias.prenom} est actuellement à la ${maison.nom}`);


// // 8h30 Vous prennez le bus vers MolenGeek.
// elias.seDeplacer(maison, molengeek, bus);
// // 8h45 Vous êtes à MolenGeek.
// // 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
// elias.seDeplacer(molengeek, snack, bus);
// // 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
// elias.seDeplacer(snack, molengeek, "pied")
// // 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.
// elias.seDeplacer(molengeek, maison, bus)
// // Faites un console.log() de votre argent, ainsi que l'argent du Bus
// console.log(bus.caisse);


// // Exo 6
// // - Vous allez créer une class Personne qui aura besoin d'un nom, prenom, age, argent, panier et d'une methode prendre
// // - Dans la classe personne, vous allez créer une méthode acheter qui va faire passer tous les éléments de votre sac en acheté true et vous allez retirer l'argent de que vous avez par rapport au prix du produit
// // - Tous les éléments qui se trouvent dans le panier vont aller dans l'armoire grâce à une méthode deposer() qui va se trouver dans la personne

// class Personne {
//     constructor (nom, prenom, age, argent, panier) {
//         this.nom = nom;
//         this.prenom = prenom;
//         this.age = age;
//         this.argent = argent;
//         this.panier = panier;
//         this.prendre = (objet) => {
//             this.panier.push(objet);          
//         }
//         this.buy = (objet) => {
//             this.panier.push(objet);
//             this.argent = this.argent - objet.prix;  
//            objet.achete = true;                          
//         }
//         this.deposer = () => {
//             chambre.personnes.push(this.nom);
//             let achats =this.panier.splice(0,this.panier.length);
//             chambre.armoire.push(achats);
//         }
//     }
// }

// // - Vous allez créer une class Produit dans laquelle il y a un nom, un prix et une taille (XS, S, M, L, XL)
// // - Vous allez ajouter une propriété dans le produits appelé acheté qui sera false
// // - Dans la classe personne, vous allez créer une méthode acheter qui va faire passer tous les éléments de votre sac en acheté true et vous allez retirer l'argent de que vous avez par rapport au prix du produit

// class Produit {
//     constructor (nom, prix, taille, achete) {
//         this.nom = nom;
//         this.prix = prix;
//         this.taille = taille;
//         this.achete = achete;
//     }
// }

// // - Vous allez créer 3 instances de Personne et 5 instance de Produit

// let dylan = new Personne("Bob", "Dylan", 27, 120,[]);
// let fernand = new Personne("Pelot", "Fernand", 35, 180,[]);
// let ursule = new Personne("Lapointe", "Ursule", 12, 520,[]);

// let short = new Produit("Short", 40, "L",false);
// let chemise = new Produit("Chemise", 35, "M", false);
// let chapeau = new Produit("Chapeau", 25, "XS", false);
// let pull = new Produit("Pull", 40, "L", false);
// let pantalon = new Produit("Pantalon", 45, "M", false);



// // - Vous allez créer une classe appelé Appartement avec un nom, une armoire (tableau vide), et personnes (tableau vide)

// class Appartement {
//     constructor (nom, armoire, personnes) {
//         this.nom = nom;
//         this.armoire = armoire;
//         this.personnes = personnes
//     }
// }

// // - Vous allez créer une instance d'Appartement appelé chambre et vous allez push la parsonne à l'interieur de la chambre

// let chambre = new Appartement("Chambre", [], []);

// // - Avez la méthode prendre, vous allez mettre les produits dans votre sac

// dylan.buy(short);
// console.log(dylan);

// dylan.deposer();
// console.log(chambre);
// console.log (dylan.panier);

// # Exercice bonus: Combat Pokemon

// ## mise en place:

// ### Dans ce exo, tu vas devoir mettre en place une Class Pokemon dans laquelle on retrouvera un nom sous forme de String, un niveau allant de 1 à 99 sous forme d'un Integer, des points de vie sous forme d'un Integer, une vitesse aussi sous forme d'un Integer ainsi qu'un tableau de type avec un maximum de 2 types par Pokemon

class Pokemon {
    constructor (nom, niveau, pdv,vitesse,type) {
        this.nom = nom;
        this.niveau = niveau;
        this.pdv = pdv;
        this.vitesse = vitesse;
        this.type = type;
    } 
}

// #### (Pour voir les différents types de Pokemon, tu peux consulter cette page : https://boutique-pokemon.com/blogs/blog-pokemon/table-types-pokemon )

// ## Combat:

// ### Tu devras ensuite extends cette Class afin de créer une Class par Pokemon. Cette Class devra contenir des méthodes pour permettre au Pokemon d'effectuer différentes actions ex: une Class Pikachu avec les méthodes fatal_foudre, queue_de_fer, charge et quick_attack

class jungko extends Pokemon {
    super(nom, niveau, pdv,vitesse,type);
    lameFeuille = (cible) => {
        cible.pdv = cible.pdv - 23;
        alert (`il reste ${cible.pdv} pdv à ${cible.nom}`);
    }
    souplesse = (cible) => {cible.pdv = cible.pdv - 33;
    alert (`il reste ${cible.pdv} pdv à ${cible.nom}`);
    }
    tempeteVerte = (cible) => {
        cible.pdv = cible.pdv - 63;
        alert (`il reste ${cible.pdv} pdv à ${cible.nom}`);
    }
}

class aligatueur extends Pokemon {
    super(nom, niveau, pdv, vitesse, type);
    tranche = (cible) => {
        cible.pdv = cible.pdv - 38;
        alert (`il reste ${cible.pdv} pdv à ${cible.nom}`);
    }
    grimace = (cible) => {cible.pdv = cible.pdv - 28;
    alert (`il reste ${cible.pdv} pdv à ${cible.nom}`);
    }
    hydrocanon = (cible) => {
        cible.pdv = cible.pdv - 58;
        alert (`il reste ${cible.pdv} pdv à ${cible.nom}`);
    }
}

let bobby = new jungko ("Bobby", 40, 200, 150, "Plante");
let franklin = new aligatueur ("Franklin", 42, 205, 110, "Eau");

// ### Pour cette partie , tu vas devoir mettre en place une fonction qui va gérer le combat. Cette fonction prendra en charge deux paramètres: Le Pokemon que tu contrôleras et le Pokemon ennemi. Il faudra à l'aide de prompt demander à l'utilisateur quelle action il voudra exécuter. Ensuite, il faudra laisser l'ennemi exécuter une action et ce ainsi de suite jusqu'à ce que l'un des deux Pokemons tombe KO. N'oublie pas qu'une propriété de vitesse a été mise en place, cela determinera quel Pokemon attaquera en premier.

let combat = () => {
    let choix = prompt(`Choisissez un pokémon entre ${}`)
}

// ## BONUS : 

// ### Si tu es assez chaud, grâce au tableau de faiblesses que je t'ai fourni ci-dessus tu peux gérer les faiblesses. Ainsi un Pokemon eau subissant une attaque de type éléctrique se verra ramasser le double de dégats,etc ...

// ## BONUS II: 

// ### Si tu es encore plus chaud, tu peux rajouter une propriété défense dans la Class Pokemon afin d'avoir un vrai calcul de dégats ...

// ## N'oublie pas tes IMPORTS/EXPORTS

// ## COURAGE ET SI TU AS DES QUESTIONS J'Y REPONDRAIS (PAS)