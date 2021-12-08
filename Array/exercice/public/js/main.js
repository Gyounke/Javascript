
// Exercie 1 
// 1. Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22
// 2. Afficher les éléments de l'array
// 3. Afficher le nombre d'éléments de l'array
// 4. Afficher les éléments de l'array 1 par 1 


// 1.

let coding = [ "coding_20", "coding_21", "coding_22"];

// 2.

console.log(coding);

// 3.

console.log(coding.length);

// 4.

console.log(coding[0]);
console.log(coding[1]);
console.log(coding[2]);

// Exercice 2
// 1. Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22
// 2. Afficher les éléments de l'array
// 3. Ajouter et afficher votre prénom a l'array

// 1.

let coding2 = [ "coding_20", "coding_21", "coding_22"];

// 2.
console.log(coding2);

// 3.

coding2.push("Kevin");
console.log(coding2);

// Exercice 3
// 1. Créer une variable qui reçois un array avec 3 éléments -> coding 20, coding 21, coding 22
// 2. Afficher les éléments de l'array
// 3. Ajouter et afficher votre prenom a l'array
// 4. Remplacer et afficher un élément de l'array par autre chose

// 1. 

let coding3 = [ "coding_20", "coding_21", "coding_22"];

// 2.

console.log(coding3);

// 3. 

coding3.push("Kevin");
console.log(coding2[3]);
coding3[0]="Chirac";
console.log(coding3);

// Exercice 4
// 1. Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22
// 2. Afficher les éléments de l'array
// 3. Ajouter et afficher votre prenom a l'array
// 4. Remplacer et afficher un élément de l'array par autre chose
// 5. Effacer un élément de l'array
// 6. Afficher le contenu le d'array

// 1.

let coding4 = [ "coding_20", "coding_21", "coding_22"];

// 2.

console.log(coding4);

// 3.

coding4.push("Kevin");
console.log(coding4[3]);

// 4.

coding4[0]="Sarko";

// 5.

deletecoding4 = coding4.splice(1,1);

// 6.

console.log(coding4);