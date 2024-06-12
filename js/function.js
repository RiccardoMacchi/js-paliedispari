// Funzione per la verifica se palindorma o meno

// rigirare la parola
function reverseWord(word) {
    return word.split("").reverse().join("");
}

// Verificare che le parole siano uguali e quindi palindrome
function palindorma(word) {
    if (word === reverseWord(word)) {
        return "palindroma"
    } else {
        return "Non palindroma"
    }
}
// Risultati
// console.log(reverseWord(word))
// console.log(palindorma(word));

// Funzione per generare numero random da 1 a 5
function random5(){
    return num = Math.round(Math.random() * 4) + 1;
}

// Funzione somma 2 numeri
function somma(a,b){
    return a + b
}



