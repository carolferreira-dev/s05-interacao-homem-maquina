# Questionário - Introdução ao Front-End

S05 - Interação Homem Máquina - tópico "Introdução ao Front-End".
Fonte: Moodle do Inatel (https://moodle.inatel.br/mod/quiz/view.php?id=23154).

**Leitura indicada:** tópico 15.3 Análise de interfaces, do capítulo 15 do livro *Engenharia de Software*, de Roger S. Pressman (8ª ed.). Arquivo: `Livros/Pressman - Engenharia de Software 8ª ed - S05.pdf`.

**Regras**
- Tentativas ilimitadas; vale a nota mais alta.
- Depois da data de fechamento, não aceita novas submissões.
- Não entra nos Exercícios Práticos (30% da NP), mas o conteúdo cai na prova.

**Minha tentativa:** tentativa 1, enviada em 24/08/2026 às 15:35 — **110,00 / 110,00 (nota 100,00 / 100,00)**. 11 de 11 questões corretas.

Gabarito abaixo, tirado da revisão da tentativa. A alternativa correta está em **negrito**, seguida da justificativa do professor.

---

### 1. Qual é o objetivo central da Análise e Modelagem de Tarefas (Task Analysis) no contexto do projeto de interfaces do usuário?

a. Determinar o modelo de processo de desenvolvimento de software (ex: espiral ou incremental) mais adequado para a equipe.
**b. Descrever o trabalho a ser realizado pelo usuário, identificando a sequência de atividades (fluxo de trabalho) e os objetos de domínio que serão manipulados na interface.** ✅
c. Estimar o custo e o esforço necessários para o projeto de código, utilizando métricas como Pontos de Função (FP).
d. Priorizar os requisitos não funcionais, como desempenho e segurança, para o primeiro incremento do sistema.

> A análise de tarefas se concentra em identificar o trabalho que o usuário executa, as tarefas, subtarefas, o fluxo de trabalho e os objetos de domínio manipulados para atingir seus objetivos.

### 2. Em qual momento o analista de software, durante o processo de Elaboração de Tarefas, corre o maior risco de cruzar a linha da Análise (o que o sistema deve fazer) para o Projeto (como o sistema será implementado)?

a. Ao definir os cenários primários de uso e identificar as exceções prováveis (Refinamento de Casos de Uso).
b. Ao identificar o conjunto inicial de objetos de domínio e suas responsabilidades (Elaboração de Objetos).
**c. Ao detalhar excessivamente a lógica procedimental interna e especificar estruturas de dados ou algoritmos de implementação.** ✅
d. Ao estabelecer as pré-condições e pós-condições matemáticas para garantir a correção do sistema (Métodos Formais).

> A análise deve partir da "essência" do problema para os detalhes. O risco está em se mover para os detalhes de implementação (o "como"), como a escolha de estruturas de dados ou a especificação de algoritmos, o que é uma atividade de projeto prematuro.

### 3. A Elaboração de Tarefas busca refinar as atividades humanas em subtarefas gerenciáveis. Qual é o principal princípio de engenharia de software que justifica a decomposição hierárquica das tarefas (ex: de uma tarefa principal em subtarefas 1.1, 1.2, 1.3)?

**a. O princípio de "Dividir e Conquistar" (fracionamento ou separação por interesse), tornando problemas complexos mais fáceis de entender e modelar.** ✅
b. O princípio do "Acoplamento Funcional", para garantir que cada tarefa execute uma única função independente.
c. O princípio de "Tolerância a Falhas", assegurando que a falha em uma subtarefa não comprometa a tarefa principal.
d. O princípio da "Inversão da Dependência (DIP)", focando na dependência de abstrações em vez de detalhes.

> O fracionamento (ou "dividir e conquistar") é o princípio fundamental que governa a análise e o projeto, facilitando a compreensão de problemas complexos ao subdividi-los em interesses menores.

### 4. A Análise e Modelagem de Tarefas é uma das quatro atividades estruturais do processo de projeto de interfaces do usuário. Qual aspecto do sistema é o foco primário desta atividade de modelagem?

**a. O trabalho que o usuário deve realizar, a sequência de tarefas (fluxo de trabalho) e os objetos de domínio que serão manipulados.** ✅
b. As restrições do ambiente físico de trabalho, como a iluminação e as configurações de hardware.
c. A análise de risco associada à implementação dos requisitos de desempenho.
d. O perfil demográfico e o nível de treinamento formal dos usuários finais.

> A análise de tarefas se concentra em identificar o trabalho a ser executado pelo usuário, as atividades (tarefas e subtarefas), o fluxo de trabalho e os objetos que o usuário manipula para atingir seus objetivos.

### 5. Qual artefato de modelagem fornece o ponto de partida mais eficaz para a Análise e Modelagem de Tarefas, pois descreve a funcionalidade do sistema a partir da perspectiva do ator (usuário)?

a. A Matriz de Rastreabilidade, usada para documentar dependências entre requisitos funcionais e não funcionais.
**b. O Caso de Uso, que descreve um cenário de uso específico e o fluxo de interação, servindo de base para o refinamento em subtarefas.** ✅
c. O Diagrama de Implantação UML, que detalha a distribuição física do software entre servidores.
d. O Diagrama de Classes, que representa a estrutura estática das classes de análise e suas relações.

> O Caso de Uso (ou cenário) é uma narrativa textual que descreve uma função sob o ponto de vista do ator, sendo o ponto de partida a ser refinado na elaboração de tarefas e objetos.

### 6. A Elaboração de Objetos visa identificar os elementos de domínio que o usuário irá manipular. Considere o objeto Sensor em um sistema de segurança:

```
Objeto: Sensor
Atributos: [Nome, Tipo, Localização]
Operações: [Identificar(), Habilitar(), Desabilitar(), Reconfigurar()]
```

O que a definição das Operações (métodos) como `Habilitar()` e `Desabilitar()` representa no contexto da Elaboração de Objetos?

**a. As ações que podem ser aplicadas ao objeto Sensor, estabelecendo as responsabilidades que a interface deve expor ao usuário ou sistema.** ✅
b. A coesão do componente, visando garantir que o módulo execute apenas uma única função no Projeto de Componentes.
c. As restrições de desempenho e segurança que o objeto Sensor deve cumprir no ambiente de tempo real.
d. O cálculo da Complexidade Ciclomática (V(G)) para estimar a quantidade de casos de teste necessários.

> A Elaboração de Objetos define os atributos (o que o objeto sabe) e as operações (o que o objeto faz), que são as ações que podem ser realizadas sobre ou pelo objeto no contexto da tarefa do usuário.

### 7. Qual é o principal risco que o engenheiro de software corre ao estender a Elaboração de Tarefas além da essência do problema e entrar no detalhamento excessivo da lógica procedural?

a. Comprometer a Análise do Ambiente de Trabalho, negligenciando as restrições físicas do hardware.
b. Dificultar a identificação dos requisitos não funcionais, como segurança e confiabilidade, devido à alta abstração.
**c. Misturar a descrição da análise com o projeto, resultando em um modelo de análise que, embora elegante, pode resolver o problema errado.** ✅
d. Reduzir a coesão das classes de análise, tornando-as difíceis de testar e manter.

> O objetivo da análise é focar no "o quê" (a essência do problema). Ao se estender para o "como" (detalhamento da implementação), o analista corre o risco de criar um projeto prematuro que, se baseado em suposições incorretas, pode resolver um problema diferente do que o usuário realmente necessita.

### 8. O modelo de análise de tarefas, ao refinar as atividades humanas em tarefas e subtarefas, estabelece um alicerce para qual elemento subsequente do desenvolvimento de software?

a. A definição das características do ambiente de trabalho (como hardware e condições físicas) que podem restringir a solução de software.
**b. O projeto da interface do usuário (UI), fornecendo as ações, objetos e fluxo de trabalho que a interface deve suportar.** ✅
c. O cálculo das métricas de complexidade do código, como a Complexidade Ciclomática, para estimar o esforço de teste necessário.
d. A criação da especificação do projeto do sistema, detalhando a arquitetura e a alocação de componentes.

> O modelo de análise (incluindo o modelo de usuário e o modelo de tarefas) tem o propósito de estabelecer uma base para o projeto. A análise de tarefas fornece o detalhamento do trabalho, dos objetos e das ações que são essenciais para o projeto da interface do usuário.

### 9. O que o analista deve garantir ao realizar a Elaboração de Tarefas, ou seja, ao decompor tarefas principais em subtarefas detalhadas para o projeto de interfaces?

**a. Que as subtarefas e o fluxo de trabalho sejam consistentes com o Modelo de Usuário e com as metas que o usuário busca alcançar.** ✅
b. Que o detalhamento inclua a sintaxe da linguagem de programação que será usada para implementar os métodos.
c. Que o processo de refinamento seja concluído antes da negociação dos requisitos não funcionais.
d. Que a interface resultante seja unificada para todos os papéis (atores), visando a consistência estética do projeto.

> O refinamento das tarefas e subtarefas (elaboração) deve ser realizado de maneira consistente com o modelo de usuário (o perfil do ator) para garantir que a interface projetada suporte adequadamente as atividades e metas do usuário.

### 10. Qual é a implicação prática para a interface quando a análise de tarefas de um ator revela a necessidade de uma subtarefa de processamento (automatizado), como o cálculo de custos?

a. O projetista deve desenvolver uma Matriz de Rastreabilidade para todos os requisitos de segurança relacionados ao processamento de dados.
b. O detalhe excessivo dessa lógica procedural deve ser imediatamente abstraído para evitar o risco de realizar um projeto prematuro.
c. A interface deve incluir mecanismos para que o usuário insira parâmetros para a execução de testes de esforço e desempenho.
**d. O software deve executar essa subtarefa automaticamente, exigindo pouca ou nenhuma interação direta do usuário na interface para concluí-la.** ✅

> A análise de tarefas distingue entre atividades de manipulação de informações (interação direta do usuário) e as de processamento, que são aquelas que o software pode realizar automaticamente, sem a necessidade de intervenção direta do usuário na interface.

### 11. (Repete a questão 10, com as alternativas em outra ordem.)

Qual é a implicação prática para a interface quando a análise de tarefas de um ator revela a necessidade de uma subtarefa de processamento (automatizado), como o cálculo de custos?

a. A interface deve incluir mecanismos para que o usuário insira parâmetros para a execução de testes de esforço e desempenho.
b. O detalhe excessivo dessa lógica procedural deve ser imediatamente abstraído para evitar o risco de realizar um projeto prematuro.
c. O projetista deve desenvolver uma Matriz de Rastreabilidade para todos os requisitos de segurança relacionados ao processamento de dados.
**d. O software deve executar essa subtarefa automaticamente, exigindo pouca ou nenhuma interação direta do usuário na interface para concluí-la.** ✅

---

## Resumo para a prova

- **Análise de tarefas** = descrever o trabalho do usuário: tarefas, subtarefas, fluxo de trabalho e objetos de domínio. É a base do projeto da UI.
- **Ponto de partida:** o caso de uso (visão do ator).
- **Elaboração de tarefas:** decomposição hierárquica ("dividir e conquistar"), sempre consistente com o modelo de usuário e suas metas.
- **Elaboração de objetos:** atributos (o que o objeto sabe) + operações (ações que a interface expõe).
- **Cuidado:** detalhar demais a lógica (estruturas de dados, algoritmos) mistura análise com projeto e pode resolver o problema errado.
- **Subtarefas de processamento** (ex.: cálculo de custos) são feitas pelo software automaticamente, com pouca ou nenhuma interação do usuário.
