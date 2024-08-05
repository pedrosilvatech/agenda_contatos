const form = document.getElementById('form-contatos');
let nomes = [];
let numeros = [];


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputNumero = document.getElementById('numero-pessoa');

    nomes.push(inputNomePessoa.value);
    numeros.push(parseFloat(inputNumero.value));

    let linha = '<tr>';
    linha += `<td>${inputNomePessoa.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`; 
    linha += '</tr>';

    linhas += linha;

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

