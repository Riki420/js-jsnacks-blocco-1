// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

var arrayUno = ['2','3','6','8','20'];
var arrayDue = ['4', '7', '12'];
var arrayTre = [];

console.log('Primo Array: ' + arrayUno);
console.log('Secondo Array: ' + arrayDue);

var result = arrayUno.concat(arrayDue);

console.log(result);

arrayTre.push(result);

console.log('Terzo Array: ' + arrayTre);

document.getElementById('display').innerHTML = "Le due array unite formano questa lista: " + arrayTre;