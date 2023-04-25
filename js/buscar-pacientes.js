var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    console.log("buscando pacientes ... ");

    //XMLHttpRequest -> requisicao http
    var xhr = new XMLHttpRequest()

    //funcao pra mostrar oq eu quero fazer com essa requisicao http
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    //adicionando evento para ele escutar quando a requisicao foi chamada
    //xhr.responseText -> conteudo da requisicao
    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status = 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            //JSON.parse -> transforma o json (requisicao) em array
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(pacientes);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseTexts);
            erroAjax.classList.remove("invisivel");
        }
    });

    //funcao para enviar a requisicao
    xhr.send();
});