let competences = {
    HTML: '71%',
    CSS: '95%',
    JS : '50%',
    React: '18%',
    Laravel: '100%'
}

// 1

let elements = document.querySelectorAll("#liste-competences>h2");
console.log(elements);

// 2
let i = 0;
for (const key in competences) {
    // AppendChild
    // let pourcentage = document.createTextNode(' ' + competences[key])
    // elements[i].appendChild(pourcentage)

    // InnerText
    let pourcentage = Number(competences[key].substring(0, competences[key].length - 1));
    console.log(pourcentage);
    elements[i].innerText += " : " + competences[key];

    if (pourcentage < 50) {
        elements[i].style.backgroundColor = "red"
    } else if (pourcentage === 100) {
        elements[i].style.backgroundColor = "gold"
    } else if (pourcentage > 50) {
        elements[i].style.backgroundColor = "green"
        elements[i].style.color = "white"
    } else if (pourcentage === 50) {
        elements[i].style.backgroundColor = ""
    }
    i++;
}