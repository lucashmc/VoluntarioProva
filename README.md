# VoluntarioProva
 
Voluntário Prova é um projeto web desenvolvido com o objetivo de conectar pessoas que desejam ajudar com ONGs que precisam de apoio. A proposta do site é permitir que qualquer pessoa cadastre uma ONG e divulgue sua causa, possibilitando que outras pessoas conheçam e se engajem como voluntárias ou apoiadoras.

O sistema é composto por uma página de cadastro de ONGs e uma página de visualização onde as informações cadastradas são exibidas. Todo o processo acontece de forma local, sem necessidade de banco de dados, utilizando o armazenamento local do navegador (localStorage). Além disso, o sistema utiliza a API pública ViaCEP para preencher automaticamente o endereço da ONG a partir do CEP digitado.


Funcionalidades

- Cadastro de ONGs com os dados principais: nome do responsável, nome da ONG, telefone, CPF, endereço, cidade, estado, CEP e categoria.
- Preenchimento automático do endereço por meio da API ViaCEP, a partir do CEP informado.
- Armazenamento dos dados no localStorage do navegador, sem necessidade de banco de dados externo.
- Exibição dos dados das ONGs cadastradas em uma segunda página, com layout limpo e organizado.
- Interface simples, responsiva e compatível com dispositivos móveis.

---

Linguagens Utilizadas

- HTML5: para a estrutura das páginas web.
- CSS3: para estilização dos elementos e layout visual.
- JavaScript: para validação de campos, integração com a API ViaCEP, controle do armazenamento local e exibição dinâmica dos dados.

---

Estrutura de Arquivos

VoluntarioProva/
├── index.html               Página de cadastro de ONGs
├── visualizacao.html        Página que exibe as ONGs cadastradas
├── main.js                  Script principal com lógica do formulário e integração com a API
├── visualizar.js            Script para carregar e mostrar os dados na visualização
├── cadastro.css             Arquivo de estilos usado por ambas as páginas
├── README.md                Documentação do projeto

---

Como Utilizar o Projeto

1. Acesse o link https://lucashmc.github.io/VoluntarioProva
2. Preencha o formulário de cadastro com os dados da ONG
3. O endereço será preenchido automaticamente após digitar o CEP corretamente
4. Clique no botão de envio para registrar a ONG
5. Clique em "ONGs" no menu superior para acessar a página visualizacao.html e ver a ONG cadastrada

Importante: os dados são armazenados apenas no navegador do usuário. Eles não são enviados para nenhum servidor. Se o cache for apagado ou o navegador for reiniciado com limpeza de dados, as informações serão perdidas.

---

Observações Técnicas

- O campo de CEP ativa uma requisição para a API pública ViaCEP, que retorna os dados do endereço. Os campos de rua, cidade e estado são preenchidos automaticamente.
- O envio do formulário não faz uma requisição para servidor, pois utiliza JavaScript para salvar os dados diretamente no navegador.
- Os dados são armazenados no localStorage em formato JSON.
- A visualização das ONGs é feita dinamicamente com base nos dados salvos, exibidos em cartões organizados com HTML e CSS.

---

Autor

Projeto desenvolvido por Lucas Henrique Moraes Costa

Este projeto foi criado como atividade prática de front-end utilizando HTML, CSS e JavaScript.
