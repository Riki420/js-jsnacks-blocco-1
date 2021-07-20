// var userNumber = parseInt(prompt('inserisci un numero'));

// console.log(Math.pow(userNumber, userNumber));


/*Correzione*/

//initial variables
var n;


//validation
do{
    var n = parseInt(prompt('inserisci un numero'));
} while(isNaN(n) && n <= 0);

//ciclo for
for(var i = 0; i <= n; i++){
    console.log(i * i * i)
}

document.getElementById('display').innerHTML = n;

//ciclo while
// var i = 0;
// while(i <= n){
    
//     i++;
// }