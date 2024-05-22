const botaoLogar = document.getElementById("logar")

botaoLogar.addEventListener("click",() => {
    window.location.href = "index.html"
})
var texto = document.querySelector(".mensagem-erro");

var botaoEnviar = document.querySelector(".botao__entrar-login-direito")

botaoEnviar.addEventListener("click", (event) => {
    var inputEmail = document.querySelector(".input__login").value
    
    if(inputEmail.search("@") >= 0) &&
    (inputEmail.indexOf(".", inputEmail.search("@")) == 1) &&
    (inputEmail.search(" " == -1)) 
    {
        
    }
        
    }else {
        texto.classList.remove("hide");
        texto.innerHTML = "E-mail invalido";
        return;
    }
        
})

