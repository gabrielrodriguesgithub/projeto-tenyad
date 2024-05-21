const botaoLogar = document.getElementById("logar")

botaoLogar.addEventListener("click",() => {
    window.location.href = "index.html"
})


var botaoEnviar = document.querySelector(".botao__entrar-login-direito")

botaoEnviar.addEventListener("click", () => {
    var inputEmail = document.querySelector(".input__login").value
    alert(inputEmail)
})
