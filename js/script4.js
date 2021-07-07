// SNACK 4: Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

//* INITIAL VARIABLES

var arrayUno = [2,3,6,8,20,50];
var arrayDue = [4, 7, 12];
var arrayTre = [];

console.log('Primo Array: ' + arrayUno);
console.log('Secondo Array: ' + arrayDue);


//* CONCATENAZIONE ARRAY UNO E DUE

var result = arrayUno.concat(arrayDue);

console.log(result);

//aggiungiamo il result nel terzo array
arrayTre.push(result);

console.log('Terzo Array: ' + arrayTre);

//* PRINTO ON PAGE

document.getElementById('snack4').innerHTML = "Le due array unite formano questa terza array: " + arrayTre;