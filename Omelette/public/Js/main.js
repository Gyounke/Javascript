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
        decoupage = (objet) => {
            objet.etat = "Découpés"
        }
        cassage = (objet) => {
            objet.etat = "cassés"
        }
    }
}


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
    constructor(nom) {
        super(nom);
        setTimeout(() => {
            cuisson = (objet) => {
                objet.etat = "cuits"
            }
        }, 4000)
    }
}



// Créer un bol avec un tableau comme contenu
// ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]

class Bol extends Outils {
    constructor(nom){
        super(nom);
        melanger = (nomMelange) => {
            newMelange =[nomMelange, "pas cuit"];
        }
    }
}

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

rayonFrais.forEach(element => 
   panier1.contenu.push(element));

console.log(panier1.contenu);

// Afficher un message à chaque ingrédient pris

// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()

// Afficher un message de ce qu'il reste d'argent sur le personnage.

// rentrer à la maison (comme ça on pourra cuisiner)

// mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)

// Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)

// Afficher un petit message de chaque ingrédient qu'on met dans le bol.

// Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)

// Afficher un petit message

// Retourner à la maison pour continuer l'omelette

// Afficher un petit message

// Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage

// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).

// Afficher un message avec le nouveau mélange

// vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.

// Cuire l'omelette avec la méthode de la poele

// Afficher un message final, notre omelette est cuite :)