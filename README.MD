# Blue EdTech
## Módulo 3 - Fullstack I
### Projeto da semana 1 

Projeto desenvolvido na semana I no módulo de Fullstack do curso da Blue EdTech. Este app consiste em uma aplicação de CRUD completo usando uma lista pré deficida. Neste projeto fiz o uso da biblioteca 'fs' do NodeJS para persistir os dados em um arquivo .json. O projeto foi estruturado dentro da arquitetura MCV, no caso apenas o 'C'.

O app é em cima de uma ideia de lista de Filmes e Games, ambas sendo persistida em no mesmo arquivo .json com o CRUD funcionando em todos os aspectos.

#### Requisitos

Para execução da aplicação, execute primeiro o comando:
```bash
npm install
```
Ou
```sh
yarn install
```

Feito isso, as dependencias necessárias serão baixadas e com o script abaixo execute a aplicação:

```bash
npm run dev
```
Ou
```sh
yarn dev
```

#### Testes
Para testar a aplicação use uma ferramente como Postman ou Insomnia.
##### Filmes
Teste as requisição da rota filmes em localhost:3000/filmes, onde ja vai ser listado todos os Filmes até então cadastrados no arquivo, ou passando ainda o /id para busca um item especifico com os métodos [GET, POST, PUT, DELETE].

A rota filmes ainda conta com a rota extra localhost:3000/filmes/dodia que retorna um título aleatória da lista ja cadastrada.

##### Games
Teste as requisição da rota games em localhost:3000/games, onde ja vai ser listado todos os games até então cadastrados no arquivo, ou passando ainda o /id para busca um item especifico com os métodos [GET, POST, PUT, DELETE].