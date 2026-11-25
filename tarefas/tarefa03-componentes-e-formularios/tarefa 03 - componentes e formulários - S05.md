# Tarefa - Componentes e Formulários

S05 - Interação Homem Máquina - tarefa 3 do laboratório (tópico "Componentes e Formulários").
Fonte: Moodle do Inatel, curso "S05 - Turma A" (https://moodle.inatel.br/mod/assign/view.php?id=23177).
Conteúdo completo: página no Notion do professor (https://sore-forsythia-5f7.notion.site/Componentes-e-Formul-rios-711d36f4832f4d598a1a20a7e07888a7).

**Prazo:** aberta em 30/09/2026 às 17:30; vencimento em 19/10/2026 às 23:59. Após a data de fechamento não é aceita submissão.

**Entrega no Moodle:** apenas o **link** do caderno CodePen (ou do GitHub Pages) com a interface funcionando. Não é aceito o envio de arquivos de código.

## Enunciado (Moodle)

Acesse o Notion da atividade para obter instruções completas para a execução. Depois, faça o desenvolvimento em um caderno CodePen e entregue apenas o link do caderno CodePen nesta tarefa do Moodle.

---

## Conteúdo da página no Notion

*Prof. Raphael Pereira | Interface Homem-máquina | Engenharia de Software | Inatel.*
*Módulo: Princípios de Design.*

Neste exemplo prático, implementamos um componente personalizado com o objetivo de exibir dinamicamente diferentes informações obtidas através de uma estrutura de dados JSON. Com base no projeto de laboratório, diversas informações para o usuário foram organizadas de maneira visual em um cartão, contendo: local; horário; nota média; frequência; e data de prova.

### Exemplo Prático

Nesta atividade seguiremos no projeto da disciplina, e você deverá implementar um componente, com o objetivo de exibir as seguintes informações de aula: local; horário; nota média; frequência; e data de prova. Para que seu foco de desenvolvimento seja principalmente no JavaScript, abaixo seguem os códigos que deverão ser utilizados no aperfeiçoamento do componente.

#### 1º Passo - Ajuste seu HTML

Inclua na `<body>` o componente, seguido do link para o JavaScript. É importante que o script fique depois do componente, caso contrário poderá ocorrer um erro de carregamento para o método `addEventListener`.

```html
<body>
  <aulas-component id="componente"></aulas-component>
  <script src="script_componente.js"></script>
</body>
```

#### 2º Passo - Crie um JSON

Crie um arquivo `aulas.json` e insira a lista de aulas abaixo. Lembre-se de manter esse arquivo na raiz, junto com o html, css e js.

```json
[
  {
    "id": 1,
    "disciplina": "S05 - Interface Homem-máquina",
    "data": "ter",
    "horario": "10:00",
    "local": "P1-S17",
    "prova_alert": false,
    "prova": "12/05",
    "frequencia": "10/25",
    "nota": "9"
  },
  {
    "id": 2,
    "disciplina": "E01 - Circuitos Elétricos em Corrente Contínua",
    "data": "ter",
    "horario": "10:00",
    "local": "P1-S17",
    "prova_alert": true,
    "prova": "12/05",
    "frequencia": "10/25",
    "nota": "5"
  },
  {
    "id": 3,
    "disciplina": "M02 - Álgebra e Geometria Analítica",
    "data": "ter",
    "horario": "10:00",
    "local": "P1-S17",
    "prova_alert": true,
    "prova": "12/05",
    "frequencia": "10/25",
    "nota": "7"
  }
]
```

#### 3º Passo - Crie um CSS

Crie um arquivo `styles_componente.css` e insira a lista de seletores abaixo. Lembre-se de manter esse arquivo na raiz.

```css
:root {
  --frequencia: #126ae2;
  --nota: #126ae2;
  --prova: #126ae2;
}

.titulo_aula {
  font-weight: bold;
  font-size: 15px;
  padding: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.lables {
  display: flex;
}

.lable-prova,
.lable-frequencia,
.lable-nota {
  background-color: var(--prova);
  padding: 7px 15px;
  margin-bottom: 10px;
  border-radius: 500px;
  text-align: center;
  margin-right: 10px;
}

.lable-frequencia {
  background-color: var(--frequencia);
}

.lable-nota {
  background-color: var(--nota);
}

.p_lable {
  font-size: 13px;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

#### 4º Passo - Crie um JS

Crie um arquivo `script_componente.js` e insira o código abaixo. Lembre-se de manter esse arquivo na raiz.

```javascript
class AulasComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.hoje = "ter";
  }

  connectedCallback() {
    this.loadData();
  }

  async loadData() {
    try {
      const response = await fetch('aulas.json');
      const aulas = await response.json();
      this.render(aulas);
    } catch (error) {
      console.error('Erro ao carregar os dados das aulas:', error);
    }
  }

  render(aulas) {
    const aulasDia = aulas.filter(a => a.data === this.hoje);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'styles_componente.css';
    this.shadowRoot.appendChild(link);

    this.shadowRoot.innerHTML += `
      <div>
        ${aulasDia.map(a => {
          let provaDisplay = a.prova_alert ? '' : 'display: none;';
          return `
            <div class="comp-aula">
              <div class="lable-prova p_lable" style="${provaDisplay}">PROVA: <b>${a.prova}</b></div>
              <div class="titulo_aula">${a.disciplina}</div>
              <p class="p">Local e Horário: <b>${a.local} - ${a.horario}</b></p>
              <div class="lables">
                <div class="lable-frequencia p_lable">FALTAS: <b>${a.frequencia}</b></div>
                <div class="lable-nota p_lable">CR: <b>${a.nota}</b></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
}

customElements.define('aulas-component', AulasComponent);
```

#### 5º Passo - Implemente Melhorias

O resultado deverá ser parecido com a tela abaixo (a página do Notion traz um print da interface esperada, que não foi salvo aqui). O `script_componente.js` seleciona no arquivo `aulas.json` apenas as aulas do dia da semana iguais à variável `hoje`, e também estiliza seletivamente a data de prova quando verifica que a chave `prova_alert` é `true`.

Você deve implementar as seguintes melhorias:

- A cor do elemento `div` de atributo `class` chamado `.lable-nota` deverá mudar dinamicamente dependendo do valor da nota, seguindo a seguinte regra:
  - `< 6` - vermelho
  - `>= 6` e `< 8` - laranja
  - `>= 8` - verde

**ATENÇÃO:** caso esteja fazendo no CodePen, utilize o JavaScript disponibilizado em: [Raphael Cardoso Mota Pereira - Código Ref 2026](https://codepen.io/Raphael-Cardoso-Mota-Pereira/pen/myrGLar?editors=0010).

> Você deve entregar no Moodle apenas o endereço eletrônico para visualização da interface no seu CodePen ou GitHub Pages. Atenção: o envio de arquivos com códigos não será aceito.

Abraços,
Prof. Raphael
