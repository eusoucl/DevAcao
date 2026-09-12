# DevAção

Projeto front-end desenvolvido como atividade prática acadêmica.

A DevAção é uma organização fictícia criada com o objetivo de ensinar programação para iniciantes e aproximar mais pessoas da área de tecnologia.

## Objetivo do projeto

O projeto foi desenvolvido para aplicar, de forma prática, conceitos de HTML, CSS e JavaScript, além de organização de código, responsividade, acessibilidade, armazenamento local, versionamento com Git e preparação para publicação.

## Tecnologias utilizadas

HTML5

CSS3

JavaScript

ES6 Modules

LocalStorage

SweetAlert2

Git

GitHub

## Funcionalidades

Navegação em formato SPA utilizando hash routes

Página inicial com informações institucionais

Exibição dinâmica de iniciativas

Cadastro de voluntários

Validação de formulário

Máscaras para CPF, telefone e CEP

Validação de CPF

Armazenamento de cadastros com LocalStorage

Exibição dos voluntários cadastrados

Alertas com SweetAlert2

Modal interativo

Layout responsivo

Menu hambúrguer para dispositivos menores

## Acessibilidade

O projeto recebeu melhorias de acessibilidade seguindo boas práticas relacionadas à WCAG 2.1.

Entre as melhorias implementadas estão:

Navegação por teclado

Estados de foco visíveis

Menu hambúrguer acessível por teclado

Identificação da navegação principal com atributos ARIA

Uso de elementos semânticos

Textos alternativos em imagens

Labels associados aos campos de formulário

Mensagens com aria-live

Modal com role dialog e aria-modal

Controle de foco ao abrir e fechar o modal

Fechamento do modal pela tecla Escape

Gerenciamento de foco durante a navegação da SPA

## Estrutura do projeto

```text
DevAção/
├── css/
│   └── style.css
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── img/
│   ├── Programcorp.png
│   ├── oficina.png
│   ├── trilha.png
│   └── mentoria.png
├── js/
│   ├── app.js
│   ├── cadastro.js
│   ├── storage.js
│   └── templates.js
└── README.md