// - # Variables temporaires
// - # Exo 1
//     - ## let a = 1; -> 2
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 1

let a = 1;
let b = 2;
let c = 3;

let d = a;
a = b;
b = c;
c = d;


//     - ## Afficher le changement des variables


console.log( a, b, c);


// - # Exo 2
//     - ## Afficher 4, 3, 2, 1
//     - ## let a = 1; -> 4
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 2
//     - ## let d = 4; -> 1

let a2 = 1;
let b2 = 2;
let c2 = 3;
let d2 = 4;

let e2 = a2;
a2 = d2;
d2 = e2;
e2 = b2;
b2 = c2;
c2 = e2;



//     - ## Afficher le changement des variables

console.log( a2, b2, c2, d2);

// - #  Exo 3
//     - ## let a = 1; -> 2
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 4
//     - ## let d = 4; -> 1

let a3 = 1;
let b3 = 2;
let c3 = 3;
let d3 = 4;

let e3 =a3;
a3 = b3;
b3 = c3;
c3 = d3;
d3 = e3;


//     - ## Afficher le changement des variables
console.log( a3, b3, c3, d3);

// - # Exo 4
//     - ## Afficher 4, 3, 2, 1 avec une variable temporaire
//     - ## 

let tableau = [1, 2, 3, 4];

let temp = tableau[0];
tableau[0] = tableau[3];
tableau[3] = temp;
temp = tableau[1];
tableau[1] = tableau[2];
tableau[2]= temp;

console.log(tableau);

// - # Exo 5
//     - ## let a = 1 -> 4
//     - ## let b = 2 -> 5
//     - ## let c = 3 -> 1
//     - ## let d = 4 -> 2
//     - ## let e = 5 -> 6
//     - ## let f = 6 -> 3

let a5 = 1;
let b5 = 2;
let c5 = 3;
let d5 = 4;
let e5 = 5;
let f5 = 6;

let temp5 = a5;
a5 = d5;
d5 = b5;
b5 = e5;
e5 = f5;
f5 = c5;
c5 = temp5;

//     - ## Afficher le changement des variables

console.log( a5, b5, c5, d5, e5, f5);

let age =25;

if (age>= 25){
    console.log("Vous avez plus que 25 ans.")
}
else {
    console.log("Vous avez moins de 25 ans.")
}