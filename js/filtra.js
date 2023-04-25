var campoFitro = document.querySelector("#filtrar-tabela");

campoFitro.addEventListener("input", function () {
    this.value;
    var pacientes = document.querySelectorAll(".paciente");
    if (this.value.length > 0) {
        for (var i = 0; i < paciente.length; i++) {
            var paciente = pacientes[i];
            var tdNome = document.querySelector(".info-nome");
            var nome = paciente.textContent;
            //criando expressao regular -> para filtrar letra por letra
            //"i" -> nao eh case sensitive (aceita letra maiusc ou minusc)
            var expressao = new RegExp(this.value, "i")
            //quero saber se no meu nome tem uma parte dessa expressao
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
})