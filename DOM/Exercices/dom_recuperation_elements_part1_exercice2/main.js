// let myBody = document.getElementsByTagName("body")[0];
// let myBodyFC = document.getElementsByTagName("body > firstChildElement");
// let myBodyLC = document.getElementsByTagName("body > lastChildElement");

// let x = document.getElementsByTagName("body").firstElementChild;

// console.log(myBodyFC);
// console.log(myBodyLC);


// console.log
// let exo4 = document.getElementsByTagName("div").children;

// console.log(exo4);

let mybody = document.getElementsByTagName('body')[0];
console.log(mybody.firstElementChild)
console.log(mybody.lastElementChild)

let exo4 = document.getElementsByTagName('div')[0].children
console.log(exo4)

let li = document.getElementsByTagName('li')[0].nextElementSibling;
console.log(li);
console.log(li.previousElementSibling);