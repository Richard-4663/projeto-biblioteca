function increment() {
  const input = document.getElementById("quantidade");
  input.stepUp();
}

function decrement() {
  const input = document.getElementById("quantidade");
  input.stepDown()
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const genero = document.getElementById("genero").value;
  const sinopse = document.getElementById("sinopse").value;
  const quantidade = document.getElementById("quantidade").value;

  let livros = JSON.parse(localStorage.getItem("livros")) || [];
  let novoLivro = {
    id: Date.now(),
    titulo,
    autor,
    genero,
    sinopse,
    quantidade
  };


  livros.push(novoLivro);
  localStorage.setItem("livros", JSON.stringify(livros));

  window.location.href = "home.html";
});

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