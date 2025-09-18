document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
    login();
}
});

function SouGerenciador(){
    if (window.innerWidth >= 952){
        let intro = document.getElementsByClassName("intro")[0]
        intro.style.animationName = "SouGerenciador"
        let loginDiag = document.getElementsByClassName("login-container")[0]
        loginDiag.show()
        loginDiag.style.animationName = "fadeIn"
    }else{

        let intro = document.getElementsByClassName("intro")[0]
        intro.style.animationName = "subirIntro"


        loginDiag = document.getElementsByClassName("login-container")[0]
        loginDiag.show()
        loginDiag.style.animationName = "SouGerenciadorCel"

        document.documentElement.style.height = "100%";
        document.documentElement.style.padding = "50px";
}
}


function login(){
    const email = document.getElementById("username")
    const senha = document.getElementById("password")
    
    if (email.value == "Richard_4663" && senha.value == "123456"){
        localStorage.setItem("autorizado", "sim")
        window.location.href = "home.html"
    }
    else{
        
        let error = document.getElementById("error")

        error.style.display = "block"
        error.style.animationName = "errorAnim"

    }
}
