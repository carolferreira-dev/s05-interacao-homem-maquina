# Questionário - HTML, CSS & JS - Parte 1

S05 - Interação Homem Máquina - tópico "HTML, CSS & JS".
Fonte: Moodle do Inatel (https://moodle.inatel.br/mod/quiz/view.php?id=23158).

**Regras**
- Tentativas ilimitadas; vale a nota mais alta.
- Aberto em 12/08/2026 às 17:30; fechamento em 24/08/2026 às 23:59.
- Depois do fechamento, não aceita novas submissões.

**Minha tentativa:** tentativa 1, enviada em 24/08/2026 às 15:43 — **100,00 / 100,00**. 10 de 10 questões corretas.

Gabarito abaixo, tirado da revisão da tentativa. A alternativa correta está em **negrito**.

---

### 1. Analise o código HTML abaixo:

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

### 2. Em HTML, qual a diferença fundamental entre uma lista não ordenada (`<ul>`) e uma lista ordenada (`<ol>`)?

a. `<ul>` só pode conter textos, enquanto `<ol>` pode conter outras tags HTML, como links e imagens.
b. `<ul>` é usada para itens de navegação, enquanto `<ol>` é usada para qualquer outro tipo de lista.
c. `<ul>` é um elemento de bloco (block-level), enquanto `<ol>` é um elemento em linha (inline).
**d. Os itens de uma `<ul>` são exibidos com marcadores (como pontos), enquanto os itens de uma `<ol>` são numerados, indicando uma sequência.** ✅

### 3. Dado o código HTML abaixo, que seletor CSS seria usado para aplicar um estilo exclusivamente ao título (`<h1>`) dentro do primeiro artigo (`<article>`)?

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

### 4. Considere o seguinte trecho de código CSS e HTML:

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

### 5. Qual é a principal função do elemento `<iframe>` no HTML, como mostrado no exemplo abaixo?

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

### 6. Observe o elemento de mídia abaixo:

```html
<img src="imagens/logo.png" alt="Logotipo da Empresa XPTO">
```

Qual é a função do atributo `alt` nesta tag?

a. Especificar a largura e a altura da imagem para otimizar o carregamento da página.
**b. Descrever o conteúdo da imagem, sendo exibido caso ela não carregue e utilizado por leitores de tela.** ✅
c. Fornecer um caminho alternativo para a imagem caso o primeiro falhe.
d. Definir o título da imagem, que aparece quando o usuário passa o mouse sobre ela.

### 7. Qual é a principal finalidade de utilizar elementos semânticos como `<article>`, `<section>`, `<nav>` e `<aside>` em um documento HTML?

**a. Descrever a estrutura e o significado do conteúdo para navegadores e tecnologias assistivas, melhorando a acessibilidade e o SEO.** ✅
b. Inserir mídias como vídeos e imagens de forma mais otimizada que as tags `<img>` e `<video>`.
c. Aplicar estilos visuais específicos, como cores e fontes, diretamente no HTML.
d. Garantir que o site funcione corretamente em navegadores mais antigos.

### 8. A estrutura básica de uma regra CSS é composta por três partes fundamentais. Quais são elas?

**a. Seletor, Propriedade e Valor.** ✅
b. Tag, Classe e ID.
c. Elemento, Atributo e Valor.
d. Arquivo, Estilo e Função.

### 9. Quando se trata de vincular uma folha de estilos externa (um arquivo .css) a um documento HTML, qual é a prática recomendada e correta?

a. Usar a tag `<style>` dentro do `<body>` para importar o arquivo com `@import`.
**b. Usar a tag `<link>` dentro da seção `<head>` do documento HTML.** ✅
c. Declarar o caminho para o arquivo CSS através de um atributo `style` na tag `<html>`.
d. Inserir o código CSS diretamente no arquivo HTML usando a tag `<script>`.

> A tag `<script>` serve para incorporar ou referenciar scripts (geralmente JavaScript), e não folhas de estilo CSS.

### 10. Em HTML, os atributos fornecem informações adicionais sobre os elementos. Considerando a estrutura `<a href="pagina.html">Clique aqui</a>`, o que `href` representa?

a. Um identificador único para o elemento na página.
b. O texto que será visível para o usuário clicar.
**c. O destino (URL) para onde o link aponta, sendo um atributo essencial da tag `<a>`.** ✅
d. Uma classe CSS para estilização do link.

---

## Resumo para a prova

- **`<main>`:** agrupa o conteúdo principal do `<body>`. `<header>` é o cabeçalho e `<footer>` o rodapé.
- **Listas:** `<ul>` usa marcadores; `<ol>` é numerada (indica sequência).
- **Seletores CSS:** `.post h1` (descendente), `#id .classe` (classe dentro do elemento com aquele id) e `.post > p` (filho direto).
- **Regra CSS:** seletor + propriedade + valor.
- **CSS externo:** `<link rel="stylesheet" href="...">` dentro do `<head>`.
- **`<iframe>`:** incorpora conteúdo de outra origem na página.
- **`alt` em `<img>`:** descreve a imagem (aparece se ela não carregar e é lido por leitores de tela).
- **Tags semânticas** (`article`, `section`, `nav`, `aside`): dão significado à estrutura, ajudando a acessibilidade e o SEO.
- **`href`:** destino (URL) do link na tag `<a>`.
