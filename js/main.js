// Richiesta parola
let userWord = prompt("Inserisci una parola")
// Stampa e verifica tramite funzione
console.log(palindorma(userWord))

// Richiesta pari o dispri e numero
let evenOddUser = prompt("Pari o Dispari?")
let numUser = parseInt(prompt("Inserisci un numero da 1 a 5"))
// Generazione numero random da 1 a 5
let numPC = random5()

// Verifica se somma è pari o dispari
let resultEvenOdd = evenOdd(somma(numUser,numPC))

if (resultEvenOdd === true && evenOddUser === "Pari") {
    console.log("Hai vinto")
} else {
    console.log("Ha vinto il PC")
}


console.log(numUser,numPC)




