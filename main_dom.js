// dichiarazione fuori dal ciclo
let outputDiv = document.getElementById('output');
// logica seguita nel blocco script
for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    if (output === "") output = i;
    // stampa nella pagina e a capo 
    outputDiv.innerHTML += output + "<br>";
}

// dichiarazione fuori dal ciclo
// Selezioniamo il div in cui inserire i risultati
const container = document.getElementById("output");

// Ciclo da 1 a 100
for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % 3 === 0 && i % 5 === 0) {
        output = "FizzBuzz";
    } else if (i % 3 === 0) {
        output = "Fizz";
    } else if (i % 5 === 0) {
        output = "Buzz";
    } else {
        output = i;
    }

    // Scrivo il risultato al div, con un <br> per andare a capo
    outputDiv.innerHTML += output + "<br>";
}