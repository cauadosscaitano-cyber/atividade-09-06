/*function confirmarDados() {
    document.getElementById("resNome").innerText = document.getElementById("nome").value;
    document.getElementById("resNomeCompleto").innerText = document.getElementById("nomeCompleto").value;
    document.getElementById("resCpf").innerText = document.getElementById("cpf").value;
    document.getElementById("resEmail").innerText = document.getElementById("email").value;
    document.getElementById("resWebsite").innerText = document.getElementById("website").value || "Não informado";
    document.getElementById("resEndereco").innerText = document.getElementById("endereco").value || "Não informado";
    
    let bairro = document.getElementById("bairro").value || "-";
    let cidade = document.getElementById("cidade").value || "-";
    document.getElementById("resBairroCidade").innerText = bairro + " / " + cidade;

    let cep = document.getElementById("cep").value || "-";
    let uf = document.getElementById("uf").value;
    document.getElementById("resCepUf").innerText = cep + " / " + uf;

    let tel = document.getElementById("telefone").value || "-";
    let fax = document.getElementById("fax").value || "-";
    document.getElementById("resTelefoneFax").innerText = tel + " / " + fax;

    let dataValor = document.getElementById("dataNasc").value;
    let dataNasc = "-";

    if (dataValor) {
        if (dataValor.includes("-")) {
            let partes = dataValor.split("-"); 
            dataNasc = partes[2] + "/" + partes[1] + "/" + partes[0]; 
        } else {
            dataNasc = dataValor;
        }
    }

    let sexoEle = document.querySelector('input[name="sexo"]:checked');
    let sexo = sexoEle ? sexoEle.value : "Não informado";
    document.getElementById("resDataSexo").innerText = dataNasc + " / " + sexo;

    let cel = document.getElementById("celular").value || "-";
    let estCivil = document.getElementById("estCivil").value;
    document.getElementById("resCelularEstCivil").innerText = cel + " / " + estCivil;

    document.getElementById("resLogin").innerText = document.getElementById("login").value;

    let checkboxes = document.querySelectorAll('input[name="assuntos"]:checked');
    let assuntosSelecionados = [];
    checkboxes.forEach(function(item) {
        assuntosSelecionados.push(item.value);
    });
    document.getElementById("resAssuntos").innerText = assuntosSelecionados.length > 0 ? assuntosSelecionados.join(", ") : "Nenhum assunto selecionado";

    document.getElementById("resultado").style.display = "table";
    document.getElementById("formCadastro").reset();
}*/

function confirmarDados() {
    // Captura de valores do formulário
    document.getElementById("resNome").innerText = document.getElementById("nome").value;
    document.getElementById("resNomeCompleto").innerText = document.getElementById("nomeCompleto").value;
    document.getElementById("resCpf").innerText = document.getElementById("cpf").value;
    document.getElementById("resEmail").innerText = document.getElementById("email").value;
    document.getElementById("resWebsite").innerText = document.getElementById("website").value || "Não informado";
    document.getElementById("resEndereco").innerText = document.getElementById("endereco").value || "Não informado";
    
    let bairro = document.getElementById("bairro").value || "-";
    let cidade = document.getElementById("cidade").value || "-";
    document.getElementById("resBairroCidade").innerText = bairro + " / " + cidade;

    let cep = document.getElementById("cep").value || "-";
    let uf = document.getElementById("uf").value;
    document.getElementById("resCepUf").innerText = cep + " / " + uf;

    let tel = document.getElementById("telefone").value || "-";
    let fax = document.getElementById("fax").value || "-";
    document.getElementById("resTelefoneFax").innerText = tel + " / " + fax;

    // Tratamento e conversão da data para o padrão brasileiro
    let dataValor = document.getElementById("dataNasc").value;
    let dataNasc = "-";

    if (dataValor) {
        if (dataValor.includes("-")) {
            let partes = dataValor.split("-"); 
            dataNasc = partes[2] + "/" + partes[1] + "/" + partes[0]; 
        } else {
            dataNasc = dataValor;
        }
    }

    let sexoEle = document.querySelector('input[name="sexo"]:checked');
    let sexo = sexoEle ? sexoEle.value : "Não informado";
    document.getElementById("resDataSexo").innerText = dataNasc + " / " + sexo;

    let cel = document.getElementById("celular").value || "-";
    let estCivil = document.getElementById("estCivil").value;
    document.getElementById("resCelularEstCivil").innerText = cel + " / " + estCivil;

    document.getElementById("resLogin").innerText = document.getElementById("login").value;

    let checkboxes = document.querySelectorAll('input[name="assuntos"]:checked');
    let assuntosSelecionados = [];
    checkboxes.forEach(function(item) {
        assuntosSelecionados.push(item.value);
    });
    document.getElementById("resAssuntos").innerText = assuntosSelecionados.length > 0 ? assuntosSelecionados.join(", ") : "Nenhum assunto selecionado";

    // Mostra a tabela de confirmação na tela
    document.getElementById("resultado").style.display = "table";
}

// Nova função: Executada ao clicar em 'Enviar Dados Corretos'
function enviarDados() {
    alert('Dados enviados com sucesso!');
    
    // Faz a tabela sumir
    document.getElementById("resultado").style.display = "none";
    
    // Limpa o formulário principal somente agora que foi enviado de verdade
    document.getElementById("formCadastro").reset();
}

// Executada se o usuário clicar em 'Retomar' no formulário principal
function limparConfirmacao() {
    document.getElementById("resultado").style.display = "none";
}