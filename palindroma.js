
let parolaUtente = prompt("Inserisci una parola:").toLowerCase(); 
let isPalindroma = parola(parolaUtente); 

function parola(name) {
    let reversed = ''; 

    // Ciclo per invertire la parola
    for (let i = name.length - 1; i >= 0; i--) {
        reversed += name.charAt(i);
    } if (name === reversed) {
        return true; 
    } else {
        return false; 
    }
}

console.log(isPalindroma); // true se è palindroma, altrimenti false