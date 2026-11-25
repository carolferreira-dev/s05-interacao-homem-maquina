# Questionário - Cores, Tipografia e Ícones

S05 - Interação Homem Máquina - tópico "Cores, Tipografia e Ícones".
Fonte: Moodle do Inatel (https://moodle.inatel.br/mod/quiz/view.php?id=23166).

**Regras**
- Tentativas ilimitadas; vale a nota mais alta.
- Aberto em 09/09/2026 às 17:30; fechamento em 21/09/2026 às 23:59.
- Depois do fechamento, não aceita novas submissões.

**Minha tentativa:** tentativa 1, enviada em 21/09/2026 às 21:57 — **100,00 / 100,00**. 15 de 15 questões corretas.

Gabarito abaixo, tirado da revisão da tentativa. A alternativa correta está em **negrito**, seguida da justificativa do professor.

---

### 1. Qual é a principal função da propriedade `text-align` em CSS, e como ela difere de `text-justify`?

a. `text-align` define o recuo da primeira linha do parágrafo, enquanto `text-justify` define o espaço entre as palavras.
b. `text-align` alinha apenas imagens e `text-justify` alinha apenas texto.
**c. `text-align` define o alinhamento horizontal do texto em uma linha (como `left`, `right` ou `center`), enquanto `text-justify` é um valor para `text-align` que distribui o espaço entre as palavras para que o texto se alinhe nas margens esquerda e direita.** ✅
d. `text-align` e `text-justify` têm a mesma função, que é espaçar as palavras para que as linhas se alinhem nas bordas.

> `text-align` é a propriedade principal que controla o alinhamento de um bloco de texto. Os valores `left`, `right`, `center` e `justify` são opções para ela. O `justify` ajusta o espaçamento entre as palavras para que o texto ocupe toda a largura da linha, alinhando-se com ambas as margens.

### 2. Qual é a principal utilidade das Custom Properties (variáveis CSS) para a gestão de cores em um `Style Guide`?

a. Permitem que os desenvolvedores usem nomes de cores que não são suportados pelo navegador, como 'meu-vermelho'.
b. São usadas exclusivamente para definir cores de texto, não sendo aplicáveis a fundos ou bordas.
c. Aumentam a velocidade de carregamento da página, pois reduzem o tamanho do arquivo CSS.
**d. Permitem definir uma cor uma única vez em um local central e reutilizá-la em vários lugares. Isso facilita a alteração da cor em todo o site ao modificar apenas o valor da variável.** ✅

> Evitam a repetição de código: em vez de escrever o mesmo valor (por exemplo, `#ff6347`) em dezenas de lugares, guarda-se numa variável (`--cor-primaria`) e usa-se onde precisar. Se a cor mudar, basta alterar a variável em um único lugar e a mudança se propaga por todo o site.

### 3. Considerando o sistema de cores `HSL` e a declaração de cor `hsl(240, 100%, 50%)`, o que representa o valor de `50%`?

a. O canal Alpha, que define a transparência da cor.
b. O Matiz (Hue), que define a tonalidade da cor.
**c. A Luminosidade (Lightness), que define o brilho ou a claridade da cor.** ✅
d. A Saturação (Saturation), que define a intensidade da cor.

> A Luminosidade é o terceiro valor da sintaxe HSL. Ela controla o brilho da cor: `0%` resulta em preto, `100%` em branco e `50%` na tonalidade pura, sem adição de branco ou preto.

### 4. Qual é a principal diferença entre as propriedades `text-align` e `text-indent`?

```css
.button {
  text-align: center;
}
.paragraph {
  text-indent: 20px;
}
```

**a. `text-align` define o alinhamento horizontal de todas as linhas de texto em um bloco, enquanto `text-indent` define o recuo horizontal apenas da primeira linha de um parágrafo.** ✅
b. `text-align` alinha uma única palavra e `text-indent` alinha o parágrafo inteiro.
c. `text-align` define o alinhamento vertical e `text-indent` o alinhamento horizontal.
d. Esta alternativa está incorreta. O `text-align` alinha todas as linhas de texto dentro de um bloco, não apenas uma única palavra. O `text-indent` aplica o recuo apenas à primeira linha do parágrafo, não a todo ele.

> `text-align` controla o alinhamento de todo o conteúdo de texto de um elemento (esquerda, direita, centro ou justificado). `text-indent` aplica um recuo apenas na primeira linha do parágrafo, convenção comum em documentos formais.

### 5. Em um projeto web, qual é a principal vantagem de usar a unidade `rem` em vez de `px` para definir o tamanho da fonte?

a. O valor em `rem` é sempre igual ao valor em `px`, mas a sintaxe é mais curta.
**b. A unidade `rem` permite que o tamanho da fonte seja escalonado em relação ao tamanho da fonte raiz do documento, garantindo que o texto se adapte às preferências do usuário (como o tamanho da fonte padrão do navegador) e melhora a acessibilidade.** ✅
c. A unidade `rem` pode ser usada para definir qualquer medida em CSS, como a largura de um elemento, mas a unidade `px` só funciona com fontes.
d. A unidade `rem` faz com que o texto fique sempre do mesmo tamanho, independentemente do dispositivo ou da configuração do navegador.

> O `rem` se baseia no tamanho da fonte do elemento `html`, que pode ser alterado nas configurações de acessibilidade do navegador. Se o usuário aumentar a fonte padrão, o layout que usa `rem` é redimensionado proporcionalmente, melhorando acessibilidade e usabilidade.

### 6. Qual é a diferença entre a declaração de cores em `RGB` e `RGBA`?

a. `RGB` é um sistema de cores para impressão e `RGBA` é um sistema de cores para telas.
**b. `RGBA` adiciona um canal `alpha` ao `RGB`, que permite controlar a opacidade (transparência) da cor, enquanto o `RGB` só pode ser usado para cores opacas.** ✅
c. `RGB` usa valores de 0 a 100, e `RGBA` usa valores de 0 a 255.
d. `RGBA` é uma sintaxe mais antiga do que `RGB` e não é suportada em todos os navegadores.

> O "A" em `RGBA` é Alpha, um quarto canal que define a opacidade de 0 (totalmente transparente) a 1 (totalmente opaco). O `RGB` tradicional só combina cores para tonalidades opacas.

### 7. Qual é a principal diferença entre a declaração da cor de fundo em `HEX` e a cor do texto em `palavra-chave`?

```css
.alert {
  background-color: #f44336;
  color: white;
}
```

a. A cor `white` é universalmente suportada, enquanto o valor `#f44336` não é.
b. A cor `white` é mais precisa para o navegador do que o valor hexadecimal `#f44336`.
c. O valor hexadecimal é mais fácil de ser alterado por JavaScript do que a palavra-chave.
**d. O valor `#f44336` é ideal para designers e desenvolvedores que precisam de precisão na cor, enquanto a palavra-chave `white` é mais fácil de ler e entender, sendo uma escolha boa para cores básicas.** ✅

> O hexadecimal é a escolha padrão de quem precisa de precisão exata de cor. Palavras-chave como `white`, `black` ou `red` são intuitivas, fáceis de lembrar e agilizam a escrita para cores que não exigem uma tonalidade específica.

### 8. Qual é a principal função da propriedade `orphans` em CSS?

a. Define o recuo da primeira linha do parágrafo, mantendo-o consistente em todas as páginas.
b. Impede que a última linha de um parágrafo seja a única a aparecer no topo de uma nova página ou coluna.
c. Define o espaçamento entre as linhas do texto, controlando a altura entre elas.
**d. Garante que um número mínimo de linhas de um parágrafo permaneça no topo de uma nova página ou coluna quando o conteúdo é quebrado.** ✅

> Em documentos impressos ou layouts com quebra de página, `orphans` evita que uma ou poucas linhas de um parágrafo fiquem isoladas no topo de uma nova coluna ou página. `widows` faz o oposto: controla o mínimo de linhas que permanecem no final de uma página.

### 9. Em um sistema de design, qual das seguintes propriedades pode ser usada para alterar a cor de um elemento HTML de forma inline usando JavaScript?

a. `setAttribute`
**b. `style.color`** ✅
c. `setProperty`
d. `classList`

> `style.color` é a forma mais direta e usada de alterar a cor do texto via JavaScript: acessa e modifica o estilo embutido (inline) do elemento sem interferir em outras propriedades. Sintaxe: `element.style.color = 'red'`.

### 10. Qual é a principal diferença entre esta declaração de cor em `HSLA` e uma em `RGB`?

```css
.box {
  background-color: hsla(200, 50%, 75%, 0.8);
}
```

**a. `HSLA` é mais intuitivo e legível para humanos, pois suas propriedades correspondem mais diretamente à forma como percebemos as cores, tornando-o fácil de ajustar. `RGB` é baseado nos valores aditivos de Red, Green e Blue, que são menos intuitivos.** ✅
b. `RGB` é um sistema de cores para designers, e `HSLA` é um sistema de cores exclusivo para desenvolvedores.
c. A declaração `HSLA` não permite definir a transparência da cor, pois é um sistema mais simples.
d. `HSLA` é um sistema de cores mais antigo e menos suportado pelos navegadores modernos.

> Matiz (hue), saturação (saturation) e luminosidade (lightness) refletem a percepção intuitiva de cor: para escurecer uma cor basta diminuir a luminosidade. No `RGB` seria preciso ajustar os três canais proporcionalmente.

### 11. Qual é a principal diferença entre as propriedades `line-height` e `word-spacing`?

```css
p {
  line-height: 1.5;
  word-spacing: 5px;
}
```

a. `line-height` só funciona com unidades relativas (`em`), e `word-spacing` só funciona com unidades absolutas (`px`).
**b. `line-height` define a altura de cada linha de texto, controlando o espaçamento vertical, enquanto `word-spacing` ajusta o espaço horizontal entre as palavras, afetando o fluxo e a legibilidade do texto.** ✅
c. `line-height` define o espaço entre as palavras, enquanto `word-spacing` define o espaço entre as linhas.
d. `line-height` é usado para justificar o texto, enquanto `word-spacing` é usado para alinhar o texto.

> `line-height` controla o espaço vertical entre as linhas de base (a altura da linha) e evita linhas muito próximas. `word-spacing` ajusta o espaço horizontal entre as palavras. Ambas são essenciais para a legibilidade.

### 12. Qual é a principal função da propriedade `hyphens: auto` em CSS, e por que ela é importante para a tipografia?

a. Define o espaçamento entre os caracteres, tornando o texto mais compacto ou mais espaçado, o que é útil para títulos.
**b. Permite que o navegador insira hífens automaticamente em palavras longas que chegam ao final de uma linha, melhorando a quebra de linha e a legibilidade do texto justificado, especialmente em parágrafos que usam `text-align: justify`.** ✅
c. Permite que o texto se alinhe perfeitamente na margem direita, mesmo em parágrafos longos, sem quebrar palavras.
d. Impede que palavras sejam quebradas ao final de uma linha, mantendo-as sempre inteiras.

> Em texto justificado o navegador ajusta o espaço entre as palavras para preencher a linha; palavras longas podem gerar espaços exagerados. Com `hyphens: auto` o navegador quebra essas palavras com hífen, distribuindo melhor o texto.

### 13. Qual parte da declaração de sombra (`box-shadow`) controla a transparência da cor?

```css
.card {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}
```

a. `2px 2px`
b. `5px`
**c. `0.3`** ✅
d. `rgb(0, 0, 0)`

> `0.3` é o canal alpha de `rgba(red, green, blue, alpha)`: `0` é totalmente transparente e `1` totalmente opaco. No `box-shadow`, permite sombras sutis e semitransparentes.

### 14. Qual é a principal vantagem de usar um `Style Guide` em um projeto de desenvolvimento web?

a. Permite que os designers trabalhem de forma isolada, sem a necessidade de comunicação com os desenvolvedores.
b. Elimina completamente a necessidade de usar JavaScript para manipular estilos, pois o guia de estilo define tudo estaticamente.
**c. Garante a consistência visual em todo o projeto, fornecendo um conjunto de regras e padrões reutilizáveis para cores, tipografia e componentes, o que acelera o desenvolvimento e facilita a manutenção.** ✅
d. Reduz a quantidade de código HTML, já que muitas classes e IDs se tornam desnecessárias.

> O Style Guide estabelece padrões: a equipe trabalha mais rápido sem reinventar cada componente, a interface fica coesa e a documentação facilita a entrada de novos membros e a manutenção.

### 15. Em um sistema de design, qual é a principal utilidade das cores semânticas?

a. São utilizadas exclusivamente para textos e links, sem aplicação em outros elementos como botões ou fundos.
b. Apenas para decorar a interface, tornando-a mais agradável visualmente.
c. Fornecer uma paleta de cores ilimitada que os designers podem usar livremente.
**d. Associar um significado específico à cor, melhorando a acessibilidade e a usabilidade da interface, pois a cor comunica uma informação clara ao usuário.** ✅

> Cores semânticas criam uma linguagem visual comum: por exemplo, o vermelho indica ação negativa ou erro. Isso orienta o usuário de forma rápida, reforça a informação (acessibilidade) e reduz a carga cognitiva.

---

## Resumo para a prova

| Quero... | Use |
|---|---|
| Alinhar o texto horizontalmente | `text-align` (`left`, `right`, `center`, `justify`) |
| Recuar só a primeira linha | `text-indent` |
| Espaço vertical entre linhas / horizontal entre palavras | `line-height` / `word-spacing` |
| Hifenizar palavras longas (texto justificado) | `hyphens: auto` |
| Evitar linhas isoladas no topo de página/coluna | `orphans` (e `widows` no final) |
| Fonte escalável conforme o navegador | `rem` (relativo à fonte do `html`) |
| Transparência na cor | `rgba()` / `hsla()` (canal alpha de 0 a 1) |
| Reaproveitar uma cor | variáveis CSS (`--cor-primaria`) |
| Mudar cor via JS (inline) | `elemento.style.color = '...'` |

- **HSL:** matiz (tonalidade), saturação (intensidade), luminosidade (0% preto, 50% cor pura, 100% branco). É o mais intuitivo para humanos.
- **HEX** dá precisão; **palavra-chave** (`white`) é legível para cores básicas.
- **Style Guide:** consistência visual, desenvolvimento mais rápido e manutenção mais fácil.
- **Cores semânticas:** dão significado à cor (ex.: vermelho = erro), melhorando acessibilidade e usabilidade.
