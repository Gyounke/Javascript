
// Exo 1

var coolVar= 23;
let tabExo = ["lol", coolVar, 22, 5, true];
console.log(tabExo);

// Exo 2

console.log(tabExo.length);

// Exo 3

deleteTabExo = tabExo.splice(tabExo.length-1,1);
console.log(tabExo);

// Exo 4 

delete2TabExo = tabExo.splice(0,1);
console.log(tabExo);

// Exo 5

tabExo.push("Poutine", 23);
console.log(tabExo);

// Exo 6 

tabExo.unshift("Bob", 56, "Allan");
console.log(tabExo);

// Exo 7

tabExo.reverse();
console.log(tabExo);

// Exo 8

let superBox =[];

superBox[0] ="Premier objet";
superBox[1]= "Deuxième objet";

alert(superBox);

superBox.push("objet3, objet4, objet5");

alert(superBox);

let objRetirés = superBox.splice(0,3);
superBox.push("objet6");

alert(superBox.length);

let objetretirésEncore = superBox.splice(tabExo.length-2,2);
letobjetretirésEncoreEtEncore = superBox.splice(0,2);

alert(superBox);

alert("Desespéré de voir qu'il à fini par tout y retire,Elias range sa boite et s'en va. ;_;")


