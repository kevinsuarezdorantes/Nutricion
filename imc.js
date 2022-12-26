truncateDecimals = function (number, digits) {
    var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

    return truncatedNum / multiplier;
};


const btnIniciar = document.getElementById('nutriBoton');
const labelResultado = document.getElementById('IMC');
const clasificacion = document.getElementById('resultadoTabla');  
const estaturaInput = document.getElementById('estatura');
const pesoInput = document.getElementById('peso');

const imgEmoji = document.getElementById("emoji"); 

btnIniciar.onclick = () => {
    calcularIMC();
}

async function calcularIMC(){

let imc = pesoInput.value / (estaturaInput.value  * estaturaInput.value);
labelResultado.innerHTML = truncateDecimals(imc, 2);

 
if (imc < 18.5) {

    clasificacion.innerHTML = ("te encuentras bajo de peso.");
    imgEmoji.src = "./feliz.png";
    
    
} else if (imc == 18.5 || imc <= 24.9) {

    clasificacion.innerHTML = ("te encuentras en un peso adecuado.");
    imgEmoji.src = "./alegre.png";
    
} else if (imc == 25 || imc <= 29) {

    clasificacion.innerHTML = ("te encuentras con sobrepeso.");
    imgEmoji.src = "./neutro.png";
    
} else if (imc == 30 || imc <= 34.9) {

    clasificacion.innerHTML = ("te encuentras con obesidad grado 1.");
    imgEmoji.src = "./triste.png";
    
} else if (imc == 35 || imc <= 39.9){

    clasificacion.innerHTML = ("te encuentras con obesidad grado 2.");
    imgEmoji.src = "./enojado.png";
    
} else {

    clasificacion.innerHTML = ("te encuentras con obesidad grado 3.");
    imgEmoji.src = "./enojado.png";
    
}  


   
    
}




