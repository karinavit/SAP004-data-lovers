# Data Lovers

## Índice

* [1. Introdução](#1-introdução)
* [2. Implementação da Interface e Checklist](#2-Implementação-da-interface-e-checklist)
* [3. Histórias de Usuários](#3-histórias-de-usuários)
* [4. Protótipo de baixa fidelidade](#4-protótipo-de-baixa-fidelidade)
* [5. Considerações Finais](#5-considerações-finais)

## 1.Definiçao de Produto
Este projeto foi desenvolvido por [Adriana Fernando](https://github.com/AdrianaFernando) 
e [Karina Vitangelo](https://github.com/karinavit) alunas da 4a Geração da [Laboratoria](https://github.com/Laboratoria) (SAP004).

Para este projeto definimos que será desenvolvida uma apliacação de LOL, com o conjunto de dados à saber:

* [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este conjunto mostra a lista de campeões do jogo League of
  Legends (LoL).
  - [Pesquisa com jogadores de LoL](src/data/lol/README.pt-BR.md)

A proposta deste projeto é  **construir uma página web para visualizar um _conjunto
(set) de dados_** que se adeque às necessidades de seu usuário.

Como entregável final terá uma página web que permita **visualizar dados,
filtrá-los, ordená-los e fazer algum cálculo agregado**. Por cálculo agregado
nos referimos aos diversos cálculos que podem ser feitos com os dados para mostrar a
informação mais relevante para os usuários (médias, valores máximos e mínimos,
etc).

### Planejamento
Com base na Metodologia Ágil, foi criado um quadro no Trello, onde definimos tarefas de acordo com cada história de usuário, veja mais sobre as [3. Histórias de Usuários](#3-histórias-de-usuários)
e assim conseguíamos acompanhar, revisar e ajustar conforme necessário.

### Nosso Quadro
![oie_QJJWTbmwP3xv](https://user-images.githubusercontent.com/61189470/91669798-332e2680-eaee-11ea-88f8-ed9f2657b3e3.png)

## 2. Implementação da Interface e Checklist
Em nossa aplicação que pode ser visualizada neste [link](https://karinavit.github.io/SAP004-data-lovers/src/) no GitHub Pages, o usuário entra com seu nome e na tela seguinte tem uma breve saudação e curiosidade sobre o LOL.

**Imagem da Tela Inicial**
![DataLovers](https://user-images.githubusercontent.com/61189470/90974049-fe264080-e4fd-11ea-96e9-044b3d6ab281.png)

Ao clicar no link campeões, a página apresentada é possível que o usuário faça as seguintes interações:
- [x] Ordenar os personagens de forma crescente e decrescente
- [x] Filtrar por tipo de campeão ( Assasino, Tanque, Suporte, etc...)
- [x] Buscar personagem por nome, em todas as formas letras maiusculas e minusculas
- [x] Ao filtrar o tipo de campeão, uma curiosidade aparece dizendo a procentagem do tipo.

Implementamos a interface conforme checklist abaixo:

- [x] Usar VanillaJS.
- [x] Não utilizar `this`.
- [x] Passa pelo linter (`npm run pretest`)
- [x] Passa pelos testes (`npm test`)
- [x] Inclui uma definição de produto clara e informativa no `README.md`.
- [x] Inclui histórias de usuário no `README.md`.
- [x] Inclui rascunho da solução (protótipo de baixa fidelidade) no
  `README.md`.
- [x] Inclui uma lista de problemas detectados nos testes de usabilidade no `README.md`.
- [x] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
- [x] UI: Permite ordenar dados por um ou mais campos (asc e desc).
- [x] UI: Permite filtrar dados com base em uma condição.
- [x] UI: É responsivo.


## 3. Histórias de Usuários

### Definição da Persona
Nossa persona chama-se Alisson, 25 anos, mora na cidade de São Paulo com os pais e dois irmãos mais novos, designer gráfico em uma agência de comunicação.
Quando Alisson não está trabalhando ele gosta de ouvir músicas do tipo rock, gosta de filmes de aventura, suspense e animes, gosta de games de rpg e por esse motivo começou a jogar League of Legends. Consome redes sociais, mas não interage muito nelas.
Por não ter muito tempo de jogo no League of Legends, Alisson ainda tem dificuldade em achar o campeão ideal para seu tipo de jogo e busca sempre qual campeão usar para ter uma melhor performance no jogo.
Com base nesta persona construímos nossas histórias de usuaŕio.

### História de usuário 1:
"Eu como usuário gostaria de entender como vai funcionar o projeto de acordo com as minhas necessidades."

A definição de pronto da história de usuário 1, se dá por meio de pesquisa inicial onde coletamos informações cruciais para o inicio da implementação do projeto.
Você pode conferir o resumo da pesquisa neste link:

### História de usuário 2:
"Eu como usuário gostaria de visualizar as informações em tela assim como mostra o protótipo de forma mais confortável. Com isso, eu já sei o que e como buscar no aplicativo."

A definição de prondo da história de usuário 2 se dá na construção das páginas iniciais da aplicação de modo a ficar simples a visualização.


### História de usuário 3:
"História de usuário 3 - Eu como usuário gostaria de interagir com a página de modo a filtrar e ordenar os personagens na tela."

A definição de pronto da história de usuário 3, se dá quandp os filtros de ordenar e buscar estão concluídos na aplicação.


## 4. Protótipo de baixa fidelidade
Nosso protótipo foi implementado no papel, conforme sequência de imagens abaixo:

#### Imagem 01 - Tela inicial

![IMG-20200517-WA0009](https://user-images.githubusercontent.com/61189470/82395681-66a6e280-9a22-11ea-8f98-85168603070e.jpg)

#### Imagem 02 - Tela de Boas Vindas
![IMG-20200517-WA0012](https://user-images.githubusercontent.com/61189470/82395689-6ad30000-9a22-11ea-8cf8-b5f1260d22c2.jpg)

#### Imagem 03 - Tela de Campeões
![IMG-20200517-WA0013](https://user-images.githubusercontent.com/61189470/82395692-6c042d00-9a22-11ea-9b5a-33b8d9849a2f.jpg)

#### Imagem 04 - 
![IMG-20200517-WA0014](https://user-images.githubusercontent.com/61189470/82395695-6dcdf080-9a22-11ea-8f9c-2838055f75f6.jpg)


Implementamos o protótipo no Marvel, veja neste [link](https://marvelapp.com/4fa0hbe)  e teste também!

#### Testes de usabilidade
Realizamos testes de usabilidade com base no protótipo acima. O mesmo nos trouxe uma aceitação em 100% com relação ao layout de fácil entendimento, veja neste [link](https://drive.google.com/file/d/17i8f8b4D3puQMu0jJ0CgbDwF4lAdX2_4/view?usp=sharing) as respostas da nossa pesquisa.

## 5. Considerações Finais
Visando melhorar constantemente nossa aplicação, abaixo inserimos itens para implementação futura:
* [ ] Melhorias no CSS conforme pesquisa
* [ ] Testes unitários cobrem um mínimo de 70% de statements, functions,
  lines e branches.