function mudarCor() {
    let div = document.querySelector('.botao-cor');
    const cores = ['red', 'blue', 'green', 'yellow', 'purple'];
    let cor = Math.floor(Math.random() * cores.length);
    div.style.backgroundColor = cores[cor];
}

function addNaLista() {
    let textoInput = document.getElementById('texto').value;

    if(textoInput == 0) {
        windou.alert('digite uma tarefa');
        return;
    }

    let itemLista = document.createElement('li');
    let textoTarefa = document.createTextNode(textoInput);
    itemLista.appendChild(textoTarefa);
    document.querySelector('.lista').appendChild(itemLista);
}

let contador = 0;
function aumentarNumero() {
    contador++;
    document.getElementById('numero').textContent = contador;
}

function calcular(operacao) {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let resultado = 0;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerText = "Por favor, preencha os dois campos!";
        return;
      }

    switch(operacao) {
        case 'somar':
            resultado = num1 + num2;
            break;
        case 'subtrair':
            resultado = num1 - num2;
            break;
        case 'dividir':
            if (num2 === 0) {
                document.getElementById("resultado").innerText = "Não é possível dividir por zero!";
                return;
            }
            resultado = num1 / num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
    }

    document.getElementById("resultado").innerText = "Resultado = " + resultado;
}