if (localStorage.getItem("autorizado") != "sim") {
        alert("Você não tem autorização para acessar essa página");
        window.location.href = "index.html";
    }

const searchInput = document.getElementById('search-input');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const author = card.querySelector('p:nth-of-type(2)').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm) || author.includes(searchTerm)) {
            card.style.display = 'block'; // Mostra o card
        } else {
            card.style.display = 'none'; // Esconde o card
        }
    });
});

function sair(){
    localStorage.removeItem("autorizado")
    window.location.href = "index.html"
}

const params = new URLSearchParams(window.location.search);

document.getElementById("titulo").textContent = `${params.get("titulo") || "titulo: N/A"}`;
document.getElementById("autor").textContent = `Autor: ${params.get("autor") || "N/A"}`;
document.getElementById("genero").textContent = `Gênero: ${params.get("genero") || "N/A"}`;
document.getElementById("sinopse").textContent = `Sinopse: ${params.get("sinopse") || "N/A"}`;
document.getElementById("quantidade").textContent = `Quantidade: ${params.get("quantidade") || "0"}`;