
import { Personne, Lieux, Epicerie, Outils, Produits, Poele, Bol}  from "./_class.js";

/**
* Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :
// Créer un lieu "epicerie" qui a comme propriétés :
// nom, personnes = [], paniers (un tableau d'objets "panier" avec une propriété "type" égal à panier et le contenu du panier, égal à un tableau vide),
*/

let maison = new Lieux("Maison", []);

let carrefourExpress = new Epicerie("Carrefour Express", []);

let bgDu1030 = new Personne("Leukah", "Maison", 120, [], []);

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

/**
 * Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
 * propriétés : nom, etats ( entier,coupé, moulu), prix
 */


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