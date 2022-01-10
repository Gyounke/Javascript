//PART 3 EX 2

//1
document.querySelector("h1").innerText = "Les attributs class et id";

//2
document.querySelector("h2").innerText = "Exercice 2 partie A";

//3 
document.querySelectorAll("h2")[1].innerText = "Exercice 2 partie B";

//4
document.querySelector("p").innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>";

//5
document.querySelectorAll("p")[1].innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";

//6
document.querySelector("h1").setAttribute("id", "bigTitle");

//7 
document.querySelector("div").setAttribute("class", "container");

//8
let ex_8 = document.querySelectorAll("h2");

ex_8.forEach(element => {
    element.setAttribute("class", "title");
})

//9
let ex_9 = document.querySelectorAll("p");

ex_9.forEach(element => {
    element.setAttribute("class", "text");
})

//10 
document.querySelector("section").setAttribute("class", "margin-bottom border-black padding");

//11
document.querySelectorAll("section")[1].setAttribute("class", "margin-top border-black padding")

//12
document.querySelector("section>div").setAttribute("style", "background-color: blue; border: 2px solid red; height: 20px; width: 20px;")