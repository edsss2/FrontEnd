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

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
function somar() {
    let resultado = num1 + num2;
}
function subtrair() {

}
function dividir() {

}
function multiplicar() {

}

