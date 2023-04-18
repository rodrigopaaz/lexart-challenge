<h1 align="center">Lex Art Challenge</h1>

<h3 align="center">Neste projeto Desenvolvi uma webscraping que conecta Mercado Livre e Buscapé, após obter os dados estes são armazenados em um banco de dados, caso seja feita uma busca já relizada anteriormente os dados retornados serão os que já estão armazenados no banco</h3>

## 💻 Sobre o projeto

Uma aplicação que permite a busca de dados no Mercado livre ou buscapé.

---
## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
<details>

## 🚀 Setup para rodar a aplicação
Para rodar localmente esta aplicação, siga os passos abaixo:

1.  Abra seu terminal e crie uma pasta (O projeto será instalado dentro dela):

```
mkdir repositorio
```

2.  Clone este repositório:

```
cd repositorio
git clone https://github.com/rodrigopaaz/lexart-challenge
```

3.  Instale as dependências (pode levar alguns minutos):

```
cd lexart-challenge/backend
npm install
npm start

Abra um novo terminal
cd frontend
npm install
```



4.  Inicie a aplicação:

```
npm start
```

Para rodar localmente esta aplicação com docker, siga os passos abaixo:


1.  Abra seu terminal e crie uma pasta (O projeto será instalado dentro dela):

```
mkdir repositorio
```

2.  Clone este repositório:

```
cd repositorio
git clone https://github.com/rodrigopaaz/lexart-challenge
```
3.  Instale as dependências (pode levar alguns minutos):


```
npm install
```

4. Rode os containers

```
cd repositorio
docker-compose up -d
```
5. Acesse os containers

6. Nos respectivos containers digite

```
npm start
```
...

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
-   **[Node.js](https://nodejs.org/en/)**
-   **[Express](https://expressjs.com/)**
-   **[Sequelize](https://sequelize.org/)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[Docker](https://www.docker.com/)**
-   **[MySQL](https://www.mysql.com/)**
-   **[Mocha](https://mochajs.org/)**
-   **[Chai](https://www.chaijs.com/)**
