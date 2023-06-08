function leDados(){
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if(strDados){
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = { contatos: [ 
            {nome: "João da Silva", telefone: "31-98795-5587"},
            {nome: "Maria das Graças", telefone: "31-98795-5547"},
            {nome: "Pedro Gomes", telefone: "31-98795-6577"}]
        }
    }

    return objDados;
}

function salvaDados(dados){
    localStorage.setItem('db', JSON.stringify(dados));
}

function incluirContato(){
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strnome = document.getElementById('campoNome').value;
    let strtelefone = document.getElementById('campoTelefone').value;
    let novoContato = {
        nome: strnome,
        telefone: strtelefone
    };
    objDados.contatos.push(novoContato);

    // Salvar os dados no localStorage novamente
    salvaDados(objDados);
}

function imprimeDados(){
    let tela = document.getElementById('tela');
    let strHTML = '';
    let objDados = leDados();
    for(i = 0; i < objDados.contatos.length; i++){
        strHTML = strHTML + `<p>${objDados.contatos[i].nome} + ${objDados.contatos[i].telefone}</p>`
    }

    tela.innerHTML = strHTML;
}

// Configura os botões

document.getElementById('btnCarregaDados').addEventListener('click', imprimeDados);
document.getElementById('btnIncluirDados').addEventListener('click', incluirContato);