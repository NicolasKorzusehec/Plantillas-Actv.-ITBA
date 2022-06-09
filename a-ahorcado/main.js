var palabra = 'fullstackdev'; //eleccion personal

let palabraConGuiones = palabra.replace(/./g, '_ ');

document.getElementById('palabra').innerHTML = palabraConGuiones;

function jugar(letra){
    let indice = palabra.indexOf(letra);
    if (indice == -1) {
        document.getElementById('mensaje').innerHTML = 'La letra ' + 'letra + no esta en la palabra.'
    } else {
        
    }
}