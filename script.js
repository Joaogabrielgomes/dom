var inputNome = document.getElementById("nome");
var btnEnviar = document.getElementById("btnEnviar");
var mensagem = document.getElementById("mensagem");
var btnModo = document.getElementById("btnModo");
var body = document.body;

btnEnviar.addEventListener("click", function() {
    var nome = inputNome.value;

    if (nome.trim() === "") {
        mensagem.textContent = "Por favor, digite seu nome.";
    } else {
        mensagem.textContent = "Olá, " + nome + "! Bem-vindo(a)!";
    }
});

btnModo.addEventListener("click", function() {
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
    }
});