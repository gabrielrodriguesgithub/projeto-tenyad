
// Seleciona o elemento que exibirá mensagens de erro
var texto = document.querySelector(".mensagem-erro");

// Seleciona o botão de enviar do formulário de login
var botaoEnviar = document.querySelector(".botao__entrar-login-direito");

// Adiciona um listener para o evento de clique no botão de enviar
botaoEnviar.addEventListener("click", () => {
    // Obtém o valor do campo de email
    var inputEmail = document.querySelector(".input__login").value;

    // Verifica se o valor do campo de email contém "@" e "." 
    if (inputEmail.includes("@") && inputEmail.includes(".", inputEmail.indexOf("@"))) {
        // Se o formato do email estiver válido, você pode realizar outras ações aqui
        // Por exemplo, você pode enviar o formulário ou fazer algum outro processamento
        alert("O email é válido");
    } else {
        // Se o formato do email estiver inválido, exibe uma mensagem de erro
        texto.classList.remove("hide");
        texto.innerHTML = "E-mail inválido";
        return;
    }
});
