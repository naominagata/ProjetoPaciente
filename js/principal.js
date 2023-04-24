// //pegar conteudo do h1 (aparecendo <h1></h1>)
// var titulo = document.querySelector("h1");
// console.log(titulo);

// //pegar SÓ o conteudo do h1 (sem <h1></h1>)
// console.log(titulo.textContent);

// //mudar o texto do h1
// titulo.textContent = "Banana"
// console.log(titulo.textContent);

// //pegar conteudo do h1 pelo nome da classe (. )
var titulo = document.querySelector(".titulo");
// titulo.textContent = "Banana";

// console.log("Fui carregado do arquivo <script> index.html");

//CALCULAR IMC
// //pegar nome do paciente
// //querySelector retorna apenas um elemento
// var paciente = document.querySelector("#primeiro-paciente");
// console.log(paciente);

//pegar nomeS do pacienteS
//querySelectorAll para retornar todos os elementos de uma classe com msm nome
var paciente = document.querySelectorAll(".paciente");
console.log(paciente);

//percorrer lista de pacientes
for (var i = 0; i < paciente.length; i++) {
    console.log(paciente[i]);

    //pegar peso
    var tdPeso = paciente[i].querySelector(".info-peso"); //obter conteudo com <td>
    peso = tdPeso.textContent; //obter SO o conteudo 
    console.log(peso);

    //pegar altura
    var tdAltura = paciente[i].querySelector(".info-altura");  //obter conteudo com <td>
    altura = tdAltura.textContent; //obter SO o conteudo 
    console.log(altura);

    //pegar o campo info-imc
    var tdImc = paciente[i].querySelector(".info-imc");
    //colocar o resultado no campo info-imc
    tdImc.textContent = imc; //toFixed = apenas 2 casas decimais

    if (peso < 0 || peso > 1000) {
        console.log("peso invalido");
        tdImc.textContent = "Peso invalido";
        paciente[i].classList.add("paciente-invalido")
    } else {
        if (altura < 0 || altura > 3.00) {
            console.log("peso invalido")
            tdImc.textContent = "Altura invalida";
            paciente[i].classList.add("paciente-invalido")
        } else {
            //calcular imc
            var imc = peso / (altura * altura);
            console.log(imc);
        }
    }

    // //quando clicar no titulo acontece um evento chamando funcao mostra mensagem
    // titulo.addEventListener("click", mostraMensagem)
    // function mostraMensagem() {
    //     console.log("Clicado e chamado funcao mostraMensagem()")
    // }

    // //quando clicar no titulo acontece um evento chamando funcao anonima
    // titulo.addEventListener("click", function () {
    //     console.log("Clicado e chamado funcao anonima")
    // })

    //adicionando evento ao botao e tirando comportamento padrao
    var botaoAdicionar = document.querySelector("#adicionar-paciente")
    botaoAdicionar.addEventListener("click", function (event) {
        event.preventDefault(); //tirando comportamento padrao do botao (recarregar a pagina)

        var form = document.querySelector("#form-adiciona");

        var nome = form.nome.value;
        var altura = form.altura.value;
        var peso = form.peso.value;
        var gordura = form.gordura.value;

        var pacienteTr = document.createElement("tr");

        var pesoTd = document.createElement("td");
        var alturaTd = document.createElement("td");
        var nomeTd = document.createElement("td");
        var gorduraTd = document.createElement("td");
        var imcTd = document.createElement("td");

        nomeTd.textContent = nome;
        pesoTd.textContent = peso;
        alturaTd.textContent = altura;
        gorduraTd.textContent = gordura;

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);

        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
    })

}
