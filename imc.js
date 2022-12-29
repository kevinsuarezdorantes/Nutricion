truncateDecimals = function (number, digits) {
    var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

    return truncatedNum / multiplier;
};

var complexion;
var idealLorentz = 0;
var idealDumaine = 0;
var pesoIdeal;

const labelLorentz = document.getElementById('resultadoLorentz');
const labelDamaine = document.getElementById('resultadoDamaine');
const labelPesoIdeal = document.getElementById('pesoIdeal');
const diametroImput = document.getElementById('diametro');
const complexionLabel = document.getElementById('complexion');
const btnRadioH = document.getElementById('h');
const btnRadioM = document.getElementById('m');
const btnIniciar = document.getElementById('nutriBoton');
const labelResultado = document.getElementById('IMC');
const clasificacion = document.getElementById('resultadoTabla');
const estaturaInput = document.getElementById('estatura');
const pesoInput = document.getElementById('peso');

const imgEmoji = document.getElementById("emoji");
const imgSilueta = document.getElementById("complexionIMG");

checarDatos = function () {

    if (btnRadioH.checked || btnRadioM.checked) {
        if (estaturaInput.value > 0 && pesoInput.value > 0 && diametroImput.value > 0) {
            return true;
        }
    }
    return true;

}

btnIniciar.onclick = () => {
    if (checarDatos == true) {
        calcularIMC();
        calcularComplexion();
        calcularPesoIdeal();
    }else {
        alert("Llena todos los datos bolas no podes continuar");
        location.reload ();
    }



}

async function calcularComplexion() {

    complexion = (estaturaInput.value * 100) / diametroImput.value;



    if (btnRadioH.checked) {

        if (complexion > 10.9) {

            complexionLabel.innerHTML = "pequeña";
            imgSilueta.src = "./flaco.png";

        } else if (complexion <= 10.9 & complexion >= 9.9) {

            complexionLabel.innerHTML = "mediana";
            imgSilueta.src = "./mediano.png";


        } else if (complexion < 9.9) {

            complexionLabel.innerHTML = "grande";
            imgSilueta.src = "./gorda.png";


        }

    } else if (btnRadioM.checked) {

        if (complexion > 10.4) {

            complexionLabel.innerHTML = "pequeña";
            imgSilueta.src = "./flaco.png";

        } else if (complexion <= 10.4 & complexion >= 9.6) {

            complexionLabel.innerHTML = "mediana";
            imgSilueta.src = "./mediano.png";

        } else if (complexion < 9.6) {

            complexionLabel.innerHTML = "grande";
            imgSilueta.src = "./gorda.png";

        }
    } 

}

async function calcularIMC() {

    let imc = pesoInput.value / (estaturaInput.value * estaturaInput.value);
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

    } else if (imc == 35 || imc <= 39.9) {

        clasificacion.innerHTML = ("te encuentras con obesidad grado 2.");
        imgEmoji.src = "./enojado.png";

    } else {

        clasificacion.innerHTML = ("te encuentras con obesidad grado 3.");
        imgEmoji.src = "./enojado.png";

    }




}

async function calcularPesoIdeal(){

    if(btnRadioH.checked){
        idealLorentz = (estaturaInput.value * 100) - 100 - ((estaturaInput.value * 100) - (150 / 4));
        idealDumaine = (estaturaInput.value * 100) - 100 + (4*(diametroImput.value / 2));
    }else{
        idealLorentz = (estaturaInput.value * 100) - 100 - ((estaturaInput.value * 100) - (150 / 2.5));
        idealDumaine = (estaturaInput.value * 100) - 100 + (4*((estaturaInput.value * 100) / 2));
    }
    
    pesoIdeal = (idealDumaine + idealLorentz)/2;
    labelLorentz.innerHTML = idealLorentz;
    labelDamaine.innerHTML = idealDumaine;
    labelPesoIdeal.innerHTML = pesoIdeal
}



