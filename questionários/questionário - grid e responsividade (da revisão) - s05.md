# Questionário - Grid e Responsividade (extraído da Revisão para a Prova)

S05 - Interação Homem Máquina - tópico "Grid e Responsividade".
Fonte: Moodle do Inatel, Questionário - Revisão para a Prova (https://moodle.inatel.br/mod/quiz/view.php?id=23169). Essas 15 questões são as de Grid e Responsividade que aparecem dentro do questionário de revisão (questões 27 a 41 da tentativa 50946).

O questionário original de Grid e Responsividade (https://moodle.inatel.br/mod/quiz/view.php?id=23163) fechou em 14/09/2026 sem nenhuma tentativa minha, então não há revisão dele. Estas questões foram a melhor aproximação, mas não dá para garantir que sejam exatamente as mesmas dele.

O gabarito vem da página de revisão de uma tentativa enviada em branco (nota 0). O Moodle não trouxe justificativas nesta revisão; as explicações abaixo são minhas, resumidas.

---

### 1. Qual é a diferença entre as abordagens de Grid Layout "clássico" e "moderno"?

a. O "clássico" usa `display: grid`, e o "moderno" usa `display: block`.
b. O "clássico" usa Flexbox, e o "moderno" usa o atributo `position`.
c. O "clássico" usa margens e paddings, e o "moderno" usa apenas `position: relative`.
**d. O "clássico" usa principalmente as propriedades `display: block` e `position`, enquanto o "moderno" usa `grid` e `flex`.** ✅

> O layout clássico era montado com `display: block`, `float` e `position`; o moderno usa `display: grid` e `display: flex`.

### 2. Considere o seguinte trecho de código CSS:

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

> Do centro para fora: conteúdo, `padding` (espaço interno), `border` (a linha) e `margin` (espaço externo).

### 3. O que o seguinte código CSS faz:

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

> `repeat(auto-fit, minmax(250px, 1fr))` cria quantas colunas couberem, cada uma com no mínimo 250px, dividindo o espaço restante: grade responsiva sem media query.

### 4. Qual é a tag HTML fundamental para garantir que uma página web se adapte corretamente a diferentes dispositivos, especificando a largura da área de visualização e a escala inicial?

a. `<meta name="author" content="...">`
b. `<meta name="robots" content="index, follow">`
c. `<meta name="description" content="...">`
**d. `<meta name="viewport" content="width=device-width, initial-scale=1.0">`** ✅

> A meta tag `viewport` com `width=device-width, initial-scale=1.0` faz a página usar a largura real do dispositivo e a escala inicial 1.

### 5. Qual é a função da tag `<link rel="icon" href="favicon.ico" type="image/x-icon">`?

a. Definir a fonte utilizada no site.
**b. Definir um ícone para a página, que é exibido na aba do navegador e em listas de favoritos.** ✅
c. Vincular um arquivo JavaScript à página.
d. Adicionar um link para uma folha de estilos CSS.

> `rel="icon"` define o favicon, mostrado na aba do navegador e nos favoritos.

### 6. Considere o seguinte trecho de código:

```html
<link rel="canonical" href="https://www.meusite.com/pagina-original">
<meta name="robots" content="noindex">
```

O que acontecerá com a página nos resultados de busca?

a. A página será indexada, mas apenas se a URL canônica for igual à URL atual.
**b. A tag `noindex` é o fator determinante: instrui os motores de busca a não indexarem a página, independentemente de qualquer outra tag como a `canonical`. (No Moodle essa alternativa aparece como "Esta alternativa está incorreta. A presença da tag noindex é o fator determinante...", mas é a marcada como correta.)** ✅
c. A página será indexada e a URL canônica será ignorada.
d. A página será indexada, mas o link para a página original será ignorado.

> `noindex` manda os buscadores não indexarem a página; ele prevalece sobre a `canonical`.

### 7. Se a resolução física de um dispositivo é de 1080 pixels e o DPR (Device Pixel Ratio) é 2, qual é o cálculo para encontrar a viewport lógica e qual o resultado?

a. Viewport Lógica = 1080 + 2 = 1082 pixels
b. Viewport Lógica = 1080 - 2 = 1078 pixels
c. Viewport Lógica = 1080 x 2 = 2160 pixels
**d. Viewport Lógica = 1080 / 2 = 540 pixels** ✅

> Viewport lógica = resolução física ÷ DPR = 1080 / 2 = 540 pixels.

### 8. Considere o seguinte código CSS para um layout:

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

> O Flexbox organiza, alinha e distribui itens de forma flexível, mesmo com tamanhos dinâmicos; com `flex-wrap: wrap` os itens quebram de linha.

### 9. Para que serve a tag `<title>Titulo do Site</title>` e a meta tag `<meta name="description" content="Descrição breve da página...">`?

a. A tag `<title>` é para o favicon, e a meta tag `description` é para o autor.
**b. A tag `<title>` define o título da página na aba do navegador e nos resultados de busca, e a meta tag `description` fornece um resumo da página para os motores de busca.** ✅
c. Ambas são usadas exclusivamente para aplicar estilos CSS.
d. Ambas são usadas para definir o idioma da página.

> `<title>` é o título (aba e resultados de busca); `description` é o resumo para os buscadores.

### 10. Qual é a principal diferença entre `margin` e `padding` em um elemento HTML?

a. `margin` é o espaço interno e `padding` é o espaço externo.
b. `margin` e `padding` são a mesma coisa.
c. `margin` afeta apenas a parte superior de um elemento, enquanto `padding` afeta apenas a inferior.
**d. `margin` cria espaço fora da borda de um elemento, enquanto `padding` cria espaço entre o conteúdo do elemento e sua borda.** ✅

> `margin` = espaço fora da borda; `padding` = espaço entre o conteúdo e a borda.

### 11. Considere o seguinte trecho de código:

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

> `lang` informa o idioma do conteúdo; `charset="UTF-8"` garante a exibição correta de acentos e caracteres especiais.

### 12. O que as meta tags `<meta name="robots" content="index, follow">` e `<link rel="canonical" href="https://www.seusite.com/pagina">` fazem para a indexação de uma página?

a. Ambas as tags são usadas para definir o tipo de codificação de caracteres do site.
b. A tag `robots` impede a indexação, e a tag `canonical` direciona para outra página.
c. A tag `robots` define a largura da viewport, e a tag `canonical` define o autor da página.
**d. A tag `robots` informa aos motores de busca para indexar a página e seguir seus links, e a tag `canonical` aponta para a URL preferencial da página para evitar conteúdo duplicado.** ✅

> `index, follow` = indexar e seguir links; `canonical` = URL preferencial, evitando conteúdo duplicado.

### 13. Qual é a diferença entre as propriedades de layout `display: block` e `display: flex`?

a. `display: block` alinha todos os itens verticalmente, e `display: flex` alinha-os horizontalmente.
**b. `display: block` faz com que um elemento ocupe a largura total disponível e seja exibido em uma nova linha, enquanto `display: flex` cria um contêiner flexível para alinhar e distribuir itens internos.** ✅
c. `display: block` cria um contêiner flexível, enquanto `display: flex` faz com que os elementos ocupem a largura total disponível.
d. Ambas as propriedades têm o mesmo efeito, mas `flex` é a sintaxe mais antiga.

> `block` ocupa a largura toda e começa em nova linha; `flex` cria um contêiner flexível para os itens filhos.

### 14. Qual é a principal utilidade das meta tags Open Graph (OG)?

a. Otimizar a velocidade de carregamento de imagens em dispositivos móveis.
b. Definir a fonte e a cor de fundo de uma página web.
**c. Controlar como o conteúdo de uma página é exibido quando compartilhado em redes sociais, como o título, a descrição e a imagem.** ✅
d. Criar animações e efeitos visuais na página.

> As tags Open Graph controlam título, descrição e imagem exibidos quando a página é compartilhada em redes sociais.

### 15. Qual a principal função da meta tag `<meta name="keywords" content="palavra-chave1, palavra-chave2, palavra-chave3">`?

**a. Fornecer uma lista de palavras-chave relevantes sobre o conteúdo da página para os motores de busca.** ✅
b. Indicar o autor e a data de criação da página.
c. Definir as tags Open Graph para redes sociais.
d. Definir as cores e o layout do site.

> A meta `keywords` lista palavras-chave sobre o conteúdo para os motores de busca.

---

## Resumo para a prova

- **Grid responsivo sem media query:** `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`.
- **Flexbox:** `display: flex` + `flex-wrap: wrap` organiza e distribui itens de forma flexível; `block` ocupa a linha inteira.
- **Caixa:** conteúdo → `padding` (interno) → `border` → `margin` (externo).
- **Viewport lógica** = resolução física ÷ DPR (1080 ÷ 2 = 540).
- **Meta viewport:** `width=device-width, initial-scale=1.0`.
- **SEO / compartilhamento:** `title` e `description` (busca), `keywords`, `robots` (`index, follow` / `noindex`), `canonical` (URL preferencial), Open Graph (redes sociais), `lang` e `charset="UTF-8"` (idioma e acentos), `rel="icon"` (favicon).
