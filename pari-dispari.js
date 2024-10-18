let oddEven = prompt("Scegli Pari o Dispari").toLowerCase(); 
let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5")); 

function numeroBot() {
    const numeroCasualeBot = Math.floor(Math.random() * 5) + 1; 
    return numeroCasualeBot; 
}

// Calcola la somma
const numeroBotValue = numeroBot();
const somma = numeroUtente + numeroBotValue; 
console.log("Il risultato è: " + somma);

// Controllo  somma se è pari 

if (somma % 2 === 0) {
    if (oddEven === "pari") {
        console.log("Hai vinto! La somma è pari.");
    } else {
        console.log("Hai perso! La somma è pari.");
    }

// Controllo  somma se è dispari

} else {
    if (oddEven === "dispari") {
        console.log("Hai vinto! La somma è dispari.");
    } else {
        console.log("Hai perso! La somma è dispari.");
    }
}


// // codice complesso trovato online

// const isPari = (somma % 2 === 0);

// if ((isPari && oddEven === "pari") || (!isPari && oddEven === "dispari")) {
//     console.log(`Hai vinto! La somma è ${isPari ? "pari" : "dispari"}.`);
// } else {
//     console.log(`Hai perso! La somma è ${isPari ? "pari" : "dispari"}.`);
// }