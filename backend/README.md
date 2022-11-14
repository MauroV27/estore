# Funcionamento do backend

## Instalando os recursos do backend

### 1. Código
Para executar o código é necessário usar o comando : `npm install`

### 2. Carregar o esquema do banco de dados em um servidor postgress
Para isso é necessário:
1. Abrir o arquivo [ecommerce.sql](https://github.com/MauroV27/estore/blob/main/ecommerce.sql) em um gerenciador de banco de dados, como PgAdmin.
2. Criar um arquivo .env na pasta raiz e colocar o valor DATABASE_URL da seguinte forma, subtituindo os campos de acordo com os valores do servidor postgres: 
```enviroment
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
```

### 3. Uso de um cliente de API

Esse backend não contêm nenhum elemento de view, dessa forma a melhor forma de enviar e receber os dados do servidor é usando um sistema de Client API, como o software [https://insomnia.rest/](https://insomnia.rest/) que pode fazer requisições e receber respostas do servidor por meio de pacotes do tipo json.

## Executando o código

```terminal
npm run startDev
```
