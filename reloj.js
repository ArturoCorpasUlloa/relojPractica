const actualizarHora = () => {
    const time = new Date();
    let hora = time.getHours();
    let min = addZeros(time.getMinutes());
    let seg = addZeros(time.getSeconds());
    let ampm = hora >= 12 ? 'PM' : 'AM';

    hora = hora % 12;
    hora = hora ? hora : 12; // El valor 0 debería ser 12

    hora = addZeros(hora);

    document.querySelector(".horas").textContent = hora;
    document.querySelector(".minutos").textContent = min;
    document.querySelector(".segundos").textContent = seg;
    document.querySelector(".ampm").textContent = ampm;
}

const addZeros = n => {
    if(n.toString().length < 2) return "0".concat(n);
    return n;
}

setInterval(actualizarHora, 1000);
