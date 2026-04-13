document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // Cards (index)
    // =========================
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            const link = card.dataset.link;
            if (link) window.location.href = link;
        });
    });

    // =========================
    // Itens (estudante / PDFs)
    // =========================
    document.querySelectorAll(".item").forEach(item => {
        item.addEventListener("click", () => {
            const link = item.dataset.link;

            if (link) {
                // Se for PDF, abre em nova aba
                if (link.endsWith(".pdf")) {
                    window.open(link, "_blank");
                } else {
                    window.location.href = link;
                }
            }
        });
    });

    // =========================
    // Botões de PDFs dinâmicos
    // =========================
    const pdfs = {
        Matemática: 'pdfs/matematica.pdf',
        Português: 'pdfs/portugues.pdf',
        História: 'pdfs/historia.pdf',
        Ciências: 'pdfs/ciencias.pdf'
    };

    const container = document.getElementById('pdf-buttons');

    if (container) {
        for (const [nome, link] of Object.entries(pdfs)) {
            const btn = document.createElement('button');
            btn.textContent = nome;
            btn.style.margin = '5px';
            btn.style.padding = '10px 20px';
            btn.style.cursor = 'pointer';

            btn.addEventListener('click', () => {
                window.open(link, '_blank');
            });

            container.appendChild(btn);
        }
    }

});


// =========================
// Mensagens
// =========================
function enviarMensagem() {
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !mensagem) {
        alert("Preencha todos os campos!");
        return;
    }

    const lista = document.getElementById("lista-mensagens");

    if (lista) {
        const novaMensagem = document.createElement("p");
        novaMensagem.innerText = `${nome}: ${mensagem}`;
        lista.appendChild(novaMensagem);
    }

    document.getElementById("nome").value = "";
    document.getElementById("mensagem").value = "";
}


// =========================
// Matrícula
// =========================
function salvarMatricula() {
    const nome = document.getElementById("nome").value;
    const serie = document.getElementById("serie").value;
    const responsavel = document.getElementById("responsavel").value;

    if (!nome || !serie || !responsavel) {
        alert("Preencha todos os campos!");
        return;
    }

    const lista = document.getElementById("lista-matriculas");

    if (lista) {
        const item = document.createElement("p");
        item.innerText = `${nome} - ${serie} (${responsavel})`;
        lista.appendChild(item);
    }

    document.getElementById("nome").value = "";
    document.getElementById("serie").value = "";
    document.getElementById("responsavel").value = "";
}