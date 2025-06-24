'use strict';

// Verifica se é um número
const eNumero = (numero) => /^[0-9]+$/.test(numero);

// Valida o CEP (tem que ter 8 dígitos numéricos)
const cepValido = (cep) => cep.length === 8 && eNumero(cep);

// Preenche os campos do formulário
const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
};

// Limpa os campos
const limparFormulario = () => {
    document.getElementById('endereco').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
};

// Pesquisa o CEP na API
const pesquisarCep = async () => {
    limparFormulario();
    const cep = document.getElementById('cep').value.replace("-", "").trim();
    
    if (cepValido(cep)) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        try {
            const resposta = await fetch(url);
            const endereco = await resposta.json();

            if (endereco.hasOwnProperty('erro')) {
                alert("CEP não encontrado.");
            } else {
                preencherFormulario(endereco);
            }
        } catch (erro) {
            alert("Erro ao buscar o CEP.");
            console.error(erro);
        }
    }
};

// Só adiciona o evento depois que o DOM estiver carregado
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('cep').addEventListener('blur', pesquisarCep);
});