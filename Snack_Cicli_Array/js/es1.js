var numUno = parseInt(prompt('inserisci un numero'));
var numDue = parseInt(prompt('inserisci un secondo numero'));

console.log(numUno);
console.log(numDue);

var messagge = "il numero più grande è: " ;

if(isNAN(numUno) || isNAN(numDue)){
    message = 'devi inserire dei numeri';
}  else if(numUno > numDue){    
    message + numUno
} else if(numUno < numDue){
    message + numDue    
} else{
    message = ' pareggio';
}




console.log(message)