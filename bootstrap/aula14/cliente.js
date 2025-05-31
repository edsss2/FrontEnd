const API = "https://67d0b74b825945773eb1b9fe.mockapi.io/cliente";
let clientes = [];
function carregarCliente() {
    fetch(API)
        .then(response => response.json())
        .then(dados => {
            clientes = dados;
            montarTabela(dados);
        });
}

window.addEventListener('resize', function () {
    let pesquisar = document.getElementById('pesquisar');
    if (this.window.innerWidth >= 992) {
        pesquisar.style.marginTop = '32px';
    }
    if (this.window.innerWidth < 992) {
        pesquisar.style.marginTop = '0px';
    }
})

function montarTabela(dados) {
    const tabela = document.getElementById("tabela-clientes");
    tabela.innerHTML = "";
    dados.forEach(cliente => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${cliente.id}</td>
            <td>${cliente.nome}</td>
            <td>${cliente.telefone}</td>
            <td>${cliente.email}</td>
            <td><button class="btn btn-primary" onclick="editarCliente(${cliente.id})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Editar</button></td>
            <td><button class="btn btn-danger" onclick="excluirCliente(${cliente.id})">Excluir</button></td>
        `;
        tabela.appendChild(tr);

    });
}

function excluirCliente(idCliente) {
    let confirmacao = confirm("Deseja realmente excluir esse cliente?");
    if (!confirmacao) {
        return;
    }
    fetch(`${API}/${idCliente}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(() => {
            carregarCliente();
        });
}

function editarCliente(idCliente) {
    if(idCliente > 0) {
        const cliente = clientes.find(c => c.id === idCliente);
        document.getElementById("cad-id").value = cliente.id;
        document.getElementById("cad-nome").value = cliente.nome;
        document.getElementById("cad-telefone").value = cliente.telefone;
        document.getElementById("cad-email").value = cliente.email;


        fetch(`${API}/${idCliente}`, {
            method: 'PUT'
        })
    }
}

function limparCampos() {
    document.getElementById("cad-id").value = "";
        document.getElementById("cad-nome").value = "";
        document.getElementById("cad-telefone").value = "";
        document.getElementById("cad-email").value = "";
}

function salvarCliente(event) {
    event.preventDefault();

    const id = document.getElementById("cad-id").value;
    const nome = document.getElementById("cad-nome").value;
    const telefone = document.getElementById("cad-telefone").value;
    const email = document.getElementById("cad-email").value;

    const cli = {
        id: id ? parseInt(id) : undefined,
        nome: nome,
        telefone: telefone,
        email: email
    }

    if(cli.id) {
        fetch(`${API}/${clientes.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(cli)
        })
        .then(response => response.json())
        .then(() => {
            carregarCliente();
            limparCampos();
        });
    }
}