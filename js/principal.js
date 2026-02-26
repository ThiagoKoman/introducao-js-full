var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

function calculo_imc(peso, altura){
    return (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura)));
}

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}


var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener("click", function(event){
    //alert('Usuário clicou no botão');    
    event.preventDefault();

    var formulario = document.querySelector('#form-adiciona');

    var nome = formulario.nome.value;
    var peso = formulario.peso.value;
    var altura = formulario.altura.value;
    var gordura = formulario.gordura.value;

    //VALIDAÇÃO DOS DADOS
    if(nome.length == 0 || peso == '' || altura == '' || gordura == '' ){
        alert('Todos os campos do formulário devem estar preenchidos');
        return;
    }

    if(nome[0] == ' '){
        alert('Primeiro caractere do nome não pode ser um espaço');
        return;
    }else if(!isNaN(nome)){
        alert('O nome não pode ser um número');
        return;
    }else if(nome.length < 5){
        alert('Nome deve ter mais de 4 caracteres');
        return;
    }
    if(parseInt(peso) > 660 || parseInt(peso) < 0 || isNaN(peso)){
        alert('Peso Inválido!!!');
        return;
    }
    if(parseFloat(altura) > 3.0 || parseFloat(altura) < 0.2  || isNaN(altura)){
        alert('Altura Inválida!!!');
        return;
    }
    if(parseFloat(gordura) > 0.0 || parseFloat(gordura) < 100  || isNaN(gordura)){
        alert('Gordura Inválida!!!');
        return;
    }


    //CRIAÇÃO DO FORMULÁRIO
    var pacienteTr = document.createElement("tr");
    
    var nomeTd    = document.createElement("td");
    var pesoTd    = document.createElement("td");
    var alturaTd  = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd     = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculo_imc(peso,altura).toFixed(2);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);

    formulario.nome.value = "";    
    formulario.peso.value = "";
    formulario.altura.value = "";
    formulario.gordura.value = "";    

} )

console.log(botaoAdicionar);





function teste(event){
    console.log(event);
}