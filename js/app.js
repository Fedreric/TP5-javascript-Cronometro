const cronometroEnPantalla = document.getElementById("cronometro");
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const btnReset = document.getElementById("btnReset");
let segundosActuales = 50;
let minutosActuales = 59;
let horasActuales = 0;
let bandera = 0;
let cronometroIndex;
btnPlay.addEventListener("click", play);
btnPause.addEventListener("click", pause);
btnReset.addEventListener("click", reset);
cronometroEnPantalla.addEventListener("onload", cronometroActualizado);

function cronometroActualizado() { cronometroEnPantalla.innerHTML = `${horasActuales}:${minutosActuales}:${segundosActuales}` }





function play() {
       cronometroIndex = setInterval(cronometro, 1000); 
}
function pause() {
    clearInterval(cronometroIndex);
}
function reset() {
    segundosActuales = 0;
    minutosActuales = 0;
    horasActuales = 0;
    cronometroActualizado();
}

function cronometro() {
    cronometroActualizado();
    segundosActuales++;
    if(segundosActuales === 60){
        minutosActuales++;
        segundosActuales = 0;
    }
    if(minutosActuales === 60){
        horasActuales++;
        minutosActuales = 0;
    }
}
