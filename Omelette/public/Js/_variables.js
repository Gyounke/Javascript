
import { Personne, Lieux, Epicerie, Outils, Produits, Poele, Bol}  from "./_class.js";

let maison = new Lieux("Maison", []);

let bgDu1030 = new Personne("Leukah", "Maison", 120, [], []);

let carrefourExpress = new Epicerie("Carrefour Express", []);

let panier1 = {
    nom: "Panier 1",
    contenu : [],
}

let panier2 = {
    nom: "Panier 2",
    contenu : [],
}

let panier3 = {
    nom: "Panier 3",
    contenu : [],
}

let couteau = new Outils ("Alonzo");

let rayonFrais = [];

let oignons = new Produits("oignons", "entier", 2);
let oeufs = new Produits("oeufs", "entier", 1);
let sel = new Produits("sel", "moulu", 0.5);
let poivre = new Produits("poivre", "moulu", 0.5);
let fromage = new Produits("fromage", "entier", 3.5);

let marcelle = new Poele("Marcelle", []);

let omelette = {
    nom :"omelette",
    etat : "crue",
}


let bolinette = new Bol("C'est un petit bol", []);


export {maison, bgDu1030, carrefourExpress, panier1, panier2, panier3, couteau, rayonFrais, oignons, oeufs, sel, poivre, fromage, marcelle, omelette, bolinette};