// 1. Exo 1 
//   - Créez un objet avec vos valeurs
//   - 'Nom', 'prenom', 'age', 'taille'
//   - Affichez votre age via un console.log()
let ouam = {
    nom : "Blistein",
    prenom : "Kevin",
    age : 28,
    taile : 184,
}

console.log(ouam.age);


// 2. Exo 2 
//   - Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)
let ouat = {
    nom : "Dylan",
    prenom : "Dylan",
    age : 69,
    taile : 174,
}

let someone = {
    
}

// 3. Exo 3
//   - Remplir les propriétées du 3eme personnage
//   - Son nom doit valoir le nom du personnage1
//   - Son age doit valoir celui du personnage2
//   - Et sa taille doit être rempli avec la valeur que vous souhaitez

someone = Object.assign({nom: ouam.nom}, {age: ouat.age}, {taille: 209});

console.log(someone);


// 4. Exo 4
//   - Créez un personnage avec un nom un et prenom et donnez lui une méthode 'se Presenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.

let personnage = {
    nom: Spider,
    prenom: Man
}

let sePresenter = (nom,prenom) => {
    console.log(`Bonjour je m'appelle ${nom} ${prenom}`)
}
// 5. Exo 5
//   - Créer un objet avec un nom et une méthode
//   - La méthode de votre objet lance un prompt permetant de changer son age
//   - Une alert renvoi "[nom de l'objet] a [age de l'objet] ans"