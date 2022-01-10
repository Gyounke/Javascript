let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub : '50%',
    Discord: '15%',
}

let elements = document.querySelectorAll("#liste-soft-skills>h2");
console.log(elements);

let i = 0;

for (const key in softSkills) {

    let pourcentage = Number(softSkills[key].substring(0,softSkills[key].length - 1));
    console.log(pourcentage);
    elements[i].innerText += " : " + softSkills[key];

    if (pourcentage < 50) {
        elements[i].style.backgroundColor = "red";
    } else if (pourcentage === 100) {
        elements[i].style.backgroundColor = "gold";
    } else if (pourcentage > 50) {
        elements[i].style.backgroundColor = "green";
    } else if (pourcentage === 50) {
        elements[i].style.backgroundColor = "white"
    }
    i++;
}

console.log(i);