function calcular(){

let monto = document.getElementById("monto").value;

let puntos = Math.floor(monto / 1000);

document.getElementById("resultado").innerText =
"Obtendrías " + puntos + " puntos";

}
