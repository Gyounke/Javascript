let input = document.querySelector("input");
let add = document.querySelector(".add");

let tasks = document.querySelector(".tasks")

let ajout = () => {
    let newTask = document.createElement("div");
    newTask.style.display = "flex";
    newTask.style.justifyContent = "space-around"
    let newCheck = document.createElement("input");
    newCheck.type = "checkbox"
    console.log(newCheck)
    let newP = document.createElement("p");
    let newTrashIcon = document.createElement("i");
    newTrashIcon.className = "fas fa-trash-alt";
    let newEditIcon = document.createElement("i");
    newEditIcon.className = "fas fa-edit"; 
    tasks.appendChild(newTask);
    newTask.appendChild(newCheck);
    newTask.appendChild(newP);
    newP.innerText = input.value;
    newTask.appendChild(newTrashIcon);
    newTask.appendChild(newEditIcon);
}


add.addEventListener("click", ajout)