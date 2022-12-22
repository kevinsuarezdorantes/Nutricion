const btnIniciar = document.getElementById('nutriBoton');
const labelEjemplo = document.getElementById('IMC');  
const estaturaInput = document.getElementById('estatura');
const pesoInput = document.getElementById('peso');

btnIniciar.onclick = () => {
    calcularIMC();
}

async function calcularIMC(){

let imc = pesoInput.value / (estaturaInput.value  * estaturaInput.value);
labelEjemplo.innerHTML = imc;

}


