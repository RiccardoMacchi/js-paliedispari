// Funzione per la verifica se palindorma o meno
let word;

function palindro(word){
    // Girare la parola al contratio
    let revWord = reverseString(word)
    console.log(word,revWord)
    // Verificare se la prima stringa sia uguale alla parola
    if (word === revWord){
        return "Palindroma"
    } else {
        return "Non palindroma"
    }
}

console.log(palindro("anna"))
