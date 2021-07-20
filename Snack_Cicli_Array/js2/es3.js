// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, 
//Gatsby vuole generare una falsa lista di 3 invitati.


//* Initial variables
var lastNames = ['Potter', 'Beggins', 'Gump', 'Hawk','Mullen'];

var firstNames = ['Bilbo', 'Forrest', 'Harry', 'Tony','Rodney' ];


var list = document.getElementById("list");
var listItems = '';

//* Ciclo For

for(var i = 0; i <= 2; i++){
    //creo 2 variabili che calcolino random il nome e il cognome
    var randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
    var randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];

    //creo una variabile che unisca le due variabili con il nome e il cognome
    var listElement = randomFirst + ' ' + randomLast;
    console.log(listElement);
    listItems += '<li>' + listElement + '</li>';
}

//* Print on page
list.innerHTML = 'Gli invitati di Gatsby: ' + listItems;
