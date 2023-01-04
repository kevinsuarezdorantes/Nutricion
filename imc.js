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
var idealCreff;
var genero;

const btntabla =document.getElementById('btntabla');
const btntablaComplexion =document.getElementById('btntablacomplexion');
const btnemoji =document.getElementById('btnemoji');
const btncomplexion =document.getElementById('btncomplexion');
const edadImput = document.getElementById('Edad');
const diferenciaPeso = document.getElementById('diferenciaPeso');
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
const creffLabel = document.getElementById('resultadoCreff');

const imgEmoji = document.getElementById("emoji");
const imgSilueta = document.getElementById("complexionIMG");



function checarDatos() {
    var bandera = false;
    if (btnRadioH.checked || btnRadioM.checked) {
        if (estaturaInput.value > 0 && pesoInput.value > 0 &&
            diametroInput.value > 0 && edadImput.value > 0) {

            bandera = true;
        }
    }
    return bandera


}

const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};

const sonido = cargarSonido("can_you_feel.mp3");

btntabla.onclick = () =>{
    document.getElementById("IMC").scrollIntoView();
}

btntablaComplexion.onclick = () =>{
    document.getElementById("complexionSeccion").scrollIntoView();
}

btnemoji.onclick = () =>{
    document.getElementById("title2").scrollIntoView();
}

btncomplexion.onclick = () =>{
    document.getElementById("title3").scrollIntoView();
}

btnIniciar.onclick = () => {

    imgEmoji.style.visibility = "visible";
    imgSilueta.style.visibility = "visible";

    if (checarDatos() == true) {
        
        document.getElementById("title1").scrollIntoView();
        calcularIMC();
        var test = calcularComplexion();
        calcularPesoIdeal(test);

    } else {
        alert("Llena todos los datos bolas no podes continuar");
        location.reload();
    }



}



function calcularComplexion() {
    var resultado = "pequeña";
    complexion = (estaturaInput.value * 100) / diametroInput.value;



    if (btnRadioH.checked) {
        genero = "hombre";
        if (complexion > 10.9) {

            complexionLabel.innerHTML = "pequeña";
            imgSilueta.src = "./flaco.png";

        } else if (complexion <= 10.9 & complexion >= 9.9) {

            complexionLabel.innerHTML = "mediana";
            imgSilueta.src = "./mediano.png";
            resultado = "mediana";


        } else if (complexion < 9.9) {

            complexionLabel.innerHTML = "grande";
            imgSilueta.src = "./gorda.png";
            resultado = "grande";


        }

    } else if (btnRadioM.checked) {
        genero = "mujer";
        if (complexion > 10.4) {

            complexionLabel.innerHTML = "pequeña";
            imgSilueta.src = "./flaco.png";

        } else if (complexion <= 10.4 & complexion >= 9.6) {

            complexionLabel.innerHTML = "mediana";
            imgSilueta.src = "./mediano.png";
            resultado = "mediana";

        } else if (complexion < 9.6) {

            complexionLabel.innerHTML = "grande";
            imgSilueta.src = "./gorda.png";
            resultado = "grande";

        }


    }
    return resultado;
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

async function calcularPesoIdeal(complexion) {

    if (btnRadioH.checked) {
        idealLorentz = ((estaturaInput.value * 100) - 100) - (((estaturaInput.value * 100) - 150) / 4);
        idealDumaine = (((estaturaInput.value * 100) - 100) + (4 * diametroInput.value)) / 2;
    } else {
        idealLorentz = (estaturaInput.value * 100) - 100 - (((estaturaInput.value * 100) - 150) / 2.5);
        idealDumaine = (((estaturaInput.value * 100) - 100) + (4 * diametroInput.value)) / 2;
    }

    if (complexion == "pequeña") {

        idealCreff = (((estaturaInput.value * 100) - 100) + (edadImput.value) / 10) * 0.81;
        creffLabel.innerHTML = truncateDecimals(idealCreff, 2);
    } else {

        if (complexion == "mediana") {

            idealCreff = (((estaturaInput.value * 100) - 100) + (edadImput.value) / 10) * 0.9;
            creffLabel.innerHTML = truncateDecimals(idealCreff, 2);
        } else {

            if (complexion == "grande") {

                idealCreff = (((estaturaInput.value * 100) - 100) + (edadImput.value) / 10) * (0.9 * 1.1);
                creffLabel.innerHTML = truncateDecimals(idealCreff, 2);
            }

        }


    }

    pesoIdeal = (idealDumaine + idealLorentz + idealCreff) / 3;
    labelLorentz.innerHTML = truncateDecimals(idealLorentz, 2) + "kg";
    labelDamaine.innerHTML = truncateDecimals(idealDumaine, 2) + "kg";
    labelPesoIdeal.innerHTML = truncateDecimals(pesoIdeal, 2) + "kg"
    var diferencia = pesoIdeal - pesoInput.value;


    if (diferencia < 1 && diferencia > -1) {

        if (genero == "hombre") {

            if (diferencia < 1 && diferencia > 0) {
                diferenciaPeso.innerHTML = "ganar " + truncateDecimals(diferencia, 2) + "kg";
            } else {
                diferenciaPeso.innerHTML = "perder " + (truncateDecimals(diferencia, 2) * -1) + "kg";
            }

            imgSilueta.src = "./chad.png";
            sonido.play("can_you_feel.mp3");

        } else {
            if (diferencia < 1 && diferencia > 0) {
                diferenciaPeso.innerHTML = "ganar " + truncateDecimals(diferencia, 2) + "kg";
            } else {
                diferenciaPeso.innerHTML = "perder " + (truncateDecimals(diferencia, 2) * -1) + "kg";
            }

            imgSilueta.src = "./chad_woman.png";
            sonido.play("can_you_feel.mp3");
        }


    } else {

        if (diferencia <= -1 || diferencia >= 1) {
            if (diferencia <= -1) {
                diferenciaPeso.innerHTML = "perder " + (truncateDecimals(diferencia, 2) * -1) + "kg";
            } else {
                diferenciaPeso.innerHTML = "ganar " + (truncateDecimals(diferencia, 2) * 1) + "kg";

            }


        }

    }

}



