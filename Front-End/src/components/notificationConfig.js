function calcularIntervalo(intervalo, unidad){

    if (unidad === 'dias'){
        intervalo = intervalo * 86400000;
    }
    else if(unidad === 'horas'){
        intervalo = intervalo * 3600000;
    }
    else if(unidad === 'minutos'){
        intervalo = intervalo * 60000;
    }
    else if(unidad === 'segundos'){
        intervalo = intervalo * 1000;
    }

    console.log(intervalo);

    return intervalo;

}

function notificar(titulo, texto, intervalo, unidad){
    intervalo = calcularIntervalo(intervalo, unidad);
    setInterval(function(){ mostrarNotificacion(titulo, texto); }, intervalo);
    /*mostrarNotificacion.onclick = function(event){
        event.preventDefault();
        window.open('https://www.google.com');
    }*/

}

