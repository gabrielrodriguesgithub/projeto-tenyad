const botaoLogar = document.getElementById("logar")

botaoLogar.addEventListener("click",() => {
    window.location.href = "index.html"
})
var texto = document.querySelector(".mensagem-erro");

var botaoEnviar = document.querySelector(".botao__entrar-login-direito")

botaoEnviar.addEventListener("click", () => {
    var inputEmail = document.querySelector(".input__login").value
    alert("sasad")
    if( (inputEmail.search("@") >= 0 ) && (inputEmail.indexOf(".", inputEmail.search("@"))) && (inputEmail.search(" " == -1)){
        alert("boa")
    }
        
    else {
        texto.classList.remove("hide");
        texto.innerHTML = "E-mail invalido";
        return;
    }
        
})

