var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelectorAll("table");
//a tabela é pai de "pacientes" e ele escuta todos os eventos que sao passados pros seus filhos,
//entao se passar o evento pra ele, os filhos tb recebem consequentemente
//isso é bom pq se eu adiciono um novo paciente msm a pagina ja estando carregada, ele é removido tb se eu quiser
tabela.addEventListener("dblclick", function (event) {
    console.log("fui clicado com duplo clique")
    //event.target = quem sofreu o evento
    //parentNode = pai de quem sofreu o evento
    //eu quero pegar o PAI pq eu vou clicar em um td e eu quero remover o tr
    event.target.parentNode.remove();

    //fazer a linha sumir devagar e depois de 500ms ele remover o paciente
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function () {
        event.target.parentNode.remove();
    }, 500);

})

// pacientes.forEach(function (paciente) {
//     paciente.addEventListener("dblclick", function () {
//         console.log("fui clicado com duplo clique")
//         //this = dono do evento -> quem ta recebendo o duplo clique
//         this.remove();
//     })
// });