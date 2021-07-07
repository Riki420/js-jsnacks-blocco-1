// SNACK 2: Chiedi un numero all'utente, se è pari stampa il numero,
// se è dispari stampa il numero successivo.

//*Chiedo il numero all'utente

var num = parseInt(prompt('inserisci un numero'))


//*Se il numero è pari stampo il numero, se invece è dispari lo stampo + 1

if(num % 2 === 0){
    console.log(num);
    document.getElementById('snack2').innerHTML = 'PARI: ' + num
}
else{
    var dispari = num + 1;
    console.log(dispari);
    document.getElementById('snack2').innerHTML = 'PARI: ' + dispari;

}