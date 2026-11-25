# Questionário - Revisão para a Prova - Questões Extras sobre Animação

S05 - Interação Homem Máquina - tópico "Revisão para 1ª Prova".
Fonte: Moodle do Inatel (https://moodle.inatel.br/mod/quiz/view.php?id=23309). "A pedido de um aluno, algumas questões sobre animação em CSS."

O gabarito vem da página de revisão de uma tentativa enviada em branco (nota 0), pois eu ainda não tinha tentado. São 5 questões de resposta curta (1 ponto cada): complete a lacuna `___` em caixa baixa, sem espaços.

---

### 1. Você criou uma animação `rotate` que gira um elemento 360 graus. Para que ela gire 180 graus em uma direção e depois volte 180 graus na direção oposta, qual a propriedade que você deve usar?

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

### 2. Você tem uma animação de pulsação (`pulse`) em um card e quer que ela comece apenas 1 segundo após o carregamento da página. Complete a propriedade para atrasar o início da animação.

```css
.card {
  animation-name: pulse;
  animation-duration: 2s;
  animation-delay: ___ ;
}
```

**Resposta: `1s`** ✅

> `animation-delay` define o atraso antes de a animação começar; útil para coordenar várias animações ou introduzir um elemento com atraso.

### 3. Você tem uma animação chamada `grow` em um card. Ao passar o mouse, você quer que ela seja executada de forma invertida, do final para o início. Complete a propriedade que controla a direção da animação.

```css
.card:hover {
  animation-name: grow;
  animation-duration: 1s;
  animation-direction: ___ ;
}
```

**Resposta: `reverse`** ✅

> `reverse` executa a animação na direção oposta à original, do último `@keyframe` para o primeiro.

### 4. Você está animando a largura de um card. A animação deve se mover para a frente no primeiro ciclo e para trás no segundo. Para que a animação alterne entre as direções, qual propriedade deve ser usada?

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

### 5. Você quer que uma animação de pulsação (`pulse`) se repita infinitamente. Qual é a propriedade que você deve usar para que a animação continue a ser executada em loop?

```css
.card.pulse {
  animation-name: pulse;
  animation-duration: 2s;
  animation-iteration-count: ___ ;
}
```

**Resposta: `infinite`** ✅

> `animation-iteration-count` controla quantas vezes a animação se repete; `infinite` faz o loop contínuo.

---

## Resumo para a prova

| Propriedade | Valores vistos |
|---|---|
| `animation-direction` | `alternate` (ida e volta, inverte a cada ciclo), `reverse` (do fim para o início) |
| `animation-delay` | tempo antes de começar (ex.: `1s`) |
| `animation-iteration-count` | número de repetições; `infinite` = loop contínuo |
