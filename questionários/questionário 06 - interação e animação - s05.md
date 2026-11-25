# Questionário - Interação e Animação

S05 - Interação Homem Máquina - tópico "Interação e Animação".
Fonte: Moodle do Inatel (https://moodle.inatel.br/mod/quiz/view.php?id=23174).

**Regras**
- Tentativas ilimitadas; vale a nota mais alta.
- Aberto em 23/09/2026 às 17:30; fechamento em 10/10/2026 às 23:59.
- Depois do fechamento, não aceita novas submissões.

**Minha tentativa:** tentativa 1, enviada em 09/10/2026 às 17:49 — **95,00 / 100,00** (13 de 14 questões corretas; errei a questão 10). A nota de aprovação do questionário era 100,00, por isso o Moodle marca "Falhou" nessa condição.

Pontuação: as questões 1 a 6 valem 10 pontos cada e as questões 7 a 14 valem 5 pontos cada (total 100).

Gabarito abaixo, tirado da revisão da tentativa. A alternativa correta está em **negrito**, seguida da justificativa do professor (resumida).

---

### 1. Um desenvolvedor precisa selecionar o primeiro elemento `<div>` que está dentro de um `<section>`. Qual é o método mais eficiente para essa busca?  *(vale 10 pontos)*

a. `document.getElementById('div')`
b. `document.getElementsByClassName('div')`
**c. `document.querySelector('section div')`** ✅
d. `document.getElementsByTagName('div')`

> O `querySelector()` aceita seletores CSS. O seletor `'section div'` encontra exatamente o primeiro `<div>` dentro de um `<section>`, sem buscar todos os elementos para depois filtrar.

### 2. Considere o seguinte código HTML:  *(vale 10 pontos)*

```html
<button id="btn">Clique aqui</button>
```

Qual o trecho de código JavaScript mais moderno para adicionar um manipulador de evento de clique ao botão, garantindo que outros manipuladores não sejam substituídos?

a. `document.getElementById('btn').eventListener('click', function(){});`
**b. `document.getElementById('btn').addEventListener('click', function(){});`** ✅
c. `document.getElementById('btn').onclick = function() {};`
d. `document.getElementById('btn').clickEvent = function() {};`

> O `addEventListener()` é a forma recomendada no JavaScript moderno: permite vários manipuladores para o mesmo evento no mesmo elemento, sem que um interfira nos outros.

### 3. Um usuário arrasta o dedo sobre a tela do celular. Qual evento de toque é disparado repetidamente durante essa ação?  *(vale 10 pontos)*

a. `ontouchstart`
b. `ontouchcancel`
**c. `ontouchmove`** ✅
d. `ontouchend`

> O `ontouchmove` é acionado continuamente enquanto o dedo é arrastado pela tela. É o ideal para rastrear a posição do dedo e criar interações de arrastar e soltar.

### 4. Considerando o seguinte HTML:  *(vale 10 pontos)*

```html
<div class="container">
  <p>Parágrafo 1</p>
  <p>Parágrafo 2</p>
</div>
```

Qual a melhor forma de selecionar todos os elementos `<p>` dentro do `<div>` com a classe `container`?

a. `document.getElementsByClassName('p')`
**b. `document.querySelectorAll('.container p')`** ✅
c. `document.querySelector('.container p')`
d. `document.getElementsByTagName('p')`

> O `querySelectorAll()` aceita um seletor CSS e devolve uma `NodeList` com todos os elementos que casam com ele, aqui todos os parágrafos dentro de `.container`.

### 5. Um usuário precisa mover uma imagem em um plano cartesiano com o mouse. Qual evento é disparado quando o ponteiro do mouse se move sobre a imagem?  *(vale 10 pontos)*

a. `onmouseout`
**b. `onmousemove`** ✅
c. `onmousedown`
d. `onmouseenter`

> O `onmousemove` é disparado continuamente enquanto o ponteiro se move sobre o elemento e fornece as coordenadas x e y do ponteiro.

### 6. Considere o seguinte código JavaScript:  *(vale 10 pontos)*

```js
document.write('<h1>Título</h1>');
document.open();
document.close();
```

Qual o impacto dessa sequência de comandos em uma página web já carregada?

a. O título é ignorado pois o documento está aberto e fechado.
**b. O conteúdo da página é totalmente apagado e substituído pelo novo título.** ✅
c. O título é adicionado ao final da página, após todo o conteúdo.
d. O título é adicionado antes de todo o conteúdo da página.

> A chamada de `document.open()` limpa completamente o documento atual; o `document.write()` insere o novo conteúdo e o `document.close()` finaliza. O resultado é a substituição de todo o HTML da página pelo novo texto, o que torna esse método perigoso e desaconselhado.

### 7. Para criar um novo elemento `<div>` dinamicamente no JavaScript, qual dos métodos a seguir deve ser usado?  *(vale 5 pontos)*

a. `document.append('div')`
b. `document.createNode('div')`
c. `document.createElementId('div')`
**d. `document.createElement('div')`** ✅

> O `document.createElement()` cria um novo elemento HTML na memória; o nome da tag é passado como string.

### 8. Um desenvolvedor quer inserir um novo parágrafo (`<p>`) dentro de um elemento `card`. Qual é o método de manipulação do DOM para adicionar este novo elemento ao `card`?  *(vale 5 pontos)*

**a. `card.appendChild(p)`** ✅
b. `document.appendChild(p)`
c. `card.insertNode(p)`
d. `card.pushChild(p)`

> O `appendChild()` é o método padrão para adicionar um novo elemento como o último filho de um elemento pai (aqui, o `card`). A sintaxe segue a hierarquia do DOM.

### 9. Em qual situação o método `document.querySelectorAll()` é mais apropriado do que `document.querySelector()`?  *(vale 5 pontos)*

a. Para selecionar um elemento específico usando seu ID único.
b. Para retornar um único nó de uma lista de elementos.
c. Para selecionar o primeiro elemento de uma lista de itens.
**d. Para obter todos os elementos que compartilham uma mesma classe CSS.** ✅

> O `querySelectorAll()` serve para selecionar e manipular vários elementos que casam com um seletor CSS. Devolve uma `NodeList` que pode ser percorrida para aplicar estilos ou eventos.

### 10. Considere o seguinte código HTML:  *(vale 5 pontos)*

```html
<ul id="lista-produtos">
  <li class="item-produto">Produto A</li>
  <li class="item-produto">Produto B</li>
</ul>
```

Qual o código JavaScript para remover o primeiro `<li>` da lista?

a. `document.getElementById('lista-produtos').remove();`
b. `document.querySelector('ul').removeChild(0);`
**c. `document.getElementById('lista-produtos').removeChild(document.querySelector('.item-produto'));`** ✅
d. `document.querySelector('.item-produto').remove();`

> O `removeChild()` é chamado no elemento pai (o `<ul>`, selecionado pelo id) e recebe o nó filho a remover (o primeiro `<li>`, selecionado com `querySelector`). Eu marquei a alternativa d (`.remove()`), que também removeria o item, mas a questão pede o uso de `removeChild()`: errei esta.

### 11. Em JavaScript, o método `document.write()` é um método poderoso, mas seu uso é geralmente desaconselhado. Qual a principal razão para isso?  *(vale 5 pontos)*

a. Ele é lento e ineficiente, especialmente em páginas grandes.
b. Ele não é compatível com navegadores modernos.
**c. Ele pode apagar todo o conteúdo da página, se chamado após o carregamento.** ✅
d. Ele pode ser usado para injetar código malicioso.

> O `document.write()` é síncrono e, chamado após o carregamento da página (onload), reabre o documento, limpando todo o HTML existente e substituindo pelo novo conteúdo. Esse comportamento imprevisível e destrutivo é a principal razão de ser desaconselhado.

### 12. Um usuário clica com o botão direito do mouse em um elemento para abrir um menu de contexto. Qual evento de mouse é disparado?  *(vale 5 pontos)*

a. `onmousedown`
b. `onmouseup`
**c. `oncontextmenu`** ✅
d. `onclick`

> O `oncontextmenu` é disparado quando o usuário clica com o botão direito sobre um elemento, o que normalmente abre o menu de contexto do navegador.

### 13. Qual é a principal diferença entre `document.getElementById('id')` e `document.querySelector('#id')`?  *(vale 5 pontos)*

a. `getElementById` retorna uma lista e `querySelector` retorna um elemento.
b. `querySelector` é mais antigo e tem mais suporte de navegadores.
**c. `getElementById` é mais rápido e só busca por IDs.** ✅
d. `getElementById` é para IDs e `querySelector` é para classes.

> O `getElementById()` é otimizado pelos navegadores para buscar por id. O `querySelector()` é genérico (aceita qualquer seletor CSS) e por isso é um pouco mais lento. Regra geral: use `getElementById()` sempre que possível.

### 14. Um desenvolvedor precisa criar um novo nó de texto e inseri-lo em um elemento `<h2>`. Qual a sequência correta de comandos?  *(vale 5 pontos)*

a. 1) `document.createTextNode();` 2) `h2.innerHTML = texto;`
b. 1) `document.createTextNode();` 2) `document.appendChild();`
**c. 1) `document.createTextNode(texto);` 2) `h2.appendChild(novoTexto);`** ✅
d. 1) `document.write(texto);` 2) `h2.appendChild();`

> Primeiro o `document.createTextNode(texto)` cria um nó de texto com o conteúdo desejado; depois o `h2.appendChild(novoTexto)` adiciona esse nó como filho do `h2`.

---

## Resumo para a prova

| Quero... | Use |
|---|---|
| Um elemento por id (mais rápido) | `getElementById('id')` |
| O primeiro elemento que casa com um seletor CSS | `querySelector('seletor')` |
| Todos os que casam com um seletor CSS | `querySelectorAll('seletor')` (devolve `NodeList`) |
| Criar um elemento | `document.createElement('tag')` |
| Criar um nó de texto | `document.createTextNode(texto)` + `pai.appendChild(no)` |
| Adicionar como último filho | `pai.appendChild(filho)` |
| Remover um filho (via pai) | `pai.removeChild(filho)` |
| Vários manipuladores no mesmo evento | `addEventListener('evento', fn)` |

**Eventos:** `onmousemove` (ponteiro se movendo), `oncontextmenu` (botão direito), `ontouchmove` (dedo arrastando).

**`document.write()` é desaconselhado** porque, chamado depois do carregamento, apaga todo o conteúdo da página (`document.open()` também limpa o documento).
