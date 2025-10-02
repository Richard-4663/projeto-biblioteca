function increment() {
  const input = document.getElementById("quantidade");
  input.stepUp();
}

function decrement() {
  const input = document.getElementById("quantidade");
  input.stepDown()
}

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

let livros = JSON.parse(localStorage.getItem("livros")) || [];

let livro = livros.find(l => l.id === id);

document.getElementById("titulo").value = livro.titulo;
document.getElementById("autor").value = livro.autor;
document.getElementById("genero").value = livro.genero;
document.getElementById("sinopse").value = livro.sinopse;
document.getElementById("quantidade").value = livro.quantidade;

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  livro.titulo = document.getElementById("titulo").value;
  livro.autor = document.getElementById("autor").value;
  livro.genero = document.getElementById("genero").value;
  livro.sinopse = document.getElementById("sinopse").value;
  livro.quantidade = document.getElementById("quantidade").value;

  
  localStorage.setItem("livros", JSON.stringify(livros));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

  window.location.href = "home.html";
});


function excluirLivro(id) {
  let livros = JSON.parse(localStorage.getItem("livros")) || [];
  livros = livros.filter(l => l.id !== id); 
  localStorage.setItem("livros", JSON.stringify(livros));
  window.location.href = "home.html"
}

const btnExcluir = document.querySelector(".excluir-btn");
btnExcluir.addEventListener("click", () => excluirLivro(id));

function sair(){
    localStorage.removeItem("autorizado")
    window.location.href = "index.html"
}

function abrirContact(){
    const dialog = document.getElementsByClassName("contato")[0];
    dialog.showModal();
}

function fecharContact(){
    const dialog = document.getElementsByClassName("contato")[0];
    dialog.close();
}