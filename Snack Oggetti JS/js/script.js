var palla = {                                               //creo un oggetto
    nome: 'palla',                                          
    peso: 10,
}
var display = document.getElementById('snack1');            //elemento per il display

printObject(palla, display);                                //faccio partire la funzione


// var userWeight = parseInt(prompt('cambia il peso'));        //chiedo all'utente di cambiarne il peso


//--------------------------------------------------------------------------------------//
//                                   //*INPUT UTENTE                                    //
//--------------------------------------------------------------------------------------//


var weightField = document.getElementById('weight-num');
var nameField = document.getElementById('name');
var button = document.getElementById('btn');

button.addEventListener('click', function () {
    nameValue = nameField.value;
    palla.nome = nameValue;

    //recupero dei valori
    var weightValue = weightField.value;
    console.log(weightValue);
    palla.peso = weightValue;
    printObject(palla, display); 
});


//****************************************************************




// palla.peso = userWeight;                                    //cambio la chiave dell'oggetto con il peso dell'utente

printObject(palla, display);                                //faccio partire la funzione






//--------------------------------------------------------------------------------------//
//                                DICHIARAZIONI FUNZIONI                                //
//--------------------------------------------------------------------------------------//


function printObject(obj, targetElement){
    var content = '';                                                            //creo una stringa vuota
    for(var key in obj){                                                        //giro dentro l'oggetto
    content += '<strong>' + key + ':</strong> ' + obj[key] + '<br>';           //concateno content con le chiavi dell'oggetto
}
    targetElement.innerHTML = content;                                       //stampo sul display il content

}