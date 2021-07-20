// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ SNACK: Creiamo un array di oggetti contenente 3 squadre di calcio con        │
// │ proprietà "nome", "città"                                                    │
// │ "punti";                                                                     │
// │ Stampiamo le squadre in pagina, all'interno di una tabella HTML              │
// └──────────────────────────────────────────────────────────────────────────────┘


var teamList = [
    {
        team: 'As Roma',
        citta: 'Roma',
        punti: 72
        
    },
    {
        team: 'Pescara FC',
        citta: 'Pescara',
        punti: 32
        
    },
    {
        team: 'Juventus',
        citta: 'Torino',
        punti: 60
        
    },
    {
        team: 'Milan',
        citta: 'Milano',
        punti: 40
        
    },
    {
        team: 'Inter',
        citta: 'Milano',
        punti: 32
        
    },
    {
        team: 'Lazio',
        citta: 'Nomadi',
        punti: 2
    },
    {
        team: 'Bologna',
        citta: 'Bologna',
        punti: 25
    },
    {
        team: 'Genoa',
        citta: 'Genova',
        punti: 12
    },
    {
        team: 'Torino',
        citta: 'Torino',
        punti: 35
    },
    {
        team: 'Napoli',
        citta: 'Napoli',
        punti: 10
    },
    {
        team: 'Brescia',
        citta: 'Brescia',
        punti: 5
    },
    {
        team: 'Sampdoria',
        citta: 'Genova',
        punti: 23
    },
    {
        team: 'Atalanta',
        citta: 'Bergamo',
        punti: 55
    },
    {
        team: 'Fiorentina',
        citta: 'Firenze',
        punti: 22
    },
    {
        team: 'Sassuolo',
        citta: 'Sassuolo',
        punti: 43
    },
    {
        team: 'Hellas Verona',
        citta: 'Verona',
        punti: 22
    },
];

teamList.sort(function(a,b){
    return b.punti - a.punti;
});

var tableBody = document.getElementsByTagName('tbody')[0];
var tableContent = '';

for(var i = 0; i < teamList.length; i++){
    var currentTeam = teamList[i];
    tableContent += '<tr>'

    tableContent += '<td>' + currentTeam.team + '</td>'
    tableContent += '<td>' + currentTeam.punti + '</td>'
    tableContent += '<td>' + currentTeam.citta + '</td>'


    tableContent += '</tr>'
}

tableBody.innerHTML = tableContent;