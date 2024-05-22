const botaoLogar = document.getElementById("logar");





var texto = document.querySelector(".mensagem-erro");


var botaoEnviar = document.querySelector(".botao__entrar-login-direito");


botaoEnviar.addEventListener("click", () => {
    
    var inputEmail = document.querySelector(".input__login").value;


    if (inputEmail.includes("@") && inputEmail.includes(".", inputEmail.indexOf("@"))) {
        alert("O email é válido");
        window.location.href = "index.html";
});
    } else {
        
        texto.classList.remove("hide");
        texto.innerHTML = "E-mail inválido";
        return;
    }
});
