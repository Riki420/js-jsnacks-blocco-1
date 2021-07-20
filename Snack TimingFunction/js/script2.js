// ┌──────────────────────────────────────────────────────────────────────────────┐
// │                               Esercizio 2                                    │
// └──────────────────────────────────────────────────────────────────────────────┘

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ Scrivere un programma che faccia il conto alla rovescia per 10 secondi       │
// │ Poi augura buon anno                                                         │
// └──────────────────────────────────────────────────────────────────────────────┘


//variabili iniziali

var seconds = 10;
var display = document.getElementById('display');
display.innerHTML = seconds--;


var countDown = setInterval(function(){         //avvio esecuzione SetInterval
    if(seconds === 0){                          //se i secondi arrivano a 0 stampo un messaggio
        clearInterval(countDown);               //chiudo la timing function
        confetti({                              //LIBRERIA ESTERNA
            spread: 360,
            particleCount: 1000,
        });
        display.innerHTML = "Buon Anno";

    } else{
        display.innerHTML = seconds;            //se invece non ha ancora raggiunto 0 stampa i secondi
    }
    seconds--;
}, 1000)

