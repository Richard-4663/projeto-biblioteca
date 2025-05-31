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