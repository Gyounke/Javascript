let input = document.querySelector("input");
let add = document.querySelector(".add");

let tasks = document.querySelector(".tasks")

// Ajouter une tâche

let ajout = () => {
    var newTask = document.createElement("div");
    newTask.style.display = "flex";
    newTask.style.justifyContent = "space-around"
    var newCheck = document.createElement("input");
    newCheck.type = "checkbox"
    console.log(newCheck)
    var newP = document.createElement("p");
    var newTrashIcon = document.createElement("i");
    newTrashIcon.className = "fas fa-trash-alt";
    var newEditIcon = document.createElement("i");
    newEditIcon.className = "fas fa-edit";
    tasks.appendChild(newTask);
    newTask.appendChild(newCheck);
    newTask.appendChild(newP);
    newP.innerText = input.value;
    newTask.appendChild(newTrashIcon);
    newTask.appendChild(newEditIcon);
    input.value = "";

    // Fonction supprimer

    let trashIcon = [...document.querySelectorAll(".fa-trash-alt")];
    console.log(trashIcon);

    let supprimer = (e) => {
        console.log(e.target.parentElement);
        e.target.parentElement.remove();
    }

    trashIcon.forEach(element => {
        trashIcon[trashIcon.indexOf(element)].addEventListener("click", supprimer);
    })

    // modifier le nom d'une tâche

    let editIcon = [...document.querySelectorAll(".fas fa-edit")]
    console.log(editIcon);
    let edit = () => {
        let newInput = document.createElement("input");
        newTask.prependChild(newInput);

    }

    newEditIcon.addEventListener("dblclick", edit);


}


add.addEventListener("click", ajout)



