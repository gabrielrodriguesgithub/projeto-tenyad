const botaoLogar = document.getElementById("logar")

botaoLogar.addEventListener("click",() => {
    window.location.href = "index.html"
})

var inputEmail = document.querySelector(".input__login")
var botaoEnviar = document.querySelector(".botao__entrar-login-direito")

botaoEnviar.addEventListener("click", () => {
    alert(inputEmail)
})
