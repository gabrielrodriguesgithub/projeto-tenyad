

var texto = document.querySelector(".mensagem-erro");


var botaoEnviar = document.querySelector(".botao__entrar-login-direito");


botaoEnviar.addEventListener("click", (event) => {
    
    var inputEmail = document.querySelector(".input__login").value;


    if (inputEmail.includes("@") && inputEmail.includes(".", inputEmail.indexOf("@"))) {
        texto.classList.add("hide");
        alert("O email é válido");
        
    } else {
        texto.classList.remove("hide");
        texto.innerHTML = "E-mail inválido";
        event.preventDefault();
    }
});
