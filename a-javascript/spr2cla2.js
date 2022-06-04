/* var temperatura = prompt('Que temperatura hace?, introducir un numero entero')

if(temperatura < 0){
    alert('El arte es morirse de frio.')
} else if (temperatura < 16){
    alert('Esta fresco para pasear en jaula.')
} else {
    alert('Maldicion, va a ser un dia hermoso.')
} */


/* function calcTemp() {
    let temperatura = document.getElementById('temperatura').value;

    if(temperatura < 0){
        alert('El arte es morirse de frio.');
    } else if (temperatura < 16){
        alert('Esta fresco para pasear en jaula.');
    } else {
        alert('Maldicion, va a ser un dia hermoso.');
    };
};
 */



var salida = document.getElementById('salida')

function calcTemp() {
    let temperatura = document.getElementById('temperatura').value;

    if(temperatura < 0){
        salida.innerHTML = `
        <h2>El arte es morirse de frio.</h2>
        <img src="img/super frio.jpg" alt="">
        `;
    } else if (temperatura < 16){
        salida.innerHTML = `
        <h2>Esta fresco para pasear en jaula.</h2>
        <img src="img/fresco.jpg" alt="">
        `;
    } else {
        salida.innerHTML = `
        <h2>Maldicion, va a ser un dia hermoso.</h2>
        <img src="img/soleado.jpg" alt="">
        `;
    };
};








