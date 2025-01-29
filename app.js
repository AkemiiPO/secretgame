
//variables
let intentos;
let numeroSecreto;
let listaNumeroSorteados = [];
let numeroMax = 10;

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMax}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos ===1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        // El usuario no acerto
        if ( numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
                asignarTextoElemento('p','El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function nuevoJuego(){
    limpiarCaja();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    condicionesIniciales();
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;

    if (listaNumeroSorteados.length == numeroMax){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        if (listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            console.log(listaNumeroSorteados);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();
