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

// ## EXO5

// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).

class Lieu {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}

// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison

let lieu1 = new Lieu("Molengeek",[]);
let lieu2 = new Lieu("Snack",[]);
let lieu3 = new Lieu("Maison",[]);

// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.

class Personne  {
    constructor(nom, prenom,argent) {
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
        // seDeplacer = (Lieu.nom) => {
        //     Lieu.personnes.splice(this,1);
        //     embarquer();
        //     Lieu.personnes.push();
        // }
    }
}


// ### Puis créez une instance de votre personnage.

let personnage1 = new Personne ("Blistein", "Kevin", 100);

// ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.

class Bus {
    constructor (personnes, caisse) {
        this.personnes = personnes;
        this.caisse = caisse;
        this.embarquer = () => {
            if (personnage1.argent > 2.80) {
                personnage1.argent = personnage1.argent -2.80;
                this.caisse = caisse + 2.80;
                this.personnes.push(personnage1);
            } else {
                console.log("Vous n'avez pas assez d'argent pour payer le transport...")
            }
        }
    }
}

// ### Créez une instance de Bus. 

let bus1 = new Bus ([], 0);

// ### 8h00 Vous êtes à la maison.
lieu3.personnes.push(personnage1);
console.log(lieu3.personnes);

// ### 8h30 Vous prennez le bus vers MolenGeek.
lieu3.personnes.shift();
// bus1.personnes.push(personnage1);

bus1.embarquer(personnage1);
console.log(bus1.personnes);

// personnage1.seDeplacer

// ### 8h45 Vous êtes à MolenGeek.

lieu1.personnes.push(personnage1);
console.log(lieu1.personnes);

// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.

lieu1.personnes.shift();
bus1.embarquer(personnage1);
console.log(bus1.personnes);

bus1.personnes.shift();
lieu2.personnes.push(personnage1);

// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.

lieu2.personnes.shift();
lieu1.personnes.push(personnage1);

// ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.

lieu1.personnes.shift();
bus1.embarquer();
lieu3.personnes.push(personnage1);

// ### Faites un console.log() de votre argent, ainsi que l'argent du Bus

console.log(personnage1.argent, bus1.caisse);