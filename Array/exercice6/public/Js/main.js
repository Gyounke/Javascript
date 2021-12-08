// 1. 
// - let monTab = ['pomme', 'fraise', 'melon', 'citron']

let monTab = ['pomme', 'fraise', 'melon', 'citron'];

// - Supprimer le dernier élément de l'array

monTab.pop();
console.log(monTab);

// - Supprimer le premier élément de l'array

monTab.shift();
console.log(monTab);

// - Ajouter un élément a la fin de l'array

monTab.push("ananas");
console.log(monTab);

// - Ajouter un élément au debut de l'array

monTab.unshift("raisins");
console.log(monTab);

// - Mettre le deuxième élément en majuscule 

monTab[1] = monTab[1].toUpperCase();
console.log(monTab);

// - Changer l'ordre de l'array

monTab.reverse();
console.log(monTab);


// 2.
// - Ordonner les chiffres

 

// - Première methode (Ordonner)

let chiffres = [4, 5, 2, 1, 3];
chiffres.sort();
// - *Resultat : 1, 2, 3, 4, 5*

// - Deuxième methode (Concaténer les chiffres en un string)

let chiffresJoin =chiffres.join("-");
console.log(chiffresJoin);

// - *Resultat : 1-2-3-4-5*


// - Utiliser une méthode qui permet de revenir à la chaine de caractères en un tableau

let chiffresSeparate = chiffresJoin.split("-");


// - Afficher l'array avec les chiffres ordonnées

console.log(chiffresSeparate);


// 3. 
// - Créez un tableau vide
let newTab = [];

// - Ajouez 10 élément dans votre array

newTab.push( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// - Affichez le contenu de l'array et sa taille

console.log(newTab + " " + newTab.length);

// - Trouvez l'index de chaque éléments

console.log(newTab.indexOf(1));
console.log(newTab.indexOf(2));
console.log(newTab.indexOf(3));
console.log(newTab.indexOf(4));
console.log(newTab.indexOf(5));
console.log(newTab.indexOf(6));
console.log(newTab.indexOf(7));
console.log(newTab.indexOf(8));
console.log(newTab.indexOf(9));
console.log(newTab.indexOf(10));


// - Utiliser une methode qui permet de supprimer un element grâce à l'index

deleteNewTab = newTab.slice(4,1);
console.log(newTab);


// - Créez un tableau vide et rajoutez toutes les personnes de la classe. Faite un console.log de quelqu'un aléatoirement dans le tableau
let classe = [];
classe.push("Aleks","Amanda","Elias","Eliot","Gursel","Imane","Jade","Kevin","Louis","Marcyl","Michael","Samy","Ilias","Adil","Isma","Nicola","Batou","Calvin","Mohamed");

console.log(classe[Math.round(18*Math.random())]);

// - En une ligne supprimer 'Anis' du tableau

let revolution = classe.splice(2,1);
console.log(classe);

