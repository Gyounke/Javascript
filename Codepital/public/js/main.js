// # Bienvenu à Codepital:
// >Dans cet exercice nous aurons des malades qui iront ce faire débuger chez un doctor. Le doctor les diagnostiquera et leur préscrira un remède. Par la suite les malades irons à la pharmacie afin d'acheter leur remède puis le prendrons et seront guérri sinon go cimetière.

// ## Description des patients
// >les malades ont un nom, une maladie, de l'argent, une poche, un état de santé,ils savent aller à un endroit, prendre un médicamment et payer. Au début, les patients sont dans un salle d'attente. (go to (se déplacer), take care (prendre un médicament) et paye ( payer docteur / pharmacie ) sont des méthodes) (maladie, etatSante,traitement sont des strings)

// |nom|maladie|argent|poche|etatSante|traitement|goTo|takeCare|paye|
// |---|---|---|---|---|---|---|---|---|
// |Marcus|mal indenté|100|vide|malade
// |Optimus|unsave|200|vide|malade
// |Sangoku|404|80|vide|malade
// |DarthVader|azmatique|110|vide|malade
// |Semicolon|syntaxError|60|vide|malade




// ## Description du doctor
// >Le doctor lui reçoit les patients dans son cabinet. Tout d'abord il les diagnostiques puis se fait payé avant de préscrire un traitement. Attention le doctor fait à chaque fois sortir le patient de son cabinet avant de prendre le suivant. Dans son cabinet il y a son chat de race sphynx pour garder un environemment stérile. Son chat miaule toutes les deux secondes dans la console(bonus). La consultation coûte 50€. Les patients son dans un état de traitement avant de sortir du cabinet. ( rajouter salleAttente : tous les patients dès le début (tableau avec des éléments)) ( bonus faire miauler un chat ( fct asynchrone))

// |nom|argent|cabinet|salle d'attente|diagnostique|patientIn|patientOut
// |---|---|---|---|---|---|
// |Debugger|0|[chat]



// ### Grille des diagnostiques
// |maladie|traitement|
// |---|---|
// |mal indenté|`ctrl+maj+f`|
// |unsave|`saveOnFocusChange`|
// |404|`CheckLinkRelation`|
// |azmatique|`Ventoline`|
// |syntaxError|`f12+doc`|



// ## La pharmacie
// >Les patients iront par après à la pharmacie et recevront leur traitement s'ils ont assez d'argent. Dans le cas ou ils ont assez d'argent ils seront alors en bonne santé sinon ils seront mort et il faudra alors les pousser dans un cimetière. ( une fois le traitement acheté, le patient est guéri sinon go mourrir au cimetière)


// ### Tarif des traitements
// |Traitement|prix|
// |---|---|
// |`ctrl+maj+f`|60€
// |`saveOnFocusChange`|100€
// |`CheckLinkRelation`|35€
// |`Ventoline`|40€
// |`f12+doc`|20€


// # Vérification
// >Grâce à votre débugger suivé à la trace l'évolution de chacun de vos patients. Vérifier bien qu'il quitte à chaque fois la salle d'attente avant d'entrer dans le cabinet et qu'ils sortent bien du cabinet avant de laisser quelqu'un d'autre entré.
// Tracer l'évolution au console.log des patients


// Début : 

import { marcus, optimus, sangoku, darthVader, semicolon, doctor, malIndente, unsave, the404BadIllness, azmatique, syntaxError, cimetery, drugStore, pharmacien } from "./_variables.js";


// Arrivée des patients :

doctor.waitingRoom.push(marcus.name);
doctor.waitingRoom.push(optimus.name);
doctor.waitingRoom.push(sangoku.name);
doctor.waitingRoom.push(darthVader.name);
doctor.waitingRoom.push(semicolon.name);

console.log("Les différents patients sont arrivés et sont stockés dans la salle d'attente:");
console.log(doctor.waitingRoom);

// Traitement du premier patient :

console.log(`Marcus rentre dans le cabinet du docteur et va être diagnostiqué par ce perfide..`);
doctor.cabinet.push(marcus.name);
let miaou = setInterval(console.log("Me Ah Ouh"), 20);
doctor.waitingRoom.shift();
console.log(doctor.cabinet);
console.log(doctor.waitingRoom);
console.log("El Doctor osculte Marcus...")
doctor.diagnosis(marcus);

console.log(marcus);
console.log(doctor);


// Traitement du deuxième patient :

console.log("Optimus rentre dans le cabinet du docteur et va être diagnostiqué par ce perfide..");
doctor.cabinet.push(optimus.name);
doctor.waitingRoom.shift();
console.log(doctor.cabinet);
console.log(doctor.waitingRoom);
console.log("El Doctor osculte Optimus...")
doctor.diagnosis(optimus);

console.log(optimus);
console.log(doctor);

// Traitement du troisième patient :
console.log("San Goku rentre dans le cabinet du docteur et va être diagnostiqué par ce perfide..");
doctor.cabinet.push(sangoku.name);
doctor.waitingRoom.shift();
console.log(doctor.cabinet);
console.log(doctor.waitingRoom);
console.log("El Doctor osculte San Goku...")
doctor.diagnosis(sangoku);

console.log(sangoku);
console.log(doctor);

// Traitement du quatrième patient :
console.log("Darth vader rentre dans le cabinet du docteur et va être diagnostiqué par ce perfide..");
doctor.cabinet.push(darthVader.name);
doctor.waitingRoom.shift();
console.log(doctor.cabinet);
console.log(doctor.waitingRoom);
console.log("El Doctor osculte Darth Vader...")
doctor.diagnosis(darthVader);

console.log(darthVader);
console.log(doctor);

// Traitement du cinquième patient : 
console.log("Semicolon rentre dans le cabinet du docteur et va être diagnostiqué par ce perfide..");
doctor.cabinet.push(semicolon.name);
doctor.waitingRoom.shift();
console.log(doctor.cabinet);
console.log(doctor.waitingRoom);
console.log("El Doctor osculte Semicolon...")
doctor.diagnosis(semicolon);

console.log(semicolon);
console.log(doctor);
clearInterval(miaou);

// Arrivée des patients à la pharmacie : 

console.log("Les patients sont tous partis ensemble dans la joie et la bonne humeur (askip, j'étais pas là).");
pharmacien.waitingRoom.push(marcus.name);
drugStore.people.push(marcus);
pharmacien.waitingRoom.push(optimus.name);
drugStore.people.push(optimus);
pharmacien.waitingRoom.push(sangoku.name);
drugStore.people.push(sangoku);
pharmacien.waitingRoom.push(darthVader.name);
drugStore.people.push(darthVader);
pharmacien.waitingRoom.push(semicolon.name);
drugStore.people.push(semicolon);

console.log(pharmacien.waitingRoom);


// Premier patient à la pharmacie :

console.log("Marcus rentre dans la pharmacie et demande le traitement approprié");
pharmacien.cabinet.push(marcus);
pharmacien.waitingRoom.shift();

if (marcus.money > malIndente.price) {
    marcus.money -= 60;
    pharmacien.money += 60;
    pharmacien.cabinet.shift();
    marcus.healthState = "healed";
    console.log("Il a assez de moula fort heureusement.La vie reprend petit à petit pour Marcus");
} else {
    cimetery.people.push(marcus);
    marcus.healthState = "dead";
    console.log("Coup dur, on manque de thune ici...Marcus est dead, on l'a tapé au cim d'Ix");
}

// Deuxième patient à la pharmacie :

console.log("Optimus rentre dans la pharmacie et demande le traitement approprié");
pharmacien.cabinet.push(optimus);
pharmacien.waitingRoom.shift();

if (optimus.money > unsave.price) {
    optimus.money -= 60;
    pharmacien.money += 60;
    pharmacien.cabinet.shift();
    optimus.healthState = "healed";
    console.log("Il a assez de moula fort heureusement.La vie reprend petit à petit pour Optimus");
} else {
    cimetery.people.push(optimus);
    optimus.healthState = "dead";
    console.log("Coup dur, on manque de thune ici...Optimus est dead, on l'a tapé au cim d'Ix");
}

// Troisième patient à la pharmacie :
console.log("San Goku rentre dans la pharmacie et demande le traitement approprié");
pharmacien.cabinet.push(sangoku);
pharmacien.waitingRoom.shift();

if (sangoku.money > the404BadIllness.price) {
    sangoku.money -= 60;
    pharmacien.money += 60;
    pharmacien.cabinet.shift();
    sangoku.healthState = "healed";
    console.log("Il a assez de moula fort heureusement.La vie reprend petit à petit pour San goku");
} else {
    cimetery.people.push(sangoku);
    sangoku.healthState = "dead";
    console.log("Coup dur, on manque de thune ici...Sangoku est dead, on l'a tapé au cim d'Ix");
}

// Quatrième patient à la pharmacie :

console.log("Darth Vader rentre dans la pharmacie et demande le traitement approprié");
pharmacien.cabinet.push(darthVader);
pharmacien.waitingRoom.shift();

if (darthVader.money > azmatique.price) {
    darthVader.money -= 60;
    pharmacien.money += 60;
    pharmacien.cabinet.shift();
    darthVader.healthState = "healed";
    console.log("Il a assez de moula fort heureusement.La vie reprend petit à petit pour darth Vader");
} else {
    cimetery.people.push(darthVader);
    darthVader.healthState = "dead";
    console.log("Coup dur, on manque de thune ici...Darth Vader est dead, on l'a tapé au cim d'Ix");
}

// Cinquième patient à la pharmacie : 
console.log("Semicolon rentre dans la pharmacie et demande le traitement approprié");
pharmacien.cabinet.push(semicolon);
pharmacien.waitingRoom.shift();

if (semicolon.money > syntaxError.price) {
    semicolon.money -= 60;
    pharmacien.money += 60;
    pharmacien.cabinet.shift();
    semicolon.healthState = "healed";
    console.log("Il a assez de moula fort heureusement.La vie reprend petit à petit pour Semicolon");
} else {
    cimetery.people.push(semicolon);
    semicolon.healthState = "dead";
    console.log("Coup dur, on manque de thune ici...Semicolon est dead, on l'a tapé au cim d'Ix");
}


console.log(cimetery.people);
