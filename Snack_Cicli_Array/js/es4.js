var num = [

];



for(var i = 0; i < 6; i++){
    var userNumber = parseInt(prompt('inserisci un numero'));
    if(!isNAN(userNumber) && userNumber % 2 !== 0){
        num.push(userNumber)
    }
}

console.log(num)