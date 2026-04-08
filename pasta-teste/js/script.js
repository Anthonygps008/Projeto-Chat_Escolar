// cards (index)
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const link = card.dataset.link;
        if (link) window.location.href = link;
    });
});

// itens (estudante)
document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {

        const link = item.dataset.link;

        if (link) {
            window.location.href = link;
        }

    });
});

//menssagens a escola

function enviarMensagem() {

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !mensagem) {
        alert("Preencha todos os campos!");
        return;
    }

    const lista = document.getElementById("lista-mensagens");

    const novaMensagem = document.createElement("p");
    novaMensagem.innerText = `${nome}: ${mensagem}`;

    lista.appendChild(novaMensagem);

    // limpa os campos
    document.getElementById("nome").value = "";
    document.getElementById("mensagem").value = "";
}

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {

        const link = item.dataset.link;

        if (link) {
            window.open(link, "_blank"); // abre PDF
        }

    });
});

function salvarMatricula() {

    const nome = document.getElementById("nome").value;
    const serie = document.getElementById("serie").value;
    const responsavel = document.getElementById("responsavel").value;

    if (!nome || !serie || !responsavel) {
        alert("Preencha todos os campos!");
        return;
    }

    const lista = document.getElementById("lista-matriculas");

    const item = document.createElement("p");
    item.innerText = `${nome} - ${serie} (${responsavel})`;

    lista.appendChild(item);

    // limpa campos
    document.getElementById("nome").value = "";
    document.getElementById("serie").value = "";
    document.getElementById("responsavel").value = "";
}

// Lista de PDFs
const pdfs = {
  Matemática: 'pdfs/matematica.pdf',
  Português: 'pdfs/portugues.pdf',
  História: 'pdfs/historia.pdf',
  Ciências: 'pdfs/ciencias.pdf'
};

// Seleciona o container onde os botões vão aparecer
const container = document.getElementById('pdf-buttons'); // <div id="pdf-buttons"></div> no HTML

// Cria os botões dinamicamente
for (const [nome, link] of Object.entries(pdfs)) {
  const btn = document.createElement('button');
  btn.textContent = nome;
  btn.style.margin = '5px';      // estilo simples
  btn.style.padding = '10px 20px';
  btn.style.cursor = 'pointer';

  // Ao clicar, abre o PDF em nova aba
  btn.addEventListener('click', () => {
    window.open(link, '_blank');
  });

  container.appendChild(btn);
}