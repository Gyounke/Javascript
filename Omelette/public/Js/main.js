/** Créer un objet/classe personne. Cette personne doit avoir des propriétés et des méthodes : 
* - nom(string)
* - lieu(string)
* - argent(number)
* - mainDroite(tableau)
* ( du coup main gauche(tableau))
* - seDeplacer(lieu)
* - payerArticle(article) 
* - couper(ingredient, outil)
*/

class Personne {
    constructor(nom, lieu, argent, mainDroite, mainGauche,) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
        this.seDeplacer = (arrivee) => {
            this.lieu = arrivee
        }
        this.payerArticle = (objet) => {
            this.argent = this.argent - objet.prix;
        }
        this.prendre = (objet,main) => {
            if (main == "main droite") {
                this.mainDroite.push(objet);
                carrefourExpress.paniers.splice(carrefourExpress.paniers.indexOf(objet), 1);
            } else if (main == "main gauche") {
                this.mainGauche.push(objet);
                rayonFrais.splice(carrefourExpress.paniers.indexOf(objet), 1);
            }
        }
    }
}

let bgDu1030 = new Personne("Leukah", "Maison", 120, [], []);

/**
* Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :
// Créer un lieu "epicerie" qui a comme propriétés :
// nom, personnes = [], paniers (un tableau d'objets "panier" avec une propriété "type" égal à panier et le contenu du panier, égal à un tableau vide),
*/

class Lieux {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}

class Epicerie extends Lieux {
    constructor(nom, personnes) {
        super(nom, personnes);
        this.paniers = []
    }
}



let maison = new Lieux("Maison", []);
let carrefourExpress = new Epicerie("Carrefour Express", []);

let panier1 = {
    nom: "Panier 1",
    contenu : [],
}

carrefourExpress.paniers.push(panier1);

let panier2 = {
    nom: "Panier 2",
    contenu : [],
}

carrefourExpress.paniers.push(panier2);

let panier3 = {
    nom: "Panier 3",
    contenu : [],
}

carrefourExpress.paniers.push(panier3);

/**
* Créer un outil(classe avec couteau comme instance) (couteau) pour découper les ingrédients achetés
* propriétés : nom et action.
* action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode de "personne".)
*/

class Outils {
    constructor(nom) {
        this.nom = nom;
        this.decoupage = (objet) => {
            objet.etat = "Découpés"
        }
    }
}

let couteau = new Outils ("Alonzo");

/**
 * Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
 * propriétés : nom, etats ( entier,coupé, moulu), prix
 */

let rayonFrais = [];

class Produits {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
        this.miseEnRayon = (objet) => {
            rayonFrais.push(objet);
        }
    }
}

let oignons = new Produits("oignons", "entier", 2);
let oeufs = new Produits("oeufs", "entier", 1);
let sel = new Produits("sel", "moulu", 0.5);
let poivre = new Produits("poivre", "moulu", 0.5);
let fromage = new Produits("fromage", "entier", 3.5);

// Les "ingrédients" créés juste au dessus contenus dans un tableau.

oignons.miseEnRayon(oignons);
oeufs.miseEnRayon(oeufs);
sel.miseEnRayon(sel);
poivre.miseEnRayon(poivre);
fromage.miseEnRayon(fromage);

// console.log(rayonFrais);

/**
 * Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
 */

class Poele extends Outils {
    constructor(nom, contenu) {
        super(nom);
        this.contenu = contenu;
        this.cuisson = (objet) => {
                objet.etat = "cuite"
            }
    }
}

let marcelle = new Poele("Marcelle", []);


// Créer un bol avec un tableau comme contenu
// ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]

let omelette = {
    nom :"omelette",
    etat : "crue",
}

class Bol extends Outils {
    constructor(nom, contenu){
        super(nom);
        this.contenu = contenu;
        this.ajouter = (objet) => {
            this.contenu.push(objet);
            panier1.contenu.splice(panier1.contenu.indexOf(objet), 1);
            // newMelange =[nomMelange, "pas cuit"];
        }
        this.melanger = () => {
            this.contenu = [omelette];            
        }
    }
}

let bolinette = new Bol("C'est un petit bol", []);

// let panier1 = {
//     nom: "Panier 1",
//     contenu : [],
// }


/**** DEBUT DE L'OMELETTE ****/

// Pour dire que le personnage est à la maison :

maison.personnes.push(bgDu1030.nom);

// Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison
// Afficher un message tel que :

bgDu1030.seDeplacer(carrefourExpress.nom);

// console.log(personnage.nom + " est actuellement à la " + personnage.lieu);

console.log(`${bgDu1030.nom} est actuellement au ${bgDu1030.lieu}`);

// Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie

// Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.)
// Il doit y avoir un objet dans la main droite de personnage et un panier en moins. Vérifier avec des console.log() ensuite afficher un message du type :

// console.log(`${personnage.nom} a pris un ${type du panier}`);

bgDu1030.prendre(carrefourExpress.paniers[0],"main droite");
console.log(`${bgDu1030.nom} tient dans sa main droite :`);
console.log (bgDu1030.mainDroite);
console.log(carrefourExpress.paniers);



// Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire une COPIE dans le panier du personnage
// Afficher un message à chaque ingrédient pris

rayonFrais.forEach(function (element) {
   panier1.contenu.push(element);
   console.log(`${element.nom} a été ajouté au panier`);
}, );

console.log(panier1.contenu);


// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()

panier1.contenu.forEach(function (element) {
    bgDu1030.argent -= element.prix
    console.log(`${element.nom} a été payé`);
 }, );

// Afficher un message de ce qu'il reste d'argent sur le personnage.

console.log(`Il reste ${bgDu1030.argent} Euros à ${bgDu1030.nom}.`);

// rentrer à la maison (comme ça on pourra cuisiner)

bgDu1030.seDeplacer(maison.nom);

console.log(`${bgDu1030.nom} est arrivé à la ${bgDu1030.lieu}`)

// mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)

// Afficher un petit message de chaque ingrédient qu'on met dans le bol.

 for (i = 0; i < panier1.contenu.length; i++) {
    console.log(`${panier1.contenu[i].nom} a été ajouté à une bolinette ${bolinette.nom}`);
    bolinette.ajouter(panier1.contenu[i]);
    i = i-1;
 }


// Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x))

console.log(panier1.contenu);


// Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)
// Afficher un petit message

bgDu1030.seDeplacer(carrefourExpress.nom);
carrefourExpress.paniers.push(panier1);
bgDu1030.mainDroite.splice(0,1);
console.log(`${bgDu1030.nom} tient dans sa main droite :`);
console.log (bgDu1030.mainDroite);
console.log(carrefourExpress.paniers);


// Retourner à la maison pour continuer l'omelette

bgDu1030.seDeplacer(maison.nom);

// Afficher un petit message

console.log(`${bgDu1030.nom} est actuellement à la ${bgDu1030.lieu}`);

// Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage

console.log(bolinette.contenu);

for (i = 0; i < bolinette.contenu.length; i++ ) {
    if (bolinette.contenu[i].etat == "entier") {
        couteau.decoupage(bolinette.contenu[i]);
        console.log(`${bolinette.contenu[i].nom} a été découpé`);
    } else {
        console.log(`Cet aliment est conforme aux règles prescrites par la traditionnelle recette de l'omelette.`);
    }
}


// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).

bolinette.melanger();

// Afficher un message avec le nouveau mélange
console.log("La bolinette contient :");
console.log(bolinette.contenu);

// vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.

// marcelle.contenu.push(bolinette.contenu[0]);
// bolinette.contenu.splice(0,1);

marcelle.contenu = bolinette.contenu.splice(0,1);
console.log(marcelle.contenu);
console.log(bolinette.contenu);

// Cuire l'omelette avec la méthode de la poele


setTimeout(() => {marcelle.cuisson(omelette);
    console.log(marcelle.contenu); }, 4000);

// Afficher un message final, notre omelette est cuite :)

console.log(`J'ai le privilège et l'honneur de vous annonce que malgré les épreuves, les doutes et même la rage, notre omelette est finalement cuite. j'espère qu'elle sera bonne :$`)

