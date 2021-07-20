var firstWord = prompt('inserisci una parola');
var secondWord = prompt('inserisci una sconda parola');

console.log(firstWord.length);
console.log(secondWord.length);

if(firstWord.length < secondWord.length){
    document.getElementById("display").innerHTML = 'Dalla più corta alla più lunga le tue parole sono: ' + firstWord + ' ' + secondWord;
} else if(firstWord.length > secondWord.length){
    document.getElementById("display").innerHTML = 'Dalla più corta alla più lunga le tue parole sono: ' + secondWord + ' ' + firstWord;
} else{
    document.getElementById("display").innerHTML = 'la lunghezza delle due parole è identica'
}
