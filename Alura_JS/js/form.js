var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault(); //previne o comportamento padrão do formulario, ou seja, não recarregar a pagina
    
    var form = document.querySelector("#form-adiciona"); //criando a var form para ter acesso a ela

    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes"); //acessando a tbody

    tabela.appendChild(pacienteTr); //posicionando a tr dentro da tbody

    form.reset();
    
});

function obtemPacienteDoFormulario(form){
    var paciente ={
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(paciente){
    //cria tr 
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    //cria as td's e adiciona dentro da tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr;
}