document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
    login();
}
});

function SouGerenciador(){
    if (window.innerWidth >= 600){
        let intro = document.getElementsByClassName("intro")[0]
        intro.style.animationName = "SouGerenciador"
        let loginDiag = document.getElementsByClassName("login-container")[0]
        loginDiag.show()
        loginDiag.style.animationName = "fadeIn"
    }else{
        loginDiag = document.getElementsByClassName("login-container")[0]
        loginDiag.show()
        loginDiag.style.animationName = "SouGerenciadorCel"
}
}




function login(){
    const email = document.getElementById("username")
    const senha = document.getElementById("password")
    
    if (email.value == "Richard_4663" && senha.value == "123456"){
        localStorage.setItem("autorizado", "sim")
        alert("prossiga, grande lenda!")
        window.location.href = "home.html"
    }
    else{
        alert("usuário ou senha incorretos!")
    }
}

