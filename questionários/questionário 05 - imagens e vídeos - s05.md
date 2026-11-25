# Questionário - Imagens e Vídeos

S05 - Interação Homem Máquina - tópico "Imagens e Vídeos".
Fonte: Moodle do Inatel (https://moodle.inatel.br/mod/quiz/view.php?id=23171).

**Regras**
- Tentativas ilimitadas; vale a nota mais alta.
- Aberto em 16/09/2026 às 17:30; fechamento em 28/09/2026 às 23:59.
- Depois do fechamento, não aceita novas submissões.

**Minhas tentativas** (nota final **95,00 / 100,00**; a nota de aprovação do questionário era 100,00):

| Tentativa | Enviada em | Nota | Questões erradas |
|---|---|---|---|
| 1 | 21/09/2026 às 22:15 | 95,00 | 7 |
| 2 | 21/09/2026 às 22:28 | 95,00 | 1 |
| 3 | 21/09/2026 às 22:33 | 90,00 | 12 |

Pontuação: as posições 1 a 10 valem 5 pontos cada e as posições 11 a 15 valem 10 pontos cada (total 100). Na tentativa 3, a questão errada estava numa posição de 10 pontos (nota 90); nas tentativas 1 e 2, numa de 5 pontos (nota 95).

As 15 questões foram as mesmas nas três tentativas; só a ordem das alternativas mudou. A numeração e a ordem das alternativas abaixo seguem a tentativa 1.
O gabarito foi montado cruzando as três revisões. A alternativa correta está em **negrito**, seguida da justificativa do professor (resumida).

---

### 1. A compressão de imagens pode ser classificada como 'lossy' ou 'lossless'. Qual das alternativas a seguir descreve corretamente a característica da compressão 'lossy'?

a. Remove dados da imagem original, mas garante que a imagem final seja uma réplica perfeita da original, sem qualquer alteração perceptível.
b. É ideal para fotografias e imagens com muitas cores, mas não remove dados da imagem original.
**c. Remove dados da imagem original de forma seletiva o que pode resultar em alguma perda de qualidade imperceptível.** ✅
d. Mantém 100% dos dados originais da imagem, resultando em um arquivo menor, mas com uma qualidade ligeiramente inferior.

> A compressão lossy (com perda) faz a remoção seletiva de dados: o algoritmo descarta informações menos perceptíveis ao olho humano para gerar um arquivo menor, com perda de qualidade que na maioria das vezes é imperceptível.

### 2. Um desenvolvedor quer que a imagem de capa de um vídeo seja exibida enquanto o vídeo está carregando, mas não quer que os controles de reprodução apareçam para o usuário. Qual é a combinação correta de atributos para o elemento `<video>`?

**a. `poster`, `preload="metadata"`** ✅
b. `preload="auto"`, `controls`
c. `poster`, `autoplay`, `muted`
d. `poster`, `controls`, `preload="none"`

> `poster` define a URL da imagem exibida como capa enquanto o vídeo não está disponível ou reproduzindo. `preload="metadata"` faz o navegador baixar só os metadados (duração, dimensões), não o vídeo completo. Sem o atributo `controls`, os controles não aparecem.

### 3. Qual é a principal função dos 'Metadados' de uma imagem?

a. São usados para comprimir a imagem, tornando o arquivo menor e mais leve para a web.
b. Determinam a resolução e o 'aspect ratio' da imagem, informações que não podem ser alteradas sem software especializado.
**c. Armazenam informações sobre a imagem, como data de criação, tipo de câmera, geolocalização, para uso de programas externos.** ✅
d. É uma técnica que esconde informações sensíveis, como a localização da câmera, para proteger a privacidade do usuário.

> Metadados descrevem a imagem sem afetar sua aparência. São usados por editores, galerias e plataformas online para catalogar imagens, exibir detalhes da câmera e proteger direitos autorais.

### 4. Qual é a principal vantagem de usar 'Media Queries' no CSS para otimizar a experiência do usuário em diferentes dispositivos, em comparação com o 'Aspect Ratio'?

a. O `aspect ratio` é mais flexível porque define a proporção de um elemento diretamente no CSS, enquanto `media queries` são estáticos e aplicam estilos fixos.
b. `Media queries` ajustam o `aspect ratio` da imagem automaticamente para preencher o espaço disponível na tela, o que simplifica o layout.
**c. `Media queries` permitem aplicar estilos específicos, como tamanhos de imagem e layout, com base nas características da tela, adaptando o design de forma responsiva.** ✅
d. `Media queries` são usados para alterar o formato de vídeo de paisagem para retrato, enquanto o `aspect ratio` é uma propriedade de imagem que mantém a proporção do elemento.

> Media queries aplicam regras de CSS conforme as características do dispositivo (como a largura da tela). Essa adaptabilidade define o design responsivo; o `aspect-ratio` é apenas uma das muitas propriedades que podem ser ajustadas dentro de uma media query.

### 5. Qual é o objetivo principal de usar o atributo `sizes` juntamente com `srcset`?

a. O `sizes` força o navegador a carregar a imagem com a maior resolução possível para garantir a máxima qualidade em todas as telas.
b. O `sizes` define a dimensão final da imagem no layout e o `srcset` fornece as versões de alta densidade de pixel para displays retina.
**c. O `sizes` informa o navegador sobre o tamanho da imagem em diferentes breakpoints, permitindo que ele escolha a imagem mais apropriada do `srcset`.** ✅
d. `sizes` informa o navegador sobre o tamanho de exibição final da imagem em diferentes breakpoints.

> O `srcset` lista as versões da imagem e suas larguras (ex.: `image-large.jpg 1200w`); o `sizes` informa o tamanho que a imagem ocupará no layout em cada breakpoint. Com os dois, o navegador escolhe o arquivo mais apropriado.

### 6. O 'Aspect Ratio' de uma tela, como 16:9, refere-se à:

a. Orientação da tela (paisagem ou retrato), sendo que 16:9 é usado apenas para a orientação paisagem.
b. Quantidade de pixels por polegada (DPI) da tela, que afeta a nitidez da imagem exibida.
c. A resolução total de pixels da tela, sendo que 16:9 significa que a tela tem 16 pixels de largura para cada 9 pixels de altura.
**d. Proporção entre a largura e a altura da tela, o que determina o formato visual do conteúdo e a experiência do usuário.** ✅

> É a relação matemática entre largura e altura (16:9 = 16 unidades de largura para cada 9 de altura). Afeta como imagens e vídeos são formatados e exibidos, evitando distorção.

### 7. Qual dos seguintes trechos de código CSS utiliza corretamente o `media query` para mudar a cor de fundo de um elemento para azul quando a largura da tela for maior que 768px?

a. `@media only screen and (min-width: 768px) { .elemento { background-color: blue; } }`
b. `@media screen and (max-width: 768px) { .elemento { background-color: blue; } }`
c. `@media screen and (min-width > 768px) { .elemento { background-color: blue; } }`
**d. `@media screen and (min-width: 769px) { .elemento { background-color: blue; } }`** ✅

> `min-width: 768px` já inclui telas de exatamente 768px; "maior que 768px" começa em 769px, então a opção correta usa `min-width: 769px`. (A palavra `only` é sintaxe antiga, desnecessária nos navegadores modernos.) `max-width` seria o oposto e `min-width > 768px` é sintaxe inválida.

### 8. Um designer de web está utilizando uma imagem com 300 dpi para uma página web. Qual o impacto direto disso no carregamento da página?

a. Não haverá impacto, pois o DPI é uma medida de impressão e não é relevante para a exibição de imagens em telas.
b. A imagem se adaptará melhor a diferentes resoluções de tela, devido à sua maior densidade de pixels.
**c. O tamanho do arquivo será desnecessariamente grande, podendo aumentar o tempo de carregamento e prejudicar o desempenho.** ✅
d. A imagem carregará mais rápido, pois a alta resolução permite que os navegadores a renderizem mais eficientemente.

> Na web o que importa é a dimensão da imagem em pixels (ex.: 1920x1080px). Uma imagem de 300 DPI costuma ter muito mais pixels do que a tela exibe, gerando arquivo grande, mais banda e carregamento lento.

### 9. Um desenvolvedor precisa criar um ícone que se adapte perfeitamente a qualquer tamanho de tela sem perder a qualidade. Qual tipo de imagem é a mais indicada para essa finalidade?

a. Imagem com compressão lossy, pois oferece o melhor equilíbrio entre qualidade e tamanho de arquivo.
**b. Imagem vetorial, pois sua representação matemática permite redimensionamento ilimitado sem perda de qualidade.** ✅
c. Imagem raster, devido à sua capacidade de representar detalhes complexos.
d. JPEG, porque é um formato universalmente suportado pelos navegadores modernos.

> Imagens vetoriais (como SVG) são baseadas em equações matemáticas de formas, linhas e cores, não em pixels. Ao ampliar, o navegador recalcula o desenho e mantém a nitidez: ideal para logotipos e ícones.

### 10. Considerando o uso do elemento `<picture>` para criar imagens responsivas, analise o seguinte trecho de código:

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

> O navegador avalia as `<source>` de cima para baixo. A primeira (`max-width: 600px`) não é atendida, pois 800px > 600px. A segunda (`max-width: 1200px`) é atendida, então ele escolhe `medium.jpg`. O `<img>` (`large.jpg`) só vale se nenhuma `source` combinar.

### 11. Um desenvolvedor quer que um vídeo de fundo comece a ser reproduzido assim que a página é carregada, sem que o usuário precise interagir com ele. Além disso, o vídeo não deve ter controles de reprodução visíveis. Qual combinação de atributos ele deve usar no elemento `<video>`?

a. `autoplay`, `controls`, `loop`
b. `autoplay`, `muted`, `controls`
c. `preload="auto"`, `loop`
**d. `autoplay`, `muted`, `loop`** ✅

> `autoplay` inicia a reprodução ao carregar; `muted` silencia o vídeo (navegadores modernos bloqueiam autoplay com som); `loop` repete continuamente. Sem `controls`, os controles ficam ocultos.

### 12. Qual das seguintes afirmações sobre a 'profundidade de cor' (color depth) é verdadeira?

a. Uma profundidade de cor de 8 bits é suficiente para exibir 16 milhões de cores, o que é a mesma quantidade de cores que o olho humano pode distinguir.
**b. A profundidade de cor refere-se ao número de bits usados para representar a cor de um único pixel, o que diretamente afeta a quantidade de cores possíveis e o tamanho do arquivo.** ✅
c. Quanto menor a profundidade de cor, mais o arquivo pode ser compactado com compressão sem perda, mas isso não afeta a fidelidade de cor.
d. A profundidade de cor determina o número de pixels em uma imagem, sendo que uma imagem com 24 bits de profundidade de cor tem 24 pixels.

> É a quantidade de informação de cor por pixel. Quanto mais bits, maior a gama de cores e maior o arquivo. Exemplos: 8 bits = 256 cores; 24 bits = 16,7 milhões de cores.

### 13. Qual o principal benefício do uso de Lazy Loading em imagens e vídeos?

**a. Acelera o tempo de carregamento inicial, pois carrega os recursos apenas quando eles se tornam visíveis na área de visualização do navegador.** ✅
b. Permite que os desenvolvedores criem efeitos de transição fluidos entre as imagens, melhorando a experiência do usuário.
c. Melhora a acessibilidade, pois permite que leitores de tela carreguem o conteúdo da página mais rapidamente e na ordem correta.
d. O `lazy loading` diminui o tempo de carregamento da página inteira, tornando o site mais responsivo em todos os dispositivos.

> O Lazy Loading adia recursos não críticos fora da área visível (viewport). O navegador prioriza o que o usuário vê imediatamente e a página parece carregar muito mais rápido; o recurso só é baixado quando está perto de aparecer.

### 14. Um desenvolvedor precisa exibir imagens em um site que se adaptem a diferentes resoluções de tela e densidades de pixel, carregando a imagem mais apropriada para cada dispositivo. Ele decidiu usar o atributo `srcset` no elemento `<img>`. Qual é o uso correto deste atributo para essa finalidade?

a. `<img src="small.jpg" srcset="small.jpg 1x, medium.jpg 2x, large.jpg 3x">`
b. `<img src="small.jpg" srcset="medium.jpg 800w, large.jpg 1200w">`
**c. `<img src="small.jpg" srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w">`** ✅
d. `<img src="small.jpg" srcset="small.jpg 400px, medium.jpg 800px, large.jpg 1200px">`

> O `srcset` usa o descritor `w` para indicar a largura intrínseca de cada imagem. O navegador usa isso, junto com o `sizes`, para decidir qual arquivo carregar conforme a área de visualização. `px` não é descritor válido.

### 15. Analise o seguinte código CSS para o uso de sprites:

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

> Um grande gargalo de desempenho é a latência do número de requisições HTTP. Ao combinar vários ícones em um único sprite, o navegador faz uma só requisição, reduzindo a sobrecarga de conexão.

---

## Resumo para a prova

| Tema | Ideia-chave |
|---|---|
| Compressão *lossy* | Remove dados de forma seletiva; perda geralmente imperceptível (JPEG). *Lossless* mantém todos os dados |
| Imagem vetorial (SVG) | Equações matemáticas; escala sem perder qualidade (logotipos, ícones) |
| Metadados | Data, câmera, geolocalização; descrevem a imagem, não mudam o visual |
| DPI na web | Importa a dimensão em pixels; 300 DPI gera arquivo grande e lento |
| Profundidade de cor | Bits por pixel: 8 bits = 256 cores; 24 bits = 16,7 milhões; mais bits = arquivo maior |
| Aspect ratio | Proporção largura:altura (16:9); não é resolução nem DPI |
| `srcset` + `sizes` | `srcset` lista as imagens (`400w`, `800w`...); `sizes` diz o tamanho no layout; o navegador escolhe |
| `<picture>` | `<source>` avaliadas de cima para baixo; vale a primeira que casa; `<img>` é o padrão |
| Media query "maior que 768px" | `@media (min-width: 769px)` |
| Sprites | Vários ícones em um arquivo: menos requisições HTTP |
| Lazy loading | Carrega só o que vai aparecer na tela: carregamento inicial mais rápido |
| `<video>` capa sem controles | `poster` + `preload="metadata"` (sem `controls`) |
| `<video>` de fundo | `autoplay` + `muted` + `loop` (sem `controls`) |
