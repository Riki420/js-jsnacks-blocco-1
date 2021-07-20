// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ Cliccando su pulsante avvio il timer, su un altro blocco il timer            │
// └──────────────────────────────────────────────────────────────────────────────┘

var display = document.getElementById('result');
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');

var timerId;
var time = 0;

//BOTTONE START
startButton.addEventListener('click', function(){
    timerId = setInterval(function(){
        time++;
        display.innerHTML = time;
    },1000)
});


//BOTTONE STOP
stopButton.addEventListener('click', function(){
    clearInterval(timerId);
});