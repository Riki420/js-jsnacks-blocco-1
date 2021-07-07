// SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


//* INITIAL VARIABLES
var sum = 0;
console.log(sum);

//* CICLO FOR
for(var i = 1; i <= 5; i++){
    
    var userNum = parseInt(prompt('inserisci un numero (' + i + '/5)'));
    // ? VALIDATION
    if(!isNaN(userNum)){
        sum += userNum;
    }
  
}

console.log(sum);
//* PRINT ON PAGE
document.getElementById('snack1').innerHTML = 'La somma dei tuoi numeri è: ' + sum;
