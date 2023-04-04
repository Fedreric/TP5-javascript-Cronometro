const cronometro = document.getElementById("cronometro");
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const btnReset = document.getElementById("btnReset");

btnPlay.addEventListener("click", play);
btnPause.addEventListener("click", pause);
btnReset.addEventListener("click", reset);

function play() {cronometro.innerText = `Estoy en play`}
function pause() {cronometro.innerText = `Estoy en pausa`}
function reset() {cronometro.innerText = `Estoy en reset`}