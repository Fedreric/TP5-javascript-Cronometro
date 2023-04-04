const cronometro = document.getElementById("cronometro");
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const btnReset = document.getElementById("btnReset");
let segundosActuales = 0;
let minutosActuales = 0;
let horasActuales = 0;
let bandera = 0;

btnPlay.addEventListener("click", play);
btnPause.addEventListener("click", pause);
btnReset.addEventListener("click", reset);
cronometro.addEventListener("onload", cronometroActualizado);

function cronometroActualizado() { cronometro.innerHTML = `${horasActuales}:${minutosActuales}:${segundosActuales}` }





function play() {
    let segundosI = setInterval(segundos, 1000);
}
function pause() {
    bandera++;
    console.log(bandera);
}
function reset() {
    cronometro.innerText = `Estoy en reset`
}

function segundos() {
    segundosActuales++;
    cronometroActualizado();
}
