# Documentação da Pokedex usando a PokeAPI
<h6 align="center">LINK DO PROJETO:
    
[Pokebox - A pokedex from PokeAPI](https://steady-pony-156e40.netlify.app/ "Pokebox - A pokedex from PokeAPI")</h6>

![React Pokedex](https://github.com/BulboGC/React_Pokedex/raw/main/image.png)

## Introdução

Este é um projeto de Pokedex desenvolvido em React, utilizando a PokeAPI como fonte de dados. A Pokedex é uma aplicação web que permite aos usuários explorar informações sobre os diferentes pokémons, incluindo detalhes como nome, tipo, habilidades e imagens.

## Estrutura do Projeto

    public/
    ├── favicon.ico
    ├── index.html
    ├── logo192.png
    ├── logo512.png
    └── manifest.json

    src/
    ├── Images/
    │ ├── logonav.png
    │ └── wave.png
    ├── Pages/
    │ ├── Home/
    │ │ ├── components/
    │ │ │ ├── index.jsx
    │ │ │ └── style.css
    │ │ └── style.css
    │ ├── Pokemons/
    │ │ ├── components/
    │ │ │ ├── dados.json
    │ │ │ ├── index.jsx
    │ │ │ └── style.css
    │ ├── index.css
    │ ├── index.js
    │ ├── logo.svg
    │ └── reportWebVitals.js
    ├── setupTests.js
    ├── .gitignore
    ├── README.md
    ├── package-lock.json
    └── package.json

markdown


## Páginas Principais

### Home

A página inicial da Pokedex. Ela contém componentes para exibir informações e links para diferentes seções do aplicativo.

- **components/index.jsx**: Componente principal da página inicial.
- **components/style.css**: Estilos CSS específicos para a página inicial.

### Pokemons

A página de detalhes dos pokémons. Ela exibe informações detalhadas sobre um pokémon específico, usando dados da PokeAPI.

- **components/dados.json**: Exemplo de arquivo com dados de pokémons. (Nota: você pode utilizar a PokeAPI para obter esses dados dinamicamente.)
- **components/index.jsx**: Componente principal da página de detalhes dos pokémons.
- **components/style.css**: Estilos CSS específicos para a página de detalhes dos pokémons.

## Configuração e Execução

- **src/index.js**: Ponto de entrada da aplicação React.
- **src/index.css**: Arquivo de estilos globais.
- **src/setupTests.js**: Configuração de testes.

## Recursos Adicionais

- **public/**: Diretório contendo arquivos estáticos que são servidos publicamente.
- **src/Images/**: Diretório para imagens utilizadas na aplicação.
- **src/Pages/**: Diretório contendo as páginas principais da aplicação.

## Uso da PokeAPI

Este projeto utiliza a PokeAPI para obter informações sobre os pokémons. Acesse [PokeAPI](https://pokeapi.co/) para obter mais informações sobre como fazer requisições e utilizar os endpoints disponíveis.

## Contribuição

Se você deseja contribuir com o projeto, sinta-se à vontade para fazer um fork do repositório e criar um pull request com as suas modificações.

## Como Executar o Projeto

1. Certifique-se de ter o Node.js e o npm instalados em sua máquina.
2. Clone o repositório para o seu computador.
3. Navegue até a pasta raiz do projeto e execute o comando `npm install` para instalar as dependências.
4. Execute o comando `npm start` para iniciar o servidor de desenvolvimento e abrir a aplicação no navegador.

## Considerações Finais

Esta documentação fornece uma visão geral da estrutura e organização do projeto da Pokedex usando a PokeAPI. Sinta-se à vontade para expandir e aprimorar o projeto de acordo com suas necessidades.

Lembre-se de manter a documentação atualizada à medida que o projeto evolui. Isso ajudará você e outros desenvolvedores a entenderem e contribuírem com o projeto de forma mais eficaz.
