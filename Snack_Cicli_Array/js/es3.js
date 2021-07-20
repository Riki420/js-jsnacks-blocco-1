// var numUno = parseInt(prompt('inserisci il primo numero'));
// var numDue = parseInt(prompt('inserisci il secondo numero'));
// var numTre = parseInt(prompt('inserisci il terzo numero'));
// var numQuattro = parseInt(prompt('inserisci il quarto numero'));
// var numCinque = parseInt(prompt('inserisci il quinto numero'));
// var numSei = parseInt(prompt('inserisci il sesto numero'));
// var numSette = parseInt(prompt('ineserisci il settimo numero'));
// var numOtto = parseInt(prompt("ineserisci l' ottavo numero"));
// var numNove = parseInt(prompt('ineserisci il nono numero'));
// var numDieci = parseInt(prompt('ineserisci il decimo numero'));

// var result = numUno + numDue + numTre + numQuattro + numCinque + numSei + numSette + numOtto + numNove + numDieci;


// var displayElement = document.getElementById("display").innerHTML = "la somma dei tuoi numeri è: " + result;



/* Correzione */

//Initial Variables
var sum = 0;
var isValid = true;

//Ask Numbers
for(var i = 0; i < 10; i++){
    var userNumber = parseInt(prompt('inserisci un numero'));
    if(isNAN(userNumber)){
    isValid = false;
    } else{
    sum += userNumber; 

    }
}

if(isValid){

}
