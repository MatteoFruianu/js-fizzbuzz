// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"



// creo un array vuoto da riempire

var fizzBuzz = [];

// creo un ciclo for coi numeri da uno a 100

for (var i = 1; i < 101; i++) {


    //imposto prima la condizione in cui sono divisibili sia per 3 che per 5 

    if (i % 3 == 0 && i % 5 == 0) {
        fizzBuzz.push("FizzBuzz")
    }

    else if (i % 3 == 0) {
        fizzBuzz.push("Fizz")
    } 
    else if (i % 5 == 0) {
        fizzBuzz.push("Buzz")
    }
    
    else {
    
        fizzBuzz.push(i);

    }


   
}

console.log(fizzBuzz);





