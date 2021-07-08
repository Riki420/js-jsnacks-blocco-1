// SNACK 4: Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

//*INITIAL VARIABLES
var arrayUno = [2, 5, 6, 7, 90];
var arrayDue = [3, 4];

//* VERIFICA

while(arrayUno.length !== arrayDue.length){
    var randomNumb = Math.floor(Math.random()* 100) + 1;
    
    if (arrayUno.length > arrayDue.length){
        arrayDue.push(randomNumb);   
    } else {
        arrayUno.push(randomNumb);
    }
}



console.log('Gli array hanno stessa lunghezza');
console.log(arrayUno);
console.log(arrayDue);

document.getElementById('snack4').innerHTML = 'Primo Array: ' + arrayUno;
document.getElementById('snack4bis').innerHTML = 'Secondo Array: ' + arrayDue;