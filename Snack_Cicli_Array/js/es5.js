


/***CORREZIONE***/ 

// Initial Variables

var invitation = ['Marietto', 'Giovannino', 'UomoLibellula', 'Frenkich'];
var userName;

do{
    userName = prompt('inserisci il tuo nome').trim();
} while(!userName);


// Check

var isInvited = false;

var i = 0;
while(i < invitation.length && !isInvited){
    console.log('entro ed eseguo il ciclo');

    if(userName.toLowerCase() === invitation[i].toLowerCase()){
        isInvited = true;
        console.log('trovato match al giro ', i);
    }

    i++;
}

// Print on page

if(isInvited){
    console.log('benvenuto')
} else{
    console.log('non è il tuo posto questo')
}



/*MIO*/ 
// var invited = ['Marietto', 'Giovannino', 'UomoLibellula'];
// console.log(invited)
// var i = 0;
// while(i < invited.length){
//     var newMember = prompt('inserisci il tuo nome');
//     newMember += invited
//     alert('non sei in lista')
//     i++;
// }