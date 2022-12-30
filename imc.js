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

const diferenciaPeso =document.getElementById('diferenciaPeso');
const labelLorentz = document.getElementById('resultadoLorentz');
const labelDamaine = document.getElementById('resultadoDamaine');
const labelPesoIdeal = document.getElementById('pesoIdeal');
const diametroInput = document.getElementById('diametro');
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

function checarDatos() {
var bandera = false;
    if (btnRadioH.checked || btnRadioM.checked) {
        if (estaturaInput.value > 0 && pesoInput.value > 0 && diametroInput.value > 0) {
            bandera = true;
        }
    }
    return bandera
    

}

btnIniciar.onclick = () => {
   
    if (checarDatos() == true) {
        document.getElementById("resultados").scrollIntoView();
        calcularIMC();
        calcularComplexion();
        calcularPesoIdeal();
    }else {
        alert("Llena todos los datos bolas no podes continuar");
        location.reload ();
    }



}

async function calcularComplexion() {

    complexion = (estaturaInput.value * 100) / diametroInput.value;



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
        idealLorentz = ((estaturaInput.value * 100) - 100) - (((estaturaInput.value * 100) - 150) / 4);
        idealDumaine = (((estaturaInput.value * 100) - 100) + (4 * diametroInput.value)) / 2;
    }else{
        idealLorentz = (estaturaInput.value * 100) - 100 - (((estaturaInput.value * 100) - 150) / 2.5);
        idealDumaine = (((estaturaInput.value * 100) - 100) + (4 * diametroInput.value)) / 2;
    }
    
    pesoIdeal = (idealDumaine + idealLorentz)/2;
    labelLorentz.innerHTML = idealLorentz + "kg";
    labelDamaine.innerHTML = idealDumaine + "kg";
    labelPesoIdeal.innerHTML = pesoIdeal + "kg"
    var diferencia = pesoIdeal - pesoInput.value; 
    if (diferencia < 0) {
        diferencia = diferencia * -1;
        diferenciaPeso.innerHTML = "perder " + diferencia + "kg"; 

    } else {
        diferenciaPeso.innerHTML = "ganar " + diferencia + "kg"; 

    }

}



