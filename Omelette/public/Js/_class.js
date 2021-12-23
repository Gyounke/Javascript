import {maison, bgDu1030, carrefourExpress, panier1, panier2, panier3, couteau, rayonFrais, oignons, oeufs, sel, poivre, fromage, marcelle, omelette, bolinette} from "./_variables.js" ;


class Personne {
    constructor(nom, lieu, argent, mainDroite, mainGauche,) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
        this.seDeplacer = (arrivee) => {
            this.lieu = arrivee;
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

class Outils {
    constructor(nom) {
        this.nom = nom;
        this.decoupage = (objet) => {
            objet.etat = "Découpés"
        }
    }
}

class Produits {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
        this.miseEnRayon = (tableau,objet) => {
            tableau.push(objet);
        }
    }
}

class Poele extends Outils {
    constructor(nom, contenu) {
        super(nom);
        this.contenu = contenu;
        this.cuisson = (objet) => {
                objet.etat = "cuite"
            }
    }
}

class Bol extends Outils {
    constructor(nom, contenu){
        super(nom);
        this.contenu = contenu;
        this.ajouter = (objet) => {
            this.contenu.push(objet);
            panier1.contenu.splice(panier1.contenu.indexOf(objet), 1);
        }
        this.melanger = () => {
            this.contenu = [omelette];            
        }
    }
}

export {Personne,Lieux,Epicerie,Outils,Produits,Poele,Bol}; 