# Questionário - HTML, CSS & JS - Parte 2

S05 - Interação Homem Máquina - tópico "HTML, CSS & JS".
Fonte: Moodle do Inatel (https://moodle.inatel.br/mod/quiz/view.php?id=23159).

**Regras**
- Tentativas ilimitadas; vale a nota mais alta.
- Aberto em 19/08/2026 às 17:30; fechamento em 31/08/2026 às 23:59.
- Depois do fechamento, não aceita novas submissões.

**Minha tentativa:** tentativa 1, enviada em 24/08/2026 às 15:49 — **100,00 / 100,00**. 10 de 10 questões corretas.

Gabarito abaixo, tirado da revisão da tentativa. A alternativa correta está em **negrito**, seguida da justificativa do professor quando houve.

---

### 1. Um desenvolvedor precisa selecionar o primeiro elemento `<div>` que está dentro de um `<section>`. Qual é o método mais eficiente para essa busca?

a. `document.getElementsByTagName('div')`
**b. `document.querySelector('section div')`** ✅
c. `document.getElementById('div')`
d. `document.getElementsByClassName('div')`

> O `querySelector()` aceita seletores CSS. O seletor `'section div'` encontra exatamente o primeiro `<div>` dentro de um `<section>`, sem precisar buscar todos os elementos para depois filtrar.

### 2. Considere o seguinte código HTML:

```html
<button id="btn">Clique aqui</button>
```

Qual o trecho de código JavaScript mais moderno para adicionar um manipulador de evento de clique ao botão, garantindo que outros manipuladores não sejam substituídos?

a. `document.getElementById('btn').eventListener('click', function(){});`
**b. `document.getElementById('btn').addEventListener('click', function(){});`** ✅
c. `document.getElementById('btn').onclick = function() {};`
d. `document.getElementById('btn').clickEvent = function() {};`

> O `addEventListener()` é a forma recomendada no JavaScript moderno: permite vários manipuladores para o mesmo evento no mesmo elemento, sem que um interfira nos outros.

### 3. Um usuário arrasta o dedo sobre a tela do celular. Qual evento de toque é disparado repetidamente durante essa ação?

**a. `ontouchmove`** ✅
b. `ontouchcancel`
c. `ontouchend`
d. `ontouchstart`

> O `ontouchmove` é acionado continuamente enquanto o dedo é arrastado pela tela. É o ideal para rastrear a posição do dedo e criar interações de arrastar e soltar.

### 4. Considerando o seguinte HTML:

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

> O `querySelectorAll()` aceita um seletor CSS e devolve uma `NodeList` com todos os elementos que casam com ele, aqui todos os parágrafos dentro de `.container`. O `querySelector()` devolve só o primeiro.

### 5. Um usuário precisa mover uma imagem em um plano cartesiano com o mouse. Qual evento é disparado quando o ponteiro do mouse se move sobre a imagem?

a. `onmouseenter`
**b. `onmousemove`** ✅
c. `onmouseout`
d. `onmousedown`

> O `onmousemove` é disparado continuamente enquanto o ponteiro se move sobre o elemento e fornece as coordenadas x e y do ponteiro.

### 6. Para criar um novo elemento `<div>` dinamicamente no JavaScript, qual dos métodos a seguir deve ser usado?

**a. `document.createElement('div')`** ✅
b. `document.createElementId('div')`
c. `document.append('div')`
d. `document.createNode('div')`

> O `document.createElement()` cria um novo elemento HTML na memória; o nome da tag é passado como string.

### 7. Em qual situação o método `document.querySelectorAll()` é mais apropriado do que `document.querySelector()`?

a. Para selecionar um elemento específico usando seu ID único.
b. Para selecionar o primeiro elemento de uma lista de itens.
c. Para retornar um único nó de uma lista de elementos.
**d. Para obter todos os elementos que compartilham uma mesma classe CSS.** ✅

> O `querySelectorAll()` serve para selecionar e manipular vários elementos que casam com um seletor CSS. Ele devolve uma `NodeList` que pode ser percorrida para aplicar estilos ou eventos.

### 8. Considere o seguinte código HTML:

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

> O `removeChild()` é chamado no elemento pai (o `<ul>`, selecionado pelo id) e recebe como argumento o nó filho a remover (o primeiro `<li>`, selecionado com `querySelector`).

### 9. Um usuário clica com o botão direito do mouse em um elemento para abrir um menu de contexto. Qual evento de mouse é disparado?

a. `onmouseup`
b. `onclick`
c. `onmousedown`
**d. `oncontextmenu`** ✅

> O `oncontextmenu` é disparado quando o usuário clica com o botão direito sobre um elemento, o que normalmente abre o menu de contexto do navegador.

### 10. Qual é a principal diferença entre `document.getElementById('id')` e `document.querySelector('#id')`?

**a. `getElementById` é mais rápido e só busca por IDs.** ✅
b. `getElementById` retorna uma lista e `querySelector` retorna um elemento.
c. `getElementById` é para IDs e `querySelector` é para classes.
d. `querySelector` é mais antigo e tem mais suporte de navegadores.

> O `getElementById()` é otimizado pelos navegadores para buscar por id. O `querySelector()` é genérico (aceita qualquer seletor CSS) e por isso é um pouco mais lento, mesmo para um id. Regra geral: use `getElementById()` sempre que possível.

---

## Resumo para a prova

| Quero... | Use |
|---|---|
| Um elemento por id (mais rápido) | `getElementById('id')` |
| O primeiro elemento que casa com um seletor CSS | `querySelector('seletor')` |
| Todos os elementos que casam com um seletor CSS | `querySelectorAll('seletor')` (devolve `NodeList`) |
| Criar um elemento | `document.createElement('tag')` |
| Remover um filho | `pai.removeChild(filho)` |
| Vários manipuladores no mesmo evento | `addEventListener('evento', fn)` |

**Eventos:** `onmousemove` (ponteiro se movendo), `oncontextmenu` (botão direito), `ontouchmove` (dedo arrastando).
