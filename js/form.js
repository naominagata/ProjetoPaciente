//adicionando evento ao botao e tirando comportamento padrao
var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); //tirando comportamento padrao do botao (recarregar a pagina)

    var form = document.querySelector("#form-adiciona");

    // //extraindo informacoes do forms
    // var nome = form.nome.value;
    // var altura = form.altura.value;
    // var peso = form.peso.value;
    // var gordura = form.gordura.value;
    var paciente = obtemPacienteDoFormulario(form);
    console.log(paciente.nome);
    console.log(paciente.gordura);


    // //cria tr e td
    // var pacienteTr = document.createElement("tr");

    // var pesoTd = document.createElement("td");
    // var alturaTd = document.createElement("td");
    // var nomeTd = document.createElement("td");
    // var gorduraTd = document.createElement("td");
    // var imcTd = document.createElement("td");

    // nomeTd.textContent = nome;
    // pesoTd.textContent = peso;
    // alturaTd.textContent = altura;
    // gorduraTd.textContent = gordura;
    // imcTd.textContent = calculaImc(peso, altura);

    // pacienteTr.appendChild(nomeTd);
    // pacienteTr.appendChild(pesoTd);
    // pacienteTr.appendChild(alturaTd);
    // pacienteTr.appendChild(gorduraTd);
    // pacienteTr.appendChild(imcTd);
    // var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagemDeErros(erros);
        // var mensagemErro = document.querySelector("#mensagem-erro");
        // mensagemErro.textContent = erros;
        //return faz com que ele saia da funcao direto
        return;
    }

    // var tabela = document.querySelector("#tabela-pacientes");
    // tabela.appendChild(pacienteTr);

    adicionaPacienteNaTabela(paciente);

    //apagar campos do form qnd eu clico no botao de enviar paciente
    form.reset();
    //apagar mensagens de erro qnd eu clico no botao de enviar paciente
    var ul = document.querySelector("#mensagens-erro");
    //innerHTML recebe um novo conteudo para ul
    ul.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErros(erros) {
    var ul = document.querySelector("#mensagens-erro");
    //innerHTML recebe um novo conteudo para ul
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario() {

    //criando objeto paciente, passando caracteristicas do paciente
    var paciente = {
        // //extraindo informacoes do forms
        // var nome = form.nome.value;
        // var altura = form.altura.value;
        // var peso = form.peso.value;
        // var gordura = form.gordura.value;
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // var pesoTd = document.createElement("td");
    // pesoTd.classLi{
    st.add("info-peso");
    // pesoTd.textContent = paciente.peso;

    // var alturaTd = document.createElement("td");
    // var nomeTd = document.createElement("td");
    // var gorduraTd = document.createElement("td");
    // var imcTd = document.createElement("td");

    // nomeTd.textContent = paciente.nome;
    // pesoTd.textContent = paciente.peso;
    // alturaTd.textContent = paciente.altura;
    // gorduraTd.textContent = paciente.gordura;
    // imcTd.textContent = paciente.imc;

    // var pesoTd = montaTd(paciente.peso, "info-peso");
    // var alturaTd = montaTd(paciente.altura, "info-altura");
    // var nomeTd = montaTd(paciente.nome, "info-nome");
    // var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    // var imcTd = montaTd(paciente.imc, "info-imc");

    // pacienteTr.appendChild(nomeTd);
    // pacienteTr.appendChild(pesoTd);
    // pacienteTr.appendChild(alturaTd);
    // pacienteTr.appendChild(gorduraTd);
    // pacienteTr.appendChild(imcTd);

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {

    var erros = []

    if (paciente.nome.length == 0) erros.push("Nome obrigatorio");

    if (!validaPeso(paciente.peso)) erros.push("Erro é invalido");

    if (!validaAltura(paciente.altura)) erros.push("Altura é invalida");

    if (paciente.gordura.length == 0) erros.push("Gordura obrigatorio");

    if (paciente.peso.length == 0) erros.push("Peso obrigatorio");

    if (paciente.altura.length == 0) erros.push("Altura obrigatorio");

    return erros;
}
