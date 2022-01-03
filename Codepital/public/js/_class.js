
import { marcus, optimus, sangoku, darthVader, semicolon, doctor, malIndente, unsave, the404BadIllness, azmatique, syntaxError, cimetery, drugStore } from "./_variables.js";

// Main characters
class Personnes {
    constructor(name, disease, money, pocket, healthState, treatment) {
        this.name = name;
        this.disease = disease;
        this.money = money;
        this.pocket = pocket;
        this.healthState = healthState;
        this.treatment = treatment;
        this.goTo = (destination) => {
            destination.push(this.name);
        }
        this.takeCare = (drug) => {
            this.healthState = "Healed";
        }
        this.pay = () => {
            this.money = money - Price;
        }
    }
}


// Doctor
class Doctor {
    constructor(name, money, cabinet, waitingRoom, patientsDone) {
        this.name = name;
        this.money = money;
        this.cabinet = cabinet;
        this.waitingRoom = waitingRoom;
        this.patientsDone = patientsDone;
        this.diagnosis = (patient) => {
            switch (patient.disease) {
                case "Mal indenté":
                    this.money += 50;
                    patient.money -= 50;
                    console.log("Ce patient est atteint de Mal indenté");
                    patient.treatment = "ctrl+maj+f";
                    this.patientsDone.push(patient);
                    this.cabinet.shift();
                    break;
                case "Unsave":
                    this.money += 50;
                    patient.money -= 50;
                    console.log("Ce patient est atteint de Unsave");
                    patient.treatment = "saveOnFocusChange";
                    this.patientsDone.push(patient);
                    this.cabinet.shift();
                    break;
                case "404":
                    this.money += 50;
                    patient.money -= 50;
                    console.log("Ce patient est atteint de 404");
                    patient.treatment = "CheckLinkRelation";
                    this.patientsDone.push(patient);
                    this.cabinet.shift();
                    break;
                case "azmatique":
                    this.money += 50;
                    patient.money -= 50;
                    console.log("Ce patient est atteint d'Azmatique");
                    patient.treatment = "Ventoline";
                    this.patientsDone.push(patient);
                    this.cabinet.shift();
                    break;
                case "syntaxError":
                    this.money += 50;
                    patient.money -= 50;
                    console.log("Ce patient est atteint de Syntax Error");
                    patient.treatment = "f12+doc";
                    this.patientsDone.push(patient);
                    this.cabinet.shift();
                    break;
            }
        }

    }
}


// Diseases and Treatments 
class DiseasesAndTreatments {
    constructor(disease, treatment, price) {
        this.disease = disease;
        this.treatment = treatment;
        this.price = price;
    }
}

// Places
class Lieux {
    constructor(name, people) {
        this.name = name;
        this.people = people;
    }
}

export { Personnes, Doctor, DiseasesAndTreatments, Lieux };