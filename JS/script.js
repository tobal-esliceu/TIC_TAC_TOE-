
// Selección de elementos
const caselles = document.querySelectorAll(".casella");
const missatgeText = document.getElementById("missatge");
const tornText = document.getElementById("torn");
const btnReiniciar = document.getElementById("reiniciar");

//TURNOS
let torn = "X";
let jocActiu = true;
let estatPartida = ["", "", "", "", "", "", "", "", ""];

const combinacionesganadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
];

caselles.forEach(casella => {
casella.addEventListener("click", function() {

});
});
