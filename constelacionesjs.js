var canvas;
var ctx;
window.onload = inicializar;

function inicializar() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    //Dibujar círculo donde va
    ctx.beginPath();
    ctx.fillStyle="black";
    ctx.strokeStyle="black";
    ctx.arc(400, 400, 400, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    alert("hola");
}