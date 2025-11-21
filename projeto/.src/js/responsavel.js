let etapaSelecionada = "";

// Seleção de etapa (Infantil, Fundamental, Médio)
function selecionarEtapa(etapa) {
    etapaSelecionada = etapa;

    document.getElementById("escolherEtapa").classList.add("hidden");
    document.getElementById("menuResponsavel").classList.remove("hidden");

    let titulo = {
        infantil: "Educação Infantil",
        fundamental: "Ensino Fundamental",
        medio: "Ensino Médio"
    }[etapa];

    document.getElementById("tituloEtapa").innerText = titulo;
}

// Abrir chat
function abrirChat(setor) {
    document.getElementById("menuResponsavel").classList.add("hidden");

    document.getElementById("chatTitle").innerText =
        "Enviar mensagem para " + setor;

    document.getElementById("chatContainer").classList.remove("hidden");
    document.getElementById("chatMessage").value = "";
    document.getElementById("chatResponse").classList.add("hidden");
}

// Envio da mensagem do chat
document.getElementById("sendChatBtn").addEventListener("click", function () {
    const msg = document.getElementById("chatMessage").value.trim();

    if (msg === "") {
        alert("Digite uma mensagem antes de enviar.");
        return;
    }

    document.getElementById("chatResponse").classList.remove("hidden");
});

// Voltar ao menu do responsável
function voltarMenuResponsavel() {
    document.getElementById("chatContainer").classList.add("hidden");
    document.getElementById("menuResponsavel").classList.remove("hidden");
}

// Voltar para a seleção de etapa
function voltarEscolha() {
    document.getElementById("menuResponsavel").classList.add("hidden");
    document.getElementById("escolherEtapa").classList.remove("hidden");
}

// Baixar calendário de acordo com a etapa
function baixarCalendario() {
    if (etapaSelecionada === "infantil") {
        window.open("pdfs/calendario_escolar_infantil.pdf");
    } 
    else if (etapaSelecionada === "fundamental") {
        window.open("pdfs/calendario_escolar_fundamental.pdf");
    } 
    else if (etapaSelecionada === "medio") {
        window.open("pdfs/calendario_escolar_medio.pdf");
    }
}