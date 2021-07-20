// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.




var sum = 0;
console.log(sum);




//**************  CICLO FOR *************/
// for(var i = 1; i <= 5; i++){
    
//     var userNum = parseInt(prompt('inserisci un numero (' + i + '/5)'));

//     if(!isNaN(userNum)){
//         sum += userNum;
//     }
  
// }

// console.log(sum);

// document.getElementById('display').innerHTML = 'La somma dei tuoi numeri è: ' + sum;

/*****************************************/






//************  CICLO WHILE **************/

// var i = 1;
// while(i <= 5){
    
//     var userNum = parseInt(prompt('inserisci un numero (' + i + '/5)'));


//     if(!isNaN(userNum)){
//         sum += userNum;
//     }
  
//     i++;
// }

console.log(sum);

document.getElementById('display').innerHTML = 'La somma dei tuoi numeri è: ' + sum;

/*****************************************/


//*******************   VALIDAZIONE *************+*/

var i = 1;
while(i <= 5){
    
    var userNum = parseInt(prompt('inserisci un numero (' + i + '/5)'));


    while(isNaN(userNum)){
        var userNum = parseInt(prompt('inserisci un numero (' + i + '/5)'));
    }
    sum += userNum;

  
    i++;
}