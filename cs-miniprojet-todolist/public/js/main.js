let input = document.querySelector("input");
let add = document.querySelector(".add");

let tasks = document.querySelector(".tasks")

// Ajouter une tâche

let ajout = () => {
    var newTask = document.createElement("div");
    newTask.className = "tache";
    newTask.style.display = "flex";
    newTask.style.justifyContent = "space-around"
    var newCheck = document.createElement("input");
    newCheck.type = "checkbox"
    newCheck.className = "checkbox";
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
        let okButton = document.createElement("button");
        newTask.prepend(okButton);
        okButton.innerText = "OK"
        let newInput = document.createElement("input");
        newTask.prepend(newInput);

        okButton.addEventListener("click", () => {
            newP.innerText = newInput.value;
            newInput.remove()
            okButton.remove()
        })
    }

    newEditIcon.addEventListener("click", edit);

    // Supprimer toute la liste

    let clearAll = document.querySelector(".clear");

    let allTasks = [...document.querySelectorAll(".tache")];

    clearAll.addEventListener("click", () => {


        for (let i = 0; i < allTasks.length; i++) {
            allTasks[i].remove();
        }
    })

    // Trier en fonction du statut
    let checkboxes = [...document.querySelectorAll(".checkbox")];


    checkboxes.forEach(element => {
        element.addEventListener("click", () => {
            console.log(element);
        })
        
    })

    let done = document.querySelector(".done");
    let toDo = document.querySelector(".toDo");
    let all = document.querySelector(".all");

    done.addEventListener("click", () => {
        for (let j = 0; j < allTasks.length; j++){
        if (checkboxes[j].checked == false) {
            allTasks[j].style.display = "none"
        } else if (checkboxes[j].checked == true) {
            allTasks[j].style.display = "flex"
        }
    }
    })

    toDo.addEventListener("click", () => {
        for (let k = 0; k < allTasks.length; k++) {
            if (checkboxes[k].checked == true) {
                allTasks[k].style.display = "none"
            } else if (checkboxes[k].checked == false) {
                allTasks[k].style.display = "flex"
            }
        }
    })

    all.addEventListener("click", () => {
        for ( let l = 0; l < allTasks.length; l++) {
            allTasks[l].style.display = "flex";
        }
    })

}


add.addEventListener("click", ajout)



