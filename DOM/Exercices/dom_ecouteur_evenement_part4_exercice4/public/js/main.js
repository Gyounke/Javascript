// 1.
let exo1 = document.getElementsByTagName("input")[0];

exo1.addEventListener("focus", () => {
    exo1.style.backgroundColor = "blue";
})

// 2.

let exo2 = document.getElementsByTagName("input")[1];

exo2.addEventListener("focus" , () => {
    exo2.style.backgroundColor = "blue";
})

exo2.addEventListener("focusout", () => {
    exo2.style.backgroundColor = "white";
});

// 3.

// Obligé de stocker chacun dans une variable différente car pas la même classe 

let p1 = document.getElementsByClassName("premierParagraphe")[0]; 
let p2 = document.getElementsByClassName("secondParagraphe")[0]; 
let p3 = document.getElementsByClassName("dernierParagraphe")[0];
let button = document.getElementsByClassName("buttonExo")[0];


button.addEventListener("click", () => {
p1.innerText = p2.innerText;
p3.innerText = p2.innerText;
});


//Exercice4

let btnRename = document.getElementsByClassName("btn")[1];
let nicolas = document.querySelector("#exo4");

btnRename.addEventListener("click",()=>{
    let recup = document.querySelectorAll("input")[2];
    nicolas.innerText = recup.value;
});

// 5.

let checkmark = document.getElementsByClassName('btn')[2]

let tartine0 = document.getElementsByClassName('img-responsive')[0]

let source = document.getElementsByClassName('img-responsive')[0].previousElementSibling.textContent

console.log(source.slice(9,source.length))


checkmark.addEventListener("click", () => {
    tartine0.src = source.slice(9, source.length)
})


//6

let tartine1 = document.getElementsByClassName("img-responsive")[1]
let tartine2 = document.getElementsByClassName('img-responsive')[2]
let stock = tartine1

tartine1.addEventListener('click', () =>{
    console.log(stock)
})
tartine2.addEventListener('click', () =>{
    tartine2.src = stock.src
})

console.log(tartine1,tartine2)

//7

let text1 = document.getElementsByClassName('btn')[3].previousElementSibling


let text2 = document.getElementsByClassName('btn')[3].nextElementSibling

let inversing = document.getElementsByClassName('btn')[3]

inversing.addEventListener("click", () => {
    let tempVar = text1.textContent
    text1.textContent = text2.textContent
    text2.textContent = tempVar
})