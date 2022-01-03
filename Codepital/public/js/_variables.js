import { Personnes, Doctor, DiseasesAndTreatments, Lieux } from "./_class.js"
// Characters
let marcus = new Personnes("Marcus", "Mal indenté", 100, [], "Malade", "");
let optimus = new Personnes("Optimus", "Unsave", 200, [], "Malade", "")
let sangoku = new Personnes("Sangoku", "404", 80, [], "Malade", "");
let darthVader = new Personnes("DarthVader", "azmatique", 110, [], "Malade", "");
let semicolon = new Personnes("Semicolon", "syntaxError", 60, [], "Malade", "");

let doctor = new Doctor("Doctor", 0, [], [], []);
let pharmacien = new Doctor("Pharmacien", 0, [], [], []);

// Diseases and Treatments
let malIndente = new DiseasesAndTreatments("Mal indenté", "ctrl+maj+f", 60);
let unsave = new DiseasesAndTreatments("Unsave", "SaveOnFocusChange", 100);
let the404BadIllness = new DiseasesAndTreatments("404", "CheckLinkRelation", 35);
let azmatique = new DiseasesAndTreatments("Azmatique", "Ventoline", 40);
let syntaxError = new DiseasesAndTreatments("Syntax Error", "f12+doc", 20);

// Places
let cimetery = new Lieux("Cimetery", []);
let drugStore = new Lieux("Drug Store", []);

export { marcus, optimus, sangoku, darthVader, semicolon, doctor, pharmacien, malIndente, unsave, the404BadIllness, azmatique, syntaxError, cimetery, drugStore };