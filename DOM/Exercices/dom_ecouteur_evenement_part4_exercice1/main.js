
let elTittroDelDiablo = document.querySelector("h1");

console.log (elTittroDelDiablo);



let bleudeMeth = (element) => {
    element.style.color = "blue";
}

// bleudeMeth(elTittroDelDiablo);

// elTittroDelDiablo.addEventListener("mouseover", () => {
//     elTittroDelDiablo.style.color = "blue";
// });

elTittroDelDiablo.addEventListener("mouseover", bleudeMeth);

elTittroDelDiablo.style.color = "black";