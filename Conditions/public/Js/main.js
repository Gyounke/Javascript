// let age = +prompt("Quel age avez-vous?");

// if (age>= 25){
//     console.log("Vous avez plus que 25 ans.");
// }
// else {
//     console.log("Vous avez moins de 25 ans.");
// }

let age = +prompt("Quel age avez-vous?");

if (age < 18){
    console.log("Vous n'avez pas le droit de .");
}
else if (age >= 18 && age <= 50) {
    console.log("Vousavez le droit de .");
} else {
    console.log("Vous êtes trop grand");
}