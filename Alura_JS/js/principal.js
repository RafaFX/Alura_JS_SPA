var titulo = document.querySelector(".titulo");
titulo.textContent = "Health Life";

//querySelector = seleciona apenas um elemento como regra o primeiro que aparecer. querySelectorAll = seleciona todos os elementos da pagina

    //for para loop


    var pacientes = document.querySelectorAll(".paciente");


    for (var i = 0; i < pacientes.length; i++) {

        var paciente = pacientes[i]; //mudando a variavel durante o for 

        //variaveis para o calculo imc

        var tdPeso = paciente.querySelector(".info-peso");
        var peso = tdPeso.textContent;

        var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;

        var tdImc = paciente.querySelector(".info-imc");

        var pesoEhValido = true;
        var alturaEhValida = true;

        //validações

        if (peso <= 0 || peso >= 1000) {
            console.log("Peso inválido!");
            pesoEhValido = false;
            tdImc.textContent = "Peso inválido";
            paciente.classList.add("paciente-invalido")                        //A propriedade "classList" retorna todas as classes do objeto e nos permite ter acesso a metodos como o "add" que adiciona uma classe ao objeto
        }

        if (altura <= 0 || altura >= 3.00) {
            console.log("Altura inválida!");
            alturaEhValida = false;
            tdImc.textContent = "Altura inválida";
            paciente.classList.add("paciente-invalido")
        }

        //calculo imc + mostar na pagina web

    if (alturaEhValida && pesoEhValido) {
            var imc = peso / (altura * altura);
            tdImc.textContent = imc.toFixed(2);// toFixed função para escolher quantas casas decimais mostrar
        }
    }








