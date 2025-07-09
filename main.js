// Vogliamo stampare i numeri da 1 a 100
// Per ogni numero:
//   - Se è divisibile per 3, stampiamo "Fizz"
//   - Se è divisibile per 5, stampiamo "Buzz"
//   - Se è divisibile per sia 3 che 5, stampiamo "FizzBuzz"
//   - Altrimenti stampiamo il numero stesso
// Usiamo l'operatore modulo (%) per verificare la divisibilità
// Ps. per ragionare sui multipli è necessario ragionare sulla divisibilità

//Stampiamo i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    /* inizializziamo l'output preparando una stringa vuota
    da stampare in modo da poterla utilizzare nei casi specifici che seguiranno
    */
   let output: "";
}

// Se il numero è divisibile per 3, stampiamo "Fizz" (Aggiungo Fizz alla stringa output con +=)
if (i % 3 === 0 ) {
    output += "Fizz"
}

// Se il numero è divisibile per 5, stampiamo "Buzz" (Aggiungo Buzz alla stringa output con +=)
if (i % 5 === 0 ) {
    output += "Buzz"
}