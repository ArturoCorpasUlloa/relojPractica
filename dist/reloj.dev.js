"use strict";

var actualizarHora = function actualizarHora() {
  var time = new Date();
  var hora = time.getHours();
  var min = addZeros(time.getMinutes());
  var seg = addZeros(time.getSeconds());
  var ampm = hora >= 12 ? 'PM' : 'AM';
  hora = hora % 12;
  hora = hora ? hora : 12; // El valor 0 debería ser 12

  hora = addZeros(hora);
  document.querySelector(".horas").textContent = hora;
  document.querySelector(".minutos").textContent = min;
  document.querySelector(".segundos").textContent = seg;
  document.querySelector(".ampm").textContent = ampm;
};

var addZeros = function addZeros(n) {
  if (n.toString().length < 2) return "0".concat(n);
  return n;
};

setInterval(actualizarHora, 1000);