// ┌──────────────────────────────────────────────────────────────────────────────┐
// │                        ESERCIZIO VEN 16 NUMERO 1                             │
// └──────────────────────────────────────────────────────────────────────────────┘


// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ Il programma chiede all'utente quanti secondi mancano alla cottura della     │
// │ pasta                                                                        │
// │ Dopo il tempo indicato appare un alert(); che avvisa che la pasta è          │
// │ pronta                                                                       │
// └──────────────────────────────────────────────────────────────────────────────┘


//variabili iniziali prompt utente
var secondi = parseInt(prompt('Tra quanti secondi è pronta la pasta?'));


//trasformo i secondi scelti in millisecondi per il setTimeOut
secondi *= 1000;

//Funzione setTimeOut
setTimeout(pastaTime, secondi);
function pastaTime (){
    document.getElementById('display').innerHTML = 'la pasta è pronta'
}