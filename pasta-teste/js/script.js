// Navegação (index)
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const link = card.dataset.link;
        if (link) window.location.href = link;
    });
});

// Clique nos itens
document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {

        const pdf = item.dataset.pdf;

        if (pdf) {
            window.open(pdf, "_blank");
        } else {
            alert("Função ainda não implementada 🚧");
        }

    });
});