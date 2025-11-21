let nivelSelecionado = "";

function escolherNivel(nivel) {
    nivelSelecionado = nivel;
    document.getElementById("menuAluno").classList.remove("hidden");
    document.getElementById("mensagemProfessor").classList.add("hidden");
}

function abrirCalendarioEscolar() {
    if (nivelSelecionado === "fundamental") {
        window.open("pdfs/calendario_escolar_fundamental.pdf");
    } else {
        window.open("pdfs/calendario_escolar_medio.pdf");
    }
}

function abrirCalendarioProvas() {
    if (nivelSelecionado === "fundamental") {
        window.open("pdfs/calendario_provas_fundamental.pdf");
    } else {
        window.open("pdfs/calendario_provas_medio.pdf");
    }
}

function abrirMensagemProfessor() {
    document.getElementById("mensagemProfessor").classList.remove("hidden");
    document.getElementById("msgSucesso").classList.add("hidden");
}

// Enviar mensagem
document.getElementById("btnEnviarMensagem").addEventListener("click", function () {
    const email = document.getElementById("emailAluno").value;
    const disciplina = document.getElementById("disciplina").value;
    const mensagem = document.getElementById("mensagemTexto").value;

    if (!email || !disciplina || !mensagem) {
        alert("Preencha todos os campos!");
        return;
    }

    // Mensagem de sucesso
    document.getElementById("msgSucesso").classList.remove("hidden");

    // Limpa campos
    document.getElementById("emailAluno").value = "";
    document.getElementById("disciplina").value = "";
    document.getElementById("mensagemTexto").value = "";
});
function voltarInicio() {
    document.getElementById("menuAluno").classList.add("hidden");
    document.getElementById("mensagemProfessor").classList.add("hidden");
    nivelSelecionado = "";
}

function fecharFormulario() {
    document.getElementById("mensagemProfessor").classList.add("hidden");
}

function voltarIndex() {
    window.location.href = "index.html";
}