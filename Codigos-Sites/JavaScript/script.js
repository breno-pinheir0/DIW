var elem = document.getElementById("btnHello"); // Por meio da função "getElementById", obtemos o elemento com id "btnHello"
elem.addEventListener("click", function(){ // toda vez que o usuário clicar no botão, é executada a função que está dentro das chaves
    var divTela = document.getElementById("tela");
    divTela.innerHTML = "Olá Mundo"; // adicionamos no HTML do elemento "tela" o escrito "Olá Mundo"
}, false);