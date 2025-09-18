if (localStorage.getItem("autorizado") != "sim") {
        alert("Você não tem autorização para acessar essa página");
        window.location.href = "index.html";
    }

const searchInput = document.getElementById('search-input');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.card'); // seleciona sempre os cards atualizados

    cards.forEach(card => {
        const cardContent = card.querySelector('.card-content');
        const title = cardContent.querySelector('h3').textContent.toLowerCase();
        const author = cardContent.querySelector('#autor').textContent.toLowerCase().replace("autor: ", "");
        const gen_livro = cardContent.querySelector('#genero').textContent.toLowerCase().replace("gênero: ", "");
        const description = cardContent.querySelector('#sinopse').textContent.toLowerCase().replace("sinopse: ", "");

        if (title.includes(searchTerm) || author.includes(searchTerm) || gen_livro.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


function sair(){
    localStorage.removeItem("autorizado")
    window.location.href = "index.html"
}

function IrAdd(){
    window.location.href = "add.html"
}

let livros = JSON.parse(localStorage.getItem("livros")) || [];

  // mostra todos os livros
  const container = document.getElementsByClassName("container")[0];
    container.innerHTML = "";
  livros.forEach(livro => {
    container.innerHTML += `
    
    <div class="card">
            
        <div class="card-content">
            <h3 id="titulo">${livro.titulo}</h3>
            <p id="autor" >Autor: ${livro.autor}</p>
            <p id="genero" >Gênero: ${livro.genero}</p>
            <p id="sinopse" >Sinopse: ${livro.sinopse}</p>
        </div>
        
        <div class="quant_liv_div">
            <p id="quantidade">Quantidade: ${livro.quantidade}/10</p>
        </div>
        <small>ID: ${livro.id}</small><br>
        <a onclick="editar(${livro.id})" class="editar-class"><i class='bxr bx-pencil'></i> Editar</a> 
    </div>
    
    `;
  });


function editar(id){
    window.location.href = "editar.html?id=" + id;
}

function abrirContact(){
    const dialog = document.getElementsByClassName("contato")[0];
    dialog.showModal();
}

function fecharContact(){
    const dialog = document.getElementsByClassName("contato")[0];
    dialog.close();
}