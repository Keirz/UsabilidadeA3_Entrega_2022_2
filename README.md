## A3 AVALIAÇÃO FORMATIVA USABILIDADE E DESENVOLVIMENTO 2022_2:

Componentes da equipe:
- Ariane Santos Gomes
- Gabriel Santos
- Pedro Azevedo de Queiróz
- João Pedro


## DO CONCEITO DO PROJETO "ReforçA+":
- As paletas de cores usadas neste projeto se encontram em:
https://color.adobe.com/My-Color-Theme-color-theme-21055343/
- O projeto tem como objetivo prover uma simples solução com poucos custos e poucas complicações de programações para os usuários leigos e novas empresas que buscam entrar no mercado de ensino de reforço escolar privado.

## O QUE FOI UTILIZADO:
- HTML, CSS  e JavaScript => Linguagem básica utilizada por trás.
- Node.js -v 16.17.1
- React JavaScript => Biblioteca padrão para criação de Apps e Pages Reativas.
- Axios Lib => Api para efetuar o Get, Post, Push, Update, Delete das informações no Json-server.
- Json-server Lib => Criado duas apis para abrir em localhost as informações de Profesores e Alunos em .JSON.
- Bootstrap => Lib Framework do Bootstrap
- React-Bootstrap => Lib Framework de React Components do Bootstrap
- uuIDv4 => Criação de ID's únicas para os usuários caso necessite criar um sistema de login com tokens.


## DAS INSTRUÇÕES DE USO:

- Primeiramente irá baixar o arquivo ZIP disponibilizado neste repositório.
- Abrir com o Visual Studio Code.
- Em seguida Abrir o terminal na pasta Entrega_2022_2 e digitar:
-   npm install
-   cd contact-app
-   npm install 
-   npm install axios
-   (caso necessário, npm audit fix --force para corrigir problemas de versões)
-   cd server-api
-   npm install
-   cd server-api-profs
-   npm install

=> Com isso você terá instalado os recursos necessários para rodar o app, agora só falta fazer acontecer com as seguintes linhas de comando:

- Abrir 1 console de comando no Visual Studio Code e digitar:
- cd server-api
- npm start

- Agora abrir um segundo console de comando no Visual Studio Code e digitar:
- cd server-api-profs
- npm start

- Abrir um terceiro console de comando no Visual Studio code e digitar:
- cd contact-app
- npm start


Pronto! Com isso você estará rodando dois json-servers:
- Na porta 3006 se encontra as informações dos Alunos.
- Na porta 3007 se encontra as informações dos Professores.

E na porta principal 3000 estará rodando o App ReforçA+.
