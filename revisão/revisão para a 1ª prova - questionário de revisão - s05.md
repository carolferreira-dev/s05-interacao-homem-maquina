# Revisão para a 1ª Prova - Questionário de Revisão (com gabarito)

S05 - Interação Homem Máquina - tópico "Revisão para 1ª Prova".
Fonte: Moodle do Inatel, [Questionário - Revisão para a Prova](https://moodle.inatel.br/mod/quiz/view.php?id=23169) e [Questões Extras sobre Animação](https://moodle.inatel.br/mod/quiz/view.php?id=23309).

**Prova:** 25 questões objetivas de múltipla escolha, podendo ter trechos de código para análise. Conteúdo: Introdução ao Front-End, HTML, CSS & JS, Grid e Responsividade, Cores, Tipografia e Ícones, Imagens e Vídeos, Interação e Animação.

**Parte 1:** as 76 questões do Questionário de Revisão, na ordem do Moodle (a questão 11 repete a 10). **Parte 2:** as 5 questões extras sobre animação.

O gabarito vem das páginas de revisão que eu já tinha (nos questionários 01 a 06 as justificativas são do professor; nas de Grid e Responsividade são explicações minhas). A alternativa correta está em **negrito**. A ordem das alternativas é a do questionário de origem, então pode estar diferente da que aparecer para você no Moodle.

As tentativas em branco que enviei no Moodle (nota 0) não afetam nada: vale a nota mais alta.

---

## Parte 1 - Questionário de Revisão para a Prova

### 1. Qual é o objetivo central da Análise e Modelagem de Tarefas (Task Analysis) no contexto do projeto de interfaces do usuário?

a. Determinar o modelo de processo de desenvolvimento de software (ex: espiral ou incremental) mais adequado para a equipe.
**b. Descrever o trabalho a ser realizado pelo usuário, identificando a sequência de atividades (fluxo de trabalho) e os objetos de domínio que serão manipulados na interface.** ✅
c. Estimar o custo e o esforço necessários para o projeto de código, utilizando métricas como Pontos de Função (FP).
d. Priorizar os requisitos não funcionais, como desempenho e segurança, para o primeiro incremento do sistema.

*Origem: Questionário 01 - Introdução ao Front-End.*

> A análise de tarefas se concentra em identificar o trabalho que o usuário executa, as tarefas, subtarefas, o fluxo de trabalho e os objetos de domínio manipulados para atingir seus objetivos.

### 2. Em qual momento o analista de software, durante o processo de Elaboração de Tarefas, corre o maior risco de cruzar a linha da Análise (o que o sistema deve fazer) para o Projeto (como o sistema será implementado)?

a. Ao definir os cenários primários de uso e identificar as exceções prováveis (Refinamento de Casos de Uso).
b. Ao identificar o conjunto inicial de objetos de domínio e suas responsabilidades (Elaboração de Objetos).
**c. Ao detalhar excessivamente a lógica procedimental interna e especificar estruturas de dados ou algoritmos de implementação.** ✅
d. Ao estabelecer as pré-condições e pós-condições matemáticas para garantir a correção do sistema (Métodos Formais).

*Origem: Questionário 01 - Introdução ao Front-End.*

> A análise deve partir da "essência" do problema para os detalhes. O risco está em se mover para os detalhes de implementação (o "como"), como a escolha de estruturas de dados ou a especificação de algoritmos, o que é uma atividade de projeto prematuro.

### 3. A Elaboração de Tarefas busca refinar as atividades humanas em subtarefas gerenciáveis. Qual é o principal princípio de engenharia de software que justifica a decomposição hierárquica das tarefas (ex: de uma tarefa principal em subtarefas 1.1, 1.2, 1.3)?

**a. O princípio de "Dividir e Conquistar" (fracionamento ou separação por interesse), tornando problemas complexos mais fáceis de entender e modelar.** ✅
b. O princípio do "Acoplamento Funcional", para garantir que cada tarefa execute uma única função independente.
c. O princípio de "Tolerância a Falhas", assegurando que a falha em uma subtarefa não comprometa a tarefa principal.
d. O princípio da "Inversão da Dependência (DIP)", focando na dependência de abstrações em vez de detalhes.

*Origem: Questionário 01 - Introdução ao Front-End.*

> O fracionamento (ou "dividir e conquistar") é o princípio fundamental que governa a análise e o projeto, facilitando a compreensão de problemas complexos ao subdividi-los em interesses menores.

### 4. A Análise e Modelagem de Tarefas é uma das quatro atividades estruturais do processo de projeto de interfaces do usuário. Qual aspecto do sistema é o foco primário desta atividade de modelagem?

**a. O trabalho que o usuário deve realizar, a sequência de tarefas (fluxo de trabalho) e os objetos de domínio que serão manipulados.** ✅
b. As restrições do ambiente físico de trabalho, como a iluminação e as configurações de hardware.
c. A análise de risco associada à implementação dos requisitos de desempenho.
d. O perfil demográfico e o nível de treinamento formal dos usuários finais.

*Origem: Questionário 01 - Introdução ao Front-End.*

> A análise de tarefas se concentra em identificar o trabalho a ser executado pelo usuário, as atividades (tarefas e subtarefas), o fluxo de trabalho e os objetos que o usuário manipula para atingir seus objetivos.

### 5. Qual artefato de modelagem fornece o ponto de partida mais eficaz para a Análise e Modelagem de Tarefas, pois descreve a funcionalidade do sistema a partir da perspectiva do ator (usuário)?

a. A Matriz de Rastreabilidade, usada para documentar dependências entre requisitos funcionais e não funcionais.
**b. O Caso de Uso, que descreve um cenário de uso específico e o fluxo de interação, servindo de base para o refinamento em subtarefas.** ✅
c. O Diagrama de Implantação UML, que detalha a distribuição física do software entre servidores.
d. O Diagrama de Classes, que representa a estrutura estática das classes de análise e suas relações.

*Origem: Questionário 01 - Introdução ao Front-End.*

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

*Origem: Questionário 01 - Introdução ao Front-End.*

> A Elaboração de Objetos define os atributos (o que o objeto sabe) e as operações (o que o objeto faz), que são as ações que podem ser realizadas sobre ou pelo objeto no contexto da tarefa do usuário.

### 7. Qual é o principal risco que o engenheiro de software corre ao estender a Elaboração de Tarefas além da essência do problema e entrar no detalhamento excessivo da lógica procedural?

a. Comprometer a Análise do Ambiente de Trabalho, negligenciando as restrições físicas do hardware.
b. Dificultar a identificação dos requisitos não funcionais, como segurança e confiabilidade, devido à alta abstração.
**c. Misturar a descrição da análise com o projeto, resultando em um modelo de análise que, embora elegante, pode resolver o problema errado.** ✅
d. Reduzir a coesão das classes de análise, tornando-as difíceis de testar e manter.

*Origem: Questionário 01 - Introdução ao Front-End.*

> O objetivo da análise é focar no "o quê" (a essência do problema). Ao se estender para o "como" (detalhamento da implementação), o analista corre o risco de criar um projeto prematuro que, se baseado em suposições incorretas, pode resolver um problema diferente do que o usuário realmente necessita.

### 8. O modelo de análise de tarefas, ao refinar as atividades humanas em tarefas e subtarefas, estabelece um alicerce para qual elemento subsequente do desenvolvimento de software?

a. A definição das características do ambiente de trabalho (como hardware e condições físicas) que podem restringir a solução de software.
**b. O projeto da interface do usuário (UI), fornecendo as ações, objetos e fluxo de trabalho que a interface deve suportar.** ✅
c. O cálculo das métricas de complexidade do código, como a Complexidade Ciclomática, para estimar o esforço de teste necessário.
d. A criação da especificação do projeto do sistema, detalhando a arquitetura e a alocação de componentes.

*Origem: Questionário 01 - Introdução ao Front-End.*

> O modelo de análise (incluindo o modelo de usuário e o modelo de tarefas) tem o propósito de estabelecer uma base para o projeto. A análise de tarefas fornece o detalhamento do trabalho, dos objetos e das ações que são essenciais para o projeto da interface do usuário.

### 9. O que o analista deve garantir ao realizar a Elaboração de Tarefas, ou seja, ao decompor tarefas principais em subtarefas detalhadas para o projeto de interfaces?

**a. Que as subtarefas e o fluxo de trabalho sejam consistentes com o Modelo de Usuário e com as metas que o usuário busca alcançar.** ✅
b. Que o detalhamento inclua a sintaxe da linguagem de programação que será usada para implementar os métodos.
c. Que o processo de refinamento seja concluído antes da negociação dos requisitos não funcionais.
d. Que a interface resultante seja unificada para todos os papéis (atores), visando a consistência estética do projeto.

*Origem: Questionário 01 - Introdução ao Front-End.*

> O refinamento das tarefas e subtarefas (elaboração) deve ser realizado de maneira consistente com o modelo de usuário (o perfil do ator) para garantir que a interface projetada suporte adequadamente as atividades e metas do usuário.

### 10. Qual é a implicação prática para a interface quando a análise de tarefas de um ator revela a necessidade de uma subtarefa de processamento (automatizado), como o cálculo de custos?

a. O projetista deve desenvolver uma Matriz de Rastreabilidade para todos os requisitos de segurança relacionados ao processamento de dados.
b. O detalhe excessivo dessa lógica procedural deve ser imediatamente abstraído para evitar o risco de realizar um projeto prematuro.
c. A interface deve incluir mecanismos para que o usuário insira parâmetros para a execução de testes de esforço e desempenho.
**d. O software deve executar essa subtarefa automaticamente, exigindo pouca ou nenhuma interação direta do usuário na interface para concluí-la.** ✅

*Origem: Questionário 01 - Introdução ao Front-End.*

> A análise de tarefas distingue entre atividades de manipulação de informações (interação direta do usuário) e as de processamento, que são aquelas que o software pode realizar automaticamente, sem a necessidade de intervenção direta do usuário na interface.

### 11. Qual é a implicação prática para a interface quando a análise de tarefas de um ator revela a necessidade de uma subtarefa de processamento (automatizado), como o cálculo de custos?

a. O projetista deve desenvolver uma Matriz de Rastreabilidade para todos os requisitos de segurança relacionados ao processamento de dados.
b. O detalhe excessivo dessa lógica procedural deve ser imediatamente abstraído para evitar o risco de realizar um projeto prematuro.
c. A interface deve incluir mecanismos para que o usuário insira parâmetros para a execução de testes de esforço e desempenho.
**d. O software deve executar essa subtarefa automaticamente, exigindo pouca ou nenhuma interação direta do usuário na interface para concluí-la.** ✅

*Origem: Questionário 01 - Introdução ao Front-End.*

> A análise de tarefas distingue entre atividades de manipulação de informações (interação direta do usuário) e as de processamento, que são aquelas que o software pode realizar automaticamente, sem a necessidade de intervenção direta do usuário na interface.

### 12. Considere o seguinte código CSS:

```css
.alert {
  background-color: #f44336;
  color: white;
}
```

Qual é a principal diferença entre a declaração da cor de fundo em `HEX` e a cor do texto em `palavra-chave`?

a. A cor `white` é universalmente suportada, enquanto o valor `#f44336` não é.
b. A cor `white` é mais precisa para o navegador do que o valor hexadecimal `#f44336`.
c. O valor hexadecimal é mais fácil de ser alterado por JavaScript do que a palavra-chave.
**d. O valor `#f44336` é ideal para designers e desenvolvedores que precisam de precisão na cor, enquanto a palavra-chave `white` é mais fácil de ler e entender, sendo uma escolha boa para cores básicas.** ✅

*Origem: Questionário 04 - Cores, Tipografia e Ícones.*

> O hexadecimal é a escolha padrão de quem precisa de precisão exata de cor. Palavras-chave como `white`, `black` ou `red` são intuitivas, fáceis de lembrar e agilizam a escrita para cores que não exigem uma tonalidade específica.

### 13. Qual é a principal função da propriedade `orphans` em CSS?

a. Define o recuo da primeira linha do parágrafo, mantendo-o consistente em todas as páginas.
b. Impede que a última linha de um parágrafo seja a única a aparecer no topo de uma nova página ou coluna.
c. Define o espaçamento entre as linhas do texto, controlando a altura entre elas.
**d. Garante que um número mínimo de linhas de um parágrafo permaneça no topo de uma nova página ou coluna quando o conteúdo é quebrado.** ✅

*Origem: Questionário 04 - Cores, Tipografia e Ícones.*

> Em documentos impressos ou layouts com quebra de página, `orphans` evita que uma ou poucas linhas de um parágrafo fiquem isoladas no topo de uma nova coluna ou página. `widows` faz o oposto: controla o mínimo de linhas que permanecem no final de uma página.

### 14. Em um sistema de design, qual das seguintes propriedades pode ser usada para alterar a cor de um elemento HTML de forma inline usando JavaScript?

a. `setAttribute`
**b. `style.color`** ✅
c. `setProperty`
d. `classList`

*Origem: Questionário 04 - Cores, Tipografia e Ícones.*

> `style.color` é a forma mais direta e usada de alterar a cor do texto via JavaScript: acessa e modifica o estilo embutido (inline) do elemento sem interferir em outras propriedades. Sintaxe: `element.style.color = 'red'`.

### 15. Considere o seguinte código CSS:

```css
.box {
  background-color: hsla(200, 50%, 75%, 0.8);
}
```

Qual é a principal diferença entre esta declaração de cor em `HSLA` e uma em `RGB`?

**a. `HSLA` é mais intuitivo e legível para humanos, pois suas propriedades correspondem mais diretamente à forma como percebemos as cores, tornando-o fácil de ajustar. `RGB` é baseado nos valores aditivos de Red, Green e Blue, que são menos intuitivos.** ✅
b. `RGB` é um sistema de cores para designers, e `HSLA` é um sistema de cores exclusivo para desenvolvedores.
c. A declaração `HSLA` não permite definir a transparência da cor, pois é um sistema mais simples.
d. `HSLA` é um sistema de cores mais antigo e menos suportado pelos navegadores modernos.

*Origem: Questionário 04 - Cores, Tipografia e Ícones.*

> Matiz (hue), saturação (saturation) e luminosidade (lightness) refletem a percepção intuitiva de cor: para escurecer uma cor basta diminuir a luminosidade. No `RGB` seria preciso ajustar os três canais proporcionalmente.

### 16. Considere o seguinte código CSS:

```css
p {
  line-height: 1.5;
  word-spacing: 5px;
}
```

Qual é a principal diferença entre as propriedades `line-height` e `word-spacing`?

a. `line-height` só funciona com unidades relativas (`em`), e `word-spacing` só funciona com unidades absolutas (`px`).
**b. `line-height` define a altura de cada linha de texto, controlando o espaçamento vertical, enquanto `word-spacing` ajusta o espaço horizontal entre as palavras, afetando o fluxo e a legibilidade do texto.** ✅
c. `line-height` define o espaço entre as palavras, enquanto `word-spacing` define o espaço entre as linhas.
d. `line-height` é usado para justificar o texto, enquanto `word-spacing` é usado para alinhar o texto.

*Origem: Questionário 04 - Cores, Tipografia e Ícones.*

> `line-height` controla o espaço vertical entre as linhas de base (a altura da linha) e evita linhas muito próximas. `word-spacing` ajusta o espaço horizontal entre as palavras. Ambas são essenciais para a legibilidade.

### 17. Qual é a principal função da propriedade `hyphens: auto` em CSS, e por que ela é importante para a tipografia?

a. Define o espaçamento entre os caracteres, tornando o texto mais compacto ou mais espaçado, o que é útil para títulos.
**b. Permite que o navegador insira hífens automaticamente em palavras longas que chegam ao final de uma linha, melhorando a quebra de linha e a legibilidade do texto justificado, especialmente em parágrafos que usam `text-align: justify`.** ✅
c. Permite que o texto se alinhe perfeitamente na margem direita, mesmo em parágrafos longos, sem quebrar palavras.
d. Impede que palavras sejam quebradas ao final de uma linha, mantendo-as sempre inteiras.

*Origem: Questionário 04 - Cores, Tipografia e Ícones.*

> Em texto justificado o navegador ajusta o espaço entre as palavras para preencher a linha; palavras longas podem gerar espaços exagerados. Com `hyphens: auto` o navegador quebra essas palavras com hífen, distribuindo melhor o texto.

### 18. Considere o seguinte código CSS:

```css
.card {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}
```

Qual parte da declaração de sombra (`box-shadow`) controla a transparência da cor?

a. `2px 2px`
b. `5px`
**c. `0.3`** ✅
d. `rgb(0, 0, 0)`

*Origem: Questionário 04 - Cores, Tipografia e Ícones.*

> `0.3` é o canal alpha de `rgba(red, green, blue, alpha)`: `0` é totalmente transparente e `1` totalmente opaco. No `box-shadow`, permite sombras sutis e semitransparentes.

### 19. Qual é a principal vantagem de usar um `Style Guide` em um projeto de desenvolvimento web?

a. Permite que os designers trabalhem de forma isolada, sem a necessidade de comunicação com os desenvolvedores.
b. Elimina completamente a necessidade de usar JavaScript para manipular estilos, pois o guia de estilo define tudo estaticamente.
**c. Garante a consistência visual em todo o projeto, fornecendo um conjunto de regras e padrões reutilizáveis para cores, tipografia e componentes, o que acelera o desenvolvimento e facilita a manutenção.** ✅
d. Reduz a quantidade de código HTML, já que muitas classes e IDs se tornam desnecessárias.

*Origem: Questionário 04 - Cores, Tipografia e Ícones.*

> O Style Guide estabelece padrões: a equipe trabalha mais rápido sem reinventar cada componente, a interface fica coesa e a documentação facilita a entrada de novos membros e a manutenção.

### 20. Em um sistema de design, qual é a principal utilidade das cores semânticas?

a. São utilizadas exclusivamente para textos e links, sem aplicação em outros elementos como botões ou fundos.
b. Apenas para decorar a interface, tornando-a mais agradável visualmente.
c. Fornecer uma paleta de cores ilimitada que os designers podem usar livremente.
**d. Associar um significado específico à cor, melhorando a acessibilidade e a usabilidade da interface, pois a cor comunica uma informação clara ao usuário.** ✅

*Origem: Questionário 04 - Cores, Tipografia e Ícones.*

> Cores semânticas criam uma linguagem visual comum: por exemplo, o vermelho indica ação negativa ou erro. Isso orienta o usuário de forma rápida, reforça a informação (acessibilidade) e reduz a carga cognitiva.

### 21. Qual é a principal função da propriedade `text-align` em CSS, e como ela difere de `text-justify`?

a. `text-align` define o recuo da primeira linha do parágrafo, enquanto `text-justify` define o espaço entre as palavras.
b. `text-align` alinha apenas imagens e `text-justify` alinha apenas texto.
**c. `text-align` define o alinhamento horizontal do texto em uma linha (como `left`, `right` ou `center`), enquanto `text-justify` é um valor para `text-align` que distribui o espaço entre as palavras para que o texto se alinhe nas margens esquerda e direita.** ✅
d. `text-align` e `text-justify` têm a mesma função, que é espaçar as palavras para que as linhas se alinhem nas bordas.

*Origem: Questionário 04 - Cores, Tipografia e Ícones.*

> `text-align` é a propriedade principal que controla o alinhamento de um bloco de texto. Os valores `left`, `right`, `center` e `justify` são opções para ela. O `justify` ajusta o espaçamento entre as palavras para que o texto ocupe toda a largura da linha, alinhando-se com ambas as margens.

### 22. Qual é a principal utilidade das Custom Properties (variáveis CSS) para a gestão de cores em um `Style Guide`?

a. Permitem que os desenvolvedores usem nomes de cores que não são suportados pelo navegador, como 'meu-vermelho'.
b. São usadas exclusivamente para definir cores de texto, não sendo aplicáveis a fundos ou bordas.
c. Aumentam a velocidade de carregamento da página, pois reduzem o tamanho do arquivo CSS.
**d. Permitem definir uma cor uma única vez em um local central e reutilizá-la em vários lugares. Isso facilita a alteração da cor em todo o site ao modificar apenas o valor da variável.** ✅

*Origem: Questionário 04 - Cores, Tipografia e Ícones.*

> Evitam a repetição de código: em vez de escrever o mesmo valor (por exemplo, `#ff6347`) em dezenas de lugares, guarda-se numa variável (`--cor-primaria`) e usa-se onde precisar. Se a cor mudar, basta alterar a variável em um único lugar e a mudança se propaga por todo o site.

### 23. Considerando o sistema de cores `HSL` e a declaração de cor `hsl(240, 100%, 50%)`, o que representa o valor de `50%`?

a. O canal Alpha, que define a transparência da cor.
b. O Matiz (Hue), que define a tonalidade da cor.
**c. A Luminosidade (Lightness), que define o brilho ou a claridade da cor.** ✅
d. A Saturação (Saturation), que define a intensidade da cor.

*Origem: Questionário 04 - Cores, Tipografia e Ícones.*

> A Luminosidade é o terceiro valor da sintaxe HSL. Ela controla o brilho da cor: `0%` resulta em preto, `100%` em branco e `50%` na tonalidade pura, sem adição de branco ou preto.

### 24. Considere o seguinte código CSS:

```css
.button {
  text-align: center;
}
.paragraph {
  text-indent: 20px;
}
```

Qual é a principal diferença entre as propriedades `text-align` e `text-indent`?

**a. `text-align` define o alinhamento horizontal de todas as linhas de texto em um bloco, enquanto `text-indent` define o recuo horizontal apenas da primeira linha de um parágrafo.** ✅
b. `text-align` alinha uma única palavra e `text-indent` alinha o parágrafo inteiro.
c. `text-align` define o alinhamento vertical e `text-indent` o alinhamento horizontal.
d. Esta alternativa está incorreta. O `text-align` alinha todas as linhas de texto dentro de um bloco, não apenas uma única palavra. O `text-indent` aplica o recuo apenas à primeira linha do parágrafo, não a todo ele.

*Origem: Questionário 04 - Cores, Tipografia e Ícones.*

> `text-align` controla o alinhamento de todo o conteúdo de texto de um elemento (esquerda, direita, centro ou justificado). `text-indent` aplica um recuo apenas na primeira linha do parágrafo, convenção comum em documentos formais.

### 25. Em um projeto web, qual é a principal vantagem de usar a unidade `rem` em vez de `px` para definir o tamanho da fonte?

a. O valor em `rem` é sempre igual ao valor em `px`, mas a sintaxe é mais curta.
**b. A unidade `rem` permite que o tamanho da fonte seja escalonado em relação ao tamanho da fonte raiz do documento, garantindo que o texto se adapte às preferências do usuário (como o tamanho da fonte padrão do navegador) e melhora a acessibilidade.** ✅
c. A unidade `rem` pode ser usada para definir qualquer medida em CSS, como a largura de um elemento, mas a unidade `px` só funciona com fontes.
d. A unidade `rem` faz com que o texto fique sempre do mesmo tamanho, independentemente do dispositivo ou da configuração do navegador.

*Origem: Questionário 04 - Cores, Tipografia e Ícones.*

> O `rem` se baseia no tamanho da fonte do elemento `html`, que pode ser alterado nas configurações de acessibilidade do navegador. Se o usuário aumentar a fonte padrão, o layout que usa `rem` é redimensionado proporcionalmente, melhorando acessibilidade e usabilidade.

### 26. Qual é a diferença entre a declaração de cores em `RGB` e `RGBA`?

a. `RGB` é um sistema de cores para impressão e `RGBA` é um sistema de cores para telas.
**b. `RGBA` adiciona um canal `alpha` ao `RGB`, que permite controlar a opacidade (transparência) da cor, enquanto o `RGB` só pode ser usado para cores opacas.** ✅
c. `RGB` usa valores de 0 a 100, e `RGBA` usa valores de 0 a 255.
d. `RGBA` é uma sintaxe mais antiga do que `RGB` e não é suportada em todos os navegadores.

*Origem: Questionário 04 - Cores, Tipografia e Ícones.*

> O "A" em `RGBA` é Alpha, um quarto canal que define a opacidade de 0 (totalmente transparente) a 1 (totalmente opaco). O `RGB` tradicional só combina cores para tonalidades opacas.

### 27. Qual é a diferença entre as abordagens de Grid Layout "clássico" e "moderno"?

a. O "clássico" usa `display: grid`, e o "moderno" usa `display: block`.
b. O "clássico" usa Flexbox, e o "moderno" usa o atributo `position`.
c. O "clássico" usa margens e paddings, e o "moderno" usa apenas `position: relative`.
**d. O "clássico" usa principalmente as propriedades `display: block` e `position`, enquanto o "moderno" usa `grid` e `flex`.** ✅

*Origem: Grid e Responsividade (da Revisão).*

> O layout clássico era montado com `display: block`, `float` e `position`; o moderno usa `display: grid` e `display: flex`.

### 28. Considere o seguinte trecho de código CSS:

```css
.container {
  border: 2px solid black;
  padding: 10px;
}
.item {
  margin: 5px;
}
```

Qual é a finalidade principal das propriedades `margin`, `border` e `padding`?

a. `margin` define o espaçamento interno do elemento, `border` a linha em volta, e `padding` o espaçamento externo.
**b. `margin` define o espaçamento externo do elemento, `border` a linha em volta, e `padding` o espaçamento interno.** ✅
c. `margin` define o espaçamento entre as palavras, `border` a fonte, e `padding` a cor do texto.
d. `margin` e `padding` são a mesma coisa, e `border` é a cor de fundo.

*Origem: Grid e Responsividade (da Revisão).*

> Do centro para fora: conteúdo, `padding` (espaço interno), `border` (a linha) e `margin` (espaço externo).

### 29. O que o seguinte código CSS faz:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

**a. Cria um layout de grade responsivo que ajusta automaticamente o número de colunas, garantindo que cada uma tenha no mínimo 250px e o máximo de 1fr do espaço disponível.** ✅
b. Cria uma única coluna com largura fixa de 250px.
c. Cria um layout em grade com colunas de largura fixa, independentemente do tamanho da tela.
d. Define que os itens do grid devem se alinhar a uma única linha.

*Origem: Grid e Responsividade (da Revisão).*

> `repeat(auto-fit, minmax(250px, 1fr))` cria quantas colunas couberem, cada uma com no mínimo 250px, dividindo o espaço restante: grade responsiva sem media query.

### 30. Qual é a tag HTML fundamental para garantir que uma página web se adapte corretamente a diferentes dispositivos, especificando a largura da área de visualização e a escala inicial?

a. `<meta name="author" content="...">`
b. `<meta name="robots" content="index, follow">`
c. `<meta name="description" content="...">`
**d. `<meta name="viewport" content="width=device-width, initial-scale=1.0">`** ✅

*Origem: Grid e Responsividade (da Revisão).*

> A meta tag `viewport` com `width=device-width, initial-scale=1.0` faz a página usar a largura real do dispositivo e a escala inicial 1.

### 31. Qual é a função da tag `<link rel="icon" href="favicon.ico" type="image/x-icon">`?

a. Definir a fonte utilizada no site.
**b. Definir um ícone para a página, que é exibido na aba do navegador e em listas de favoritos.** ✅
c. Vincular um arquivo JavaScript à página.
d. Adicionar um link para uma folha de estilos CSS.

*Origem: Grid e Responsividade (da Revisão).*

> `rel="icon"` define o favicon, mostrado na aba do navegador e nos favoritos.

### 32. Considere o seguinte trecho de código:

```html
<link rel="canonical" href="https://www.meusite.com/pagina-original">
<meta name="robots" content="noindex">
```

O que acontecerá com a página nos resultados de busca?

a. A página será indexada, mas apenas se a URL canônica for igual à URL atual.
**b. A tag `noindex` é o fator determinante: instrui os motores de busca a não indexarem a página, independentemente de qualquer outra tag como a `canonical`. (No Moodle essa alternativa aparece como "Esta alternativa está incorreta. A presença da tag noindex é o fator determinante...", mas é a marcada como correta.)** ✅
c. A página será indexada e a URL canônica será ignorada.
d. A página será indexada, mas o link para a página original será ignorado.

*Origem: Grid e Responsividade (da Revisão).*

> `noindex` manda os buscadores não indexarem a página; ele prevalece sobre a `canonical`.

### 33. Se a resolução física de um dispositivo é de 1080 pixels e o DPR (Device Pixel Ratio) é 2, qual é o cálculo para encontrar a viewport lógica e qual o resultado?

a. Viewport Lógica = 1080 + 2 = 1082 pixels
b. Viewport Lógica = 1080 - 2 = 1078 pixels
c. Viewport Lógica = 1080 x 2 = 2160 pixels
**d. Viewport Lógica = 1080 / 2 = 540 pixels** ✅

*Origem: Grid e Responsividade (da Revisão).*

> Viewport lógica = resolução física ÷ DPR = 1080 / 2 = 540 pixels.

### 34. Considere o seguinte código CSS para um layout:

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
.item {
  flex-basis: 300px;
}
```

Qual é a principal vantagem de usar `display: flex` para criar um layout responsivo?

**a. Proporciona uma maneira eficiente e flexível de organizar, alinhar e distribuir itens em um contêiner, mesmo com tamanhos desconhecidos ou dinâmicos.** ✅
b. Exige que todos os itens tenham a mesma largura e altura.
c. Os itens se sobrepõem uns aos outros, o que dificulta a organização.
d. Permite apenas o alinhamento de itens verticalmente.

*Origem: Grid e Responsividade (da Revisão).*

> O Flexbox organiza, alinha e distribui itens de forma flexível, mesmo com tamanhos dinâmicos; com `flex-wrap: wrap` os itens quebram de linha.

### 35. Para que serve a tag `<title>Titulo do Site</title>` e a meta tag `<meta name="description" content="Descrição breve da página...">`?

a. A tag `<title>` é para o favicon, e a meta tag `description` é para o autor.
**b. A tag `<title>` define o título da página na aba do navegador e nos resultados de busca, e a meta tag `description` fornece um resumo da página para os motores de busca.** ✅
c. Ambas são usadas exclusivamente para aplicar estilos CSS.
d. Ambas são usadas para definir o idioma da página.

*Origem: Grid e Responsividade (da Revisão).*

> `<title>` é o título (aba e resultados de busca); `description` é o resumo para os buscadores.

### 36. Qual é a principal diferença entre `margin` e `padding` em um elemento HTML?

a. `margin` é o espaço interno e `padding` é o espaço externo.
b. `margin` e `padding` são a mesma coisa.
c. `margin` afeta apenas a parte superior de um elemento, enquanto `padding` afeta apenas a inferior.
**d. `margin` cria espaço fora da borda de um elemento, enquanto `padding` cria espaço entre o conteúdo do elemento e sua borda.** ✅

*Origem: Grid e Responsividade (da Revisão).*

> `margin` = espaço fora da borda; `padding` = espaço entre o conteúdo e a borda.

### 37. Considere o seguinte trecho de código:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
  </head>
<body>...</body>
</html>
```

Qual é a principal função do atributo `lang="pt-br"` e da tag `meta charset="UTF-8"`?

**a. O atributo `lang` indica o idioma do conteúdo, e a tag `meta` garante a exibição correta de caracteres especiais e acentuados.** ✅
b. O atributo `lang` define o tipo de documento, enquanto a tag `meta` define a fonte utilizada.
c. O atributo `lang` é para a indexação de motores de busca, e a tag `meta` é para a viewport.
d. O atributo `lang` indica o autor da página, e a tag `meta` é para a descrição da página.

*Origem: Grid e Responsividade (da Revisão).*

> `lang` informa o idioma do conteúdo; `charset="UTF-8"` garante a exibição correta de acentos e caracteres especiais.

### 38. O que as meta tags `<meta name="robots" content="index, follow">` e `<link rel="canonical" href="https://www.seusite.com/pagina">` fazem para a indexação de uma página?

a. Ambas as tags são usadas para definir o tipo de codificação de caracteres do site.
b. A tag `robots` impede a indexação, e a tag `canonical` direciona para outra página.
c. A tag `robots` define a largura da viewport, e a tag `canonical` define o autor da página.
**d. A tag `robots` informa aos motores de busca para indexar a página e seguir seus links, e a tag `canonical` aponta para a URL preferencial da página para evitar conteúdo duplicado.** ✅

*Origem: Grid e Responsividade (da Revisão).*

> `index, follow` = indexar e seguir links; `canonical` = URL preferencial, evitando conteúdo duplicado.

### 39. Qual é a diferença entre as propriedades de layout `display: block` e `display: flex`?

a. `display: block` alinha todos os itens verticalmente, e `display: flex` alinha-os horizontalmente.
**b. `display: block` faz com que um elemento ocupe a largura total disponível e seja exibido em uma nova linha, enquanto `display: flex` cria um contêiner flexível para alinhar e distribuir itens internos.** ✅
c. `display: block` cria um contêiner flexível, enquanto `display: flex` faz com que os elementos ocupem a largura total disponível.
d. Ambas as propriedades têm o mesmo efeito, mas `flex` é a sintaxe mais antiga.

*Origem: Grid e Responsividade (da Revisão).*

> `block` ocupa a largura toda e começa em nova linha; `flex` cria um contêiner flexível para os itens filhos.

### 40. Qual é a principal utilidade das meta tags Open Graph (OG)?

a. Otimizar a velocidade de carregamento de imagens em dispositivos móveis.
b. Definir a fonte e a cor de fundo de uma página web.
**c. Controlar como o conteúdo de uma página é exibido quando compartilhado em redes sociais, como o título, a descrição e a imagem.** ✅
d. Criar animações e efeitos visuais na página.

*Origem: Grid e Responsividade (da Revisão).*

> As tags Open Graph controlam título, descrição e imagem exibidos quando a página é compartilhada em redes sociais.

### 41. Qual a principal função da meta tag `<meta name="keywords" content="palavra-chave1, palavra-chave2, palavra-chave3">`?

**a. Fornecer uma lista de palavras-chave relevantes sobre o conteúdo da página para os motores de busca.** ✅
b. Indicar o autor e a data de criação da página.
c. Definir as tags Open Graph para redes sociais.
d. Definir as cores e o layout do site.

*Origem: Grid e Responsividade (da Revisão).*

> A meta `keywords` lista palavras-chave sobre o conteúdo para os motores de busca.

### 42. Analise o código HTML abaixo:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Título da Página</title>
</head>
<body>
    <header>
        <h1>Logo da Empresa</h1>
    </header>
    <main>
        <p>Conteúdo principal do site.</p>
    </main>
    <footer>
        <p>Rodapé da página.</p>
    </footer>
</body>
</html>
```

Qual é a função principal da tag `<main>` neste contexto?

a. Representar o rodapé de uma seção ou da página inteira.
**b. Agrupar o conteúdo principal e central do corpo do documento (`<body>`).** ✅
c. Conter informações sobre o documento, como o título e a codificação de caracteres.
d. Definir o cabeçalho principal da página, que geralmente contém o logotipo e a navegação.

*Origem: Questionário 02 - HTML, CSS & JS - Parte 1.*

### 43. Em HTML, qual a diferença fundamental entre uma lista não ordenada (`<ul>`) e uma lista ordenada (`<ol>`)?

a. `<ul>` só pode conter textos, enquanto `<ol>` pode conter outras tags HTML, como links e imagens.
b. `<ul>` é usada para itens de navegação, enquanto `<ol>` é usada para qualquer outro tipo de lista.
c. `<ul>` é um elemento de bloco (block-level), enquanto `<ol>` é um elemento em linha (inline).
**d. Os itens de uma `<ul>` são exibidos com marcadores (como pontos), enquanto os itens de uma `<ol>` são numerados, indicando uma sequência.** ✅

*Origem: Questionário 02 - HTML, CSS & JS - Parte 1.*

### 44. Dado o código HTML abaixo, que seletor CSS seria usado para aplicar um estilo exclusivamente ao título (`<h1>`) dentro do primeiro artigo (`<article>`)?

```html
<article class="post">
    <h1>Primeiro Artigo</h1>
    <p>Texto do primeiro artigo.</p>
</article>

<article>
    <h1>Segundo Artigo</h1>
    <p>Texto do segundo artigo.</p>
</article>
```

**a. `.post h1 { ... }`** ✅
b. `h1 { ... }`
c. `article h1 { ... }`
d. `.post > p { ... }`

*Origem: Questionário 02 - HTML, CSS & JS - Parte 1.*

### 45. Considere o seguinte trecho de código CSS e HTML:

```html
<div id="introducao">
    <p class="texto-principal">Bem-vindo ao nosso site!</p>
</div>
<p>Este é um parágrafo fora da introdução.</p>
```

```css
#introducao .texto-principal {
    color: blue;
}
```

Qual elemento terá seu texto colorido de azul?

a. O elemento `<div>` com o id "introducao".
**b. Apenas o parágrafo com a classe "texto-principal" que está dentro do div com id "introducao".** ✅
c. Apenas o parágrafo com o texto "Este é um parágrafo fora da introdução.".
d. Todos os parágrafos da página.

*Origem: Questionário 02 - HTML, CSS & JS - Parte 1.*

### 46. Qual é a principal função do elemento `<iframe>` no HTML, como mostrado no exemplo abaixo?

```html
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Player de vídeo do YouTube"
    frameborder="0"
    allowfullscreen>
</iframe>
```

**a. Incorporar um documento HTML ou conteúdo de outra origem dentro da página atual.** ✅
b. Reproduzir arquivos de áudio locais da pasta do projeto.
c. Criar uma seção de layout com bordas customizáveis.
d. Exibir uma imagem com funcionalidades interativas avançadas.

*Origem: Questionário 02 - HTML, CSS & JS - Parte 1.*

### 47. Observe o elemento de mídia abaixo:

```html
<img src="imagens/logo.png" alt="Logotipo da Empresa XPTO">
```

Qual é a função do atributo `alt` nesta tag?

a. Especificar a largura e a altura da imagem para otimizar o carregamento da página.
**b. Descrever o conteúdo da imagem, sendo exibido caso ela não carregue e utilizado por leitores de tela.** ✅
c. Fornecer um caminho alternativo para a imagem caso o primeiro falhe.
d. Definir o título da imagem, que aparece quando o usuário passa o mouse sobre ela.

*Origem: Questionário 02 - HTML, CSS & JS - Parte 1.*

### 48. Qual é a principal finalidade de utilizar elementos semânticos como `<article>`, `<section>`, `<nav>` e `<aside>` em um documento HTML?

**a. Descrever a estrutura e o significado do conteúdo para navegadores e tecnologias assistivas, melhorando a acessibilidade e o SEO.** ✅
b. Inserir mídias como vídeos e imagens de forma mais otimizada que as tags `<img>` e `<video>`.
c. Aplicar estilos visuais específicos, como cores e fontes, diretamente no HTML.
d. Garantir que o site funcione corretamente em navegadores mais antigos.

*Origem: Questionário 02 - HTML, CSS & JS - Parte 1.*

### 49. A estrutura básica de uma regra CSS é composta por três partes fundamentais. Quais são elas?

**a. Seletor, Propriedade e Valor.** ✅
b. Tag, Classe e ID.
c. Elemento, Atributo e Valor.
d. Arquivo, Estilo e Função.

*Origem: Questionário 02 - HTML, CSS & JS - Parte 1.*

### 50. Quando se trata de vincular uma folha de estilos externa (um arquivo .css) a um documento HTML, qual é a prática recomendada e correta?

a. Usar a tag `<style>` dentro do `<body>` para importar o arquivo com `@import`.
**b. Usar a tag `<link>` dentro da seção `<head>` do documento HTML.** ✅
c. Declarar o caminho para o arquivo CSS através de um atributo `style` na tag `<html>`.
d. Inserir o código CSS diretamente no arquivo HTML usando a tag `<script>`.

*Origem: Questionário 02 - HTML, CSS & JS - Parte 1.*

> A tag `<script>` serve para incorporar ou referenciar scripts (geralmente JavaScript), e não folhas de estilo CSS.

### 51. Em HTML, os atributos fornecem informações adicionais sobre os elementos. Considerando a estrutura `<a href="pagina.html">Clique aqui</a>`, o que `href` representa?

a. Um identificador único para o elemento na página.
b. O texto que será visível para o usuário clicar.
**c. O destino (URL) para onde o link aponta, sendo um atributo essencial da tag `<a>`.** ✅
d. Uma classe CSS para estilização do link.

*Origem: Questionário 02 - HTML, CSS & JS - Parte 1.*

### 52. Um desenvolvedor precisa selecionar o primeiro elemento `<div>` que está dentro de um `<section>`. Qual é o método mais eficiente para essa busca?

a. `document.getElementsByTagName('div')`
**b. `document.querySelector('section div')`** ✅
c. `document.getElementById('div')`
d. `document.getElementsByClassName('div')`

*Origem: Questionário 03 - HTML, CSS & JS - Parte 2.*

> O `querySelector()` aceita seletores CSS. O seletor `'section div'` encontra exatamente o primeiro `<div>` dentro de um `<section>`, sem precisar buscar todos os elementos para depois filtrar.

### 53. Considere o seguinte código HTML:

```html
<button id="btn">Clique aqui</button>
```

Qual o trecho de código JavaScript mais moderno para adicionar um manipulador de evento de clique ao botão, garantindo que outros manipuladores não sejam substituídos?

a. `document.getElementById('btn').eventListener('click', function(){});`
**b. `document.getElementById('btn').addEventListener('click', function(){});`** ✅
c. `document.getElementById('btn').onclick = function() {};`
d. `document.getElementById('btn').clickEvent = function() {};`

*Origem: Questionário 03 - HTML, CSS & JS - Parte 2.*

> O `addEventListener()` é a forma recomendada no JavaScript moderno: permite vários manipuladores para o mesmo evento no mesmo elemento, sem que um interfira nos outros.

### 54. Um usuário arrasta o dedo sobre a tela do celular. Qual evento de toque é disparado repetidamente durante essa ação?

**a. `ontouchmove`** ✅
b. `ontouchcancel`
c. `ontouchend`
d. `ontouchstart`

*Origem: Questionário 03 - HTML, CSS & JS - Parte 2.*

> O `ontouchmove` é acionado continuamente enquanto o dedo é arrastado pela tela. É o ideal para rastrear a posição do dedo e criar interações de arrastar e soltar.

### 55. Considerando o seguinte HTML:

```html
<div class="container">
  <p>Parágrafo 1</p>
  <p>Parágrafo 2</p>
</div>
```

Qual a melhor forma de selecionar todos os elementos `<p>` dentro do `<div>` com a classe container?

a. `document.getElementsByTagName('p')`
b. `document.getElementsByClassName('p')`
**c. `document.querySelectorAll('.container p')`** ✅
d. `document.querySelector('.container p')`

*Origem: Questionário 03 - HTML, CSS & JS - Parte 2.*

> O `querySelectorAll()` aceita um seletor CSS e devolve uma `NodeList` com todos os elementos que casam com ele, aqui todos os parágrafos dentro de `.container`. O `querySelector()` devolve só o primeiro.

### 56. Um usuário precisa mover uma imagem em um plano cartesiano com o mouse. Qual evento é disparado quando o ponteiro do mouse se move sobre a imagem?

a. `onmouseenter`
**b. `onmousemove`** ✅
c. `onmouseout`
d. `onmousedown`

*Origem: Questionário 03 - HTML, CSS & JS - Parte 2.*

> O `onmousemove` é disparado continuamente enquanto o ponteiro se move sobre o elemento e fornece as coordenadas x e y do ponteiro.

### 57. Para criar um novo elemento `<div>` dinamicamente no JavaScript, qual dos métodos a seguir deve ser usado?

**a. `document.createElement('div')`** ✅
b. `document.createElementId('div')`
c. `document.append('div')`
d. `document.createNode('div')`

*Origem: Questionário 03 - HTML, CSS & JS - Parte 2.*

> O `document.createElement()` cria um novo elemento HTML na memória; o nome da tag é passado como string.

### 58. Em qual situação o método `document.querySelectorAll()` é mais apropriado do que `document.querySelector()`?

a. Para selecionar um elemento específico usando seu ID único.
b. Para selecionar o primeiro elemento de uma lista de itens.
c. Para retornar um único nó de uma lista de elementos.
**d. Para obter todos os elementos que compartilham uma mesma classe CSS.** ✅

*Origem: Questionário 03 - HTML, CSS & JS - Parte 2.*

> O `querySelectorAll()` serve para selecionar e manipular vários elementos que casam com um seletor CSS. Ele devolve uma `NodeList` que pode ser percorrida para aplicar estilos ou eventos.

### 59. Considere o seguinte código HTML:

```html
<ul id="lista-produtos">
  <li class="item-produto">Produto A</li>
  <li class="item-produto">Produto B</li>
</ul>
```

Qual o código JavaScript para remover o primeiro `<li>` da lista?

a. `document.querySelector('ul').removeChild(0);`
b. `document.getElementById('lista-produtos').remove();`
**c. `document.getElementById('lista-produtos').removeChild(document.querySelector('.item-produto'));`** ✅
d. `document.querySelector('.item-produto').remove();`

*Origem: Questionário 03 - HTML, CSS & JS - Parte 2.*

> O `removeChild()` é chamado no elemento pai (o `<ul>`, selecionado pelo id) e recebe como argumento o nó filho a remover (o primeiro `<li>`, selecionado com `querySelector`).

### 60. Um usuário clica com o botão direito do mouse em um elemento para abrir um menu de contexto. Qual evento de mouse é disparado?

a. `onmouseup`
b. `onclick`
c. `onmousedown`
**d. `oncontextmenu`** ✅

*Origem: Questionário 03 - HTML, CSS & JS - Parte 2.*

> O `oncontextmenu` é disparado quando o usuário clica com o botão direito sobre um elemento, o que normalmente abre o menu de contexto do navegador.

### 61. Qual é a principal diferença entre `document.getElementById('id')` e `document.querySelector('#id')`?

**a. `getElementById` é mais rápido e só busca por IDs.** ✅
b. `getElementById` retorna uma lista e `querySelector` retorna um elemento.
c. `getElementById` é para IDs e `querySelector` é para classes.
d. `querySelector` é mais antigo e tem mais suporte de navegadores.

*Origem: Questionário 03 - HTML, CSS & JS - Parte 2.*

> O `getElementById()` é otimizado pelos navegadores para buscar por id. O `querySelector()` é genérico (aceita qualquer seletor CSS) e por isso é um pouco mais lento, mesmo para um id. Regra geral: use `getElementById()` sempre que possível.

### 62. A compressão de imagens pode ser classificada como 'lossy' ou 'lossless'. Qual das alternativas a seguir descreve corretamente a característica da compressão 'lossy'?

a. Remove dados da imagem original, mas garante que a imagem final seja uma réplica perfeita da original, sem qualquer alteração perceptível.
b. É ideal para fotografias e imagens com muitas cores, mas não remove dados da imagem original.
**c. Remove dados da imagem original de forma seletiva o que pode resultar em alguma perda de qualidade imperceptível.** ✅
d. Mantém 100% dos dados originais da imagem, resultando em um arquivo menor, mas com uma qualidade ligeiramente inferior.

*Origem: Questionário 05 - Imagens e Vídeos.*

> A compressão lossy (com perda) faz a remoção seletiva de dados: o algoritmo descarta informações menos perceptíveis ao olho humano para gerar um arquivo menor, com perda de qualidade que na maioria das vezes é imperceptível.

### 63. Um desenvolvedor quer que a imagem de capa de um vídeo seja exibida enquanto o vídeo está carregando, mas não quer que os controles de reprodução apareçam para o usuário. Qual é a combinação correta de atributos para o elemento `<video>`?

**a. `poster`, `preload="metadata"`** ✅
b. `preload="auto"`, `controls`
c. `poster`, `autoplay`, `muted`
d. `poster`, `controls`, `preload="none"`

*Origem: Questionário 05 - Imagens e Vídeos.*

> `poster` define a URL da imagem exibida como capa enquanto o vídeo não está disponível ou reproduzindo. `preload="metadata"` faz o navegador baixar só os metadados (duração, dimensões), não o vídeo completo. Sem o atributo `controls`, os controles não aparecem.

### 64. Qual é a principal função dos 'Metadados' de uma imagem?

a. São usados para comprimir a imagem, tornando o arquivo menor e mais leve para a web.
b. Determinam a resolução e o 'aspect ratio' da imagem, informações que não podem ser alteradas sem software especializado.
**c. Armazenam informações sobre a imagem, como data de criação, tipo de câmera, geolocalização, para uso de programas externos.** ✅
d. É uma técnica que esconde informações sensíveis, como a localização da câmera, para proteger a privacidade do usuário.

*Origem: Questionário 05 - Imagens e Vídeos.*

> Metadados descrevem a imagem sem afetar sua aparência. São usados por editores, galerias e plataformas online para catalogar imagens, exibir detalhes da câmera e proteger direitos autorais.

### 65. Qual é a principal vantagem de usar 'Media Queries' no CSS para otimizar a experiência do usuário em diferentes dispositivos, em comparação com o 'Aspect Ratio'?

a. O `aspect ratio` é mais flexível porque define a proporção de um elemento diretamente no CSS, enquanto `media queries` são estáticos e aplicam estilos fixos.
b. `Media queries` ajustam o `aspect ratio` da imagem automaticamente para preencher o espaço disponível na tela, o que simplifica o layout.
**c. `Media queries` permitem aplicar estilos específicos, como tamanhos de imagem e layout, com base nas características da tela, adaptando o design de forma responsiva.** ✅
d. `Media queries` são usados para alterar o formato de vídeo de paisagem para retrato, enquanto o `aspect ratio` é uma propriedade de imagem que mantém a proporção do elemento.

*Origem: Questionário 05 - Imagens e Vídeos.*

> Media queries aplicam regras de CSS conforme as características do dispositivo (como a largura da tela). Essa adaptabilidade define o design responsivo; o `aspect-ratio` é apenas uma das muitas propriedades que podem ser ajustadas dentro de uma media query.

### 66. Qual é o objetivo principal de usar o atributo `sizes` juntamente com `srcset`?

a. O `sizes` força o navegador a carregar a imagem com a maior resolução possível para garantir a máxima qualidade em todas as telas.
b. O `sizes` define a dimensão final da imagem no layout e o `srcset` fornece as versões de alta densidade de pixel para displays retina.
**c. O `sizes` informa o navegador sobre o tamanho da imagem em diferentes breakpoints, permitindo que ele escolha a imagem mais apropriada do `srcset`.** ✅
d. `sizes` informa o navegador sobre o tamanho de exibição final da imagem em diferentes breakpoints.

*Origem: Questionário 05 - Imagens e Vídeos.*

> O `srcset` lista as versões da imagem e suas larguras (ex.: `image-large.jpg 1200w`); o `sizes` informa o tamanho que a imagem ocupará no layout em cada breakpoint. Com os dois, o navegador escolhe o arquivo mais apropriado.

### 67. O 'Aspect Ratio' de uma tela, como 16:9, refere-se à:

a. Orientação da tela (paisagem ou retrato), sendo que 16:9 é usado apenas para a orientação paisagem.
b. Quantidade de pixels por polegada (DPI) da tela, que afeta a nitidez da imagem exibida.
c. A resolução total de pixels da tela, sendo que 16:9 significa que a tela tem 16 pixels de largura para cada 9 pixels de altura.
**d. Proporção entre a largura e a altura da tela, o que determina o formato visual do conteúdo e a experiência do usuário.** ✅

*Origem: Questionário 05 - Imagens e Vídeos.*

> É a relação matemática entre largura e altura (16:9 = 16 unidades de largura para cada 9 de altura). Afeta como imagens e vídeos são formatados e exibidos, evitando distorção.

### 68. Qual dos seguintes trechos de código CSS utiliza corretamente o `media query` para mudar a cor de fundo de um elemento para azul quando a largura da tela for maior que 768px?

a. `@media only screen and (min-width: 768px) { .elemento { background-color: blue; } }`
b. `@media screen and (max-width: 768px) { .elemento { background-color: blue; } }`
c. `@media screen and (min-width > 768px) { .elemento { background-color: blue; } }`
**d. `@media screen and (min-width: 769px) { .elemento { background-color: blue; } }`** ✅

*Origem: Questionário 05 - Imagens e Vídeos.*

> `min-width: 768px` já inclui telas de exatamente 768px; "maior que 768px" começa em 769px, então a opção correta usa `min-width: 769px`. (A palavra `only` é sintaxe antiga, desnecessária nos navegadores modernos.) `max-width` seria o oposto e `min-width > 768px` é sintaxe inválida.

### 69. Um designer de web está utilizando uma imagem com 300 dpi para uma página web. Qual o impacto direto disso no carregamento da página?

a. Não haverá impacto, pois o DPI é uma medida de impressão e não é relevante para a exibição de imagens em telas.
b. A imagem se adaptará melhor a diferentes resoluções de tela, devido à sua maior densidade de pixels.
**c. O tamanho do arquivo será desnecessariamente grande, podendo aumentar o tempo de carregamento e prejudicar o desempenho.** ✅
d. A imagem carregará mais rápido, pois a alta resolução permite que os navegadores a renderizem mais eficientemente.

*Origem: Questionário 05 - Imagens e Vídeos.*

> Na web o que importa é a dimensão da imagem em pixels (ex.: 1920x1080px). Uma imagem de 300 DPI costuma ter muito mais pixels do que a tela exibe, gerando arquivo grande, mais banda e carregamento lento.

### 70. Um desenvolvedor precisa criar um ícone que se adapte perfeitamente a qualquer tamanho de tela sem perder a qualidade. Qual tipo de imagem é a mais indicada para essa finalidade?

a. Imagem com compressão lossy, pois oferece o melhor equilíbrio entre qualidade e tamanho de arquivo.
**b. Imagem vetorial, pois sua representação matemática permite redimensionamento ilimitado sem perda de qualidade.** ✅
c. Imagem raster, devido à sua capacidade de representar detalhes complexos.
d. JPEG, porque é um formato universalmente suportado pelos navegadores modernos.

*Origem: Questionário 05 - Imagens e Vídeos.*

> Imagens vetoriais (como SVG) são baseadas em equações matemáticas de formas, linhas e cores, não em pixels. Ao ampliar, o navegador recalcula o desenho e mantém a nitidez: ideal para logotipos e ícones.

### 71. Considerando o uso do elemento `<picture>` para criar imagens responsivas, analise o seguinte trecho de código:

```html
<picture>
  <source media="(max-width: 600px)" srcset="small.jpg">
  <source media="(max-width: 1200px)" srcset="medium.jpg">
  <img src="large.jpg" alt="Descrição da imagem">
</picture>
```

Qual imagem será carregada em uma tela com 800px de largura?

a. `small.jpg`, pois é a primeira `source` que a condição atende.
**b. `medium.jpg`, pois a condição `(max-width: 1200px)` é a primeira a ser atendida pelo navegador.** ✅
c. `small.jpg` ou `medium.jpg`, dependendo do navegador, já que ambas as `source` são válidas.
d. `large.jpg`, pois é a imagem padrão e só é substituída se nenhuma `source` for compatível.

*Origem: Questionário 05 - Imagens e Vídeos.*

> O navegador avalia as `<source>` de cima para baixo. A primeira (`max-width: 600px`) não é atendida, pois 800px > 600px. A segunda (`max-width: 1200px`) é atendida, então ele escolhe `medium.jpg`. O `<img>` (`large.jpg`) só vale se nenhuma `source` combinar.

### 72. Um desenvolvedor quer que um vídeo de fundo comece a ser reproduzido assim que a página é carregada, sem que o usuário precise interagir com ele. Além disso, o vídeo não deve ter controles de reprodução visíveis. Qual combinação de atributos ele deve usar no elemento `<video>`?

a. `autoplay`, `controls`, `loop`
b. `autoplay`, `muted`, `controls`
c. `preload="auto"`, `loop`
**d. `autoplay`, `muted`, `loop`** ✅

*Origem: Questionário 05 - Imagens e Vídeos.*

> `autoplay` inicia a reprodução ao carregar; `muted` silencia o vídeo (navegadores modernos bloqueiam autoplay com som); `loop` repete continuamente. Sem `controls`, os controles ficam ocultos.

### 73. Qual das seguintes afirmações sobre a 'profundidade de cor' (color depth) é verdadeira?

a. Uma profundidade de cor de 8 bits é suficiente para exibir 16 milhões de cores, o que é a mesma quantidade de cores que o olho humano pode distinguir.
**b. A profundidade de cor refere-se ao número de bits usados para representar a cor de um único pixel, o que diretamente afeta a quantidade de cores possíveis e o tamanho do arquivo.** ✅
c. Quanto menor a profundidade de cor, mais o arquivo pode ser compactado com compressão sem perda, mas isso não afeta a fidelidade de cor.
d. A profundidade de cor determina o número de pixels em uma imagem, sendo que uma imagem com 24 bits de profundidade de cor tem 24 pixels.

*Origem: Questionário 05 - Imagens e Vídeos.*

> É a quantidade de informação de cor por pixel. Quanto mais bits, maior a gama de cores e maior o arquivo. Exemplos: 8 bits = 256 cores; 24 bits = 16,7 milhões de cores.

### 74. Qual o principal benefício do uso de Lazy Loading em imagens e vídeos?

**a. Acelera o tempo de carregamento inicial, pois carrega os recursos apenas quando eles se tornam visíveis na área de visualização do navegador.** ✅
b. Permite que os desenvolvedores criem efeitos de transição fluidos entre as imagens, melhorando a experiência do usuário.
c. Melhora a acessibilidade, pois permite que leitores de tela carreguem o conteúdo da página mais rapidamente e na ordem correta.
d. O `lazy loading` diminui o tempo de carregamento da página inteira, tornando o site mais responsivo em todos os dispositivos.

*Origem: Questionário 05 - Imagens e Vídeos.*

> O Lazy Loading adia recursos não críticos fora da área visível (viewport). O navegador prioriza o que o usuário vê imediatamente e a página parece carregar muito mais rápido; o recurso só é baixado quando está perto de aparecer.

### 75. Um desenvolvedor precisa exibir imagens em um site que se adaptem a diferentes resoluções de tela e densidades de pixel, carregando a imagem mais apropriada para cada dispositivo. Ele decidiu usar o atributo `srcset` no elemento `<img>`. Qual é o uso correto deste atributo para essa finalidade?

a. `<img src="small.jpg" srcset="small.jpg 1x, medium.jpg 2x, large.jpg 3x">`
b. `<img src="small.jpg" srcset="medium.jpg 800w, large.jpg 1200w">`
**c. `<img src="small.jpg" srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w">`** ✅
d. `<img src="small.jpg" srcset="small.jpg 400px, medium.jpg 800px, large.jpg 1200px">`

*Origem: Questionário 05 - Imagens e Vídeos.*

> O `srcset` usa o descritor `w` para indicar a largura intrínseca de cada imagem. O navegador usa isso, junto com o `sizes`, para decidir qual arquivo carregar conforme a área de visualização. `px` não é descritor válido.

### 76. Analise o seguinte código CSS para o uso de sprites:

```css
.icon-home {
  width: 50px;
  height: 50px;
  background-image: url('sprites.png');
  background-position: 0 0;
}
.icon-about {
  width: 50px;
  height: 50px;
  background-image: url('sprites.png');
  background-position: -50px 0;
}
```

Qual é o principal benefício dessa técnica em termos de desempenho?

a. Reduz o tamanho total do arquivo de imagens, pois um único sprite tem compressão mais eficiente.
b. Permite que as imagens sejam carregadas de forma assíncrona, não bloqueando a renderização da página.
c. Melhora a semântica do HTML, pois não há a necessidade de múltiplos elementos `<img>` no documento para ícones.
**d. Reduz o número de requisições HTTP ao servidor, pois vários ícones são combinados em um único arquivo de imagem.** ✅

*Origem: Questionário 05 - Imagens e Vídeos.*

> Um grande gargalo de desempenho é a latência do número de requisições HTTP. Ao combinar vários ícones em um único sprite, o navegador faz uma só requisição, reduzindo a sobrecarga de conexão.

---

## Parte 2 - Questões Extras sobre Animação

Resposta curta: complete o `___` em caixa baixa, sem espaços.

### E1. Você criou uma animação `rotate` que gira um elemento 360 graus. Para que ela gire 180 graus em uma direção e depois volte 180 graus na direção oposta, qual a propriedade que você deve usar?

```css
.card.rotate {
  animation-name: rotate;
  animation-duration: 2s;
  animation-iteration-count: 2;
  animation-direction: ___ ;
}
```

**Resposta: `alternate`** ✅

> `animation-direction` determina se a animação roda para frente, para trás ou em ciclo alternado. `alternate` inverte a direção a cada ciclo: efeito de ida e volta.

### E2. Você tem uma animação de pulsação (`pulse`) em um card e quer que ela comece apenas 1 segundo após o carregamento da página. Complete a propriedade para atrasar o início da animação.

```css
.card {
  animation-name: pulse;
  animation-duration: 2s;
  animation-delay: ___ ;
}
```

**Resposta: `1s`** ✅

> `animation-delay` define o atraso antes de a animação começar; útil para coordenar várias animações ou introduzir um elemento com atraso.

### E3. Você tem uma animação chamada `grow` em um card. Ao passar o mouse, você quer que ela seja executada de forma invertida, do final para o início. Complete a propriedade que controla a direção da animação.

```css
.card:hover {
  animation-name: grow;
  animation-duration: 1s;
  animation-direction: ___ ;
}
```

**Resposta: `reverse`** ✅

> `reverse` executa a animação na direção oposta à original, do último `@keyframe` para o primeiro.

### E4. Você está animando a largura de um card. A animação deve se mover para a frente no primeiro ciclo e para trás no segundo. Para que a animação alterne entre as direções, qual propriedade deve ser usada?

```css
.card {
  animation-name: resize;
  animation-duration: 2s;
  animation-iteration-count: 2;
  animation-direction: ___ ;
}
```

**Resposta: `alternate`** ✅

> `alternate` executa para frente no primeiro ciclo (0% a 100%) e inverte no segundo (100% a 0%): efeito de "vai e volta".

### E5. Você quer que uma animação de pulsação (`pulse`) se repita infinitamente. Qual é a propriedade que você deve usar para que a animação continue a ser executada em loop?

```css
.card.pulse {
  animation-name: pulse;
  animation-duration: 2s;
  animation-iteration-count: ___ ;
}
```

**Resposta: `infinite`** ✅

> `animation-iteration-count` controla quantas vezes a animação se repete; `infinite` faz o loop contínuo.
