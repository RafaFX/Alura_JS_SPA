var titulo = document.querySelector(".titulo");
titulo.textContent = "Health Life";



//variaveis para calculo imc
var paciente =  document.querySelector("#primeiro_paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

//variavel para imc aparecer automaticamente na page web

var tdImc = paciente.querySelector(".info-imc");

//validações

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000 ){
    console.log("Peso inválido");
    var pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if (altura < 0 || altura > 3.00 ){
    console.log("Altura inválida");
    var alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
}

if ( pesoEhValido && alturaEhValida){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}




