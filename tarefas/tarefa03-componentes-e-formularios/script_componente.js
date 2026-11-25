//melhoria: nota < 6 - vermelho, 6 até < 8 - laranja, > 8 - verde
//cor da etiqueta de acordo com a nota
function corDaNota(nota) { //cria uma função 
    const valor = parseFloat(nota); //converte o texto entre aspas em números

    if(valor < 6) 
    {
        return '#c62828'; //vermelha
    }
    else if(valor < 8)
    {
        return '#c25000'; //laranja
    }
    else
    {
        return '#2e7d32'; //verde
    }

}


//crie um novo tipo de elemento HTML
class AulasComponent extends HTMLElement {
  constructor() {
    super(); //inicializar
    this.attachShadow({ mode: 'open' }); //criar o shadow DOM 
    this.hoje = "ter"; //guardar o dia da semana atual
  }

  connectedCallback() {
    this.loadData(); //busca os dados
  }

  async loadData() { //async - marca a função como assíncrona
    try {
      const response = await fetch('aulas.json'); //esperar resposta
      const aulas = await response.json(); //converte o .json
      this.render(aulas); //entrega a lista para a função que desenha
    } catch (error) { //se der erro, vai no console
      console.error('Erro ao carregar os dados das aulas:', error);
    }
  }

  //desenhar o cartão
  render(aulas) {
    //manter as aulas só do dia, um filtro
    const aulasDia = aulas.filter(a => a.data === this.hoje);

    const link = document.createElement('link'); //tag<link> e colocar dentro do shadow
    link.rel = 'stylesheet'; 
    link.href = 'styles_componente.css';
    this.shadowRoot.appendChild(link);

    this.shadowRoot.innerHTML += `
      <div>
        ${aulasDia.map(a => { //percorrer cada aula do dia e inserem os valores em cada aula no texto
            let provaDisplay = a.prova_alert ? '' : 'display: none;';
            
            //chamar a função para a nota da aula atual
            let corNota = corDaNota(a.nota); 

          return `
            <div class="comp-aula">
              <div class="lable-prova p_lable" style="${provaDisplay}">PROVA: <b>${a.prova}</b></div>
              <div class="titulo_aula">${a.disciplina}</div>
              <p class="p">Local e Horário: <b>${a.local} - ${a.horario}</b></p>
              <div class="lables">
                <div class="lable-frequencia p_lable">FALTAS: <b>${a.frequencia}</b></div>
                
                <div class="lable-nota p_lable" style="background-color: ${corNota};">CR: <b>${a.nota}</b></div>
                
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
}

//registrar a tag <aulas-component>
customElements.define('aulas-component', AulasComponent);