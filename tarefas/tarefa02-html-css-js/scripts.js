// objeto do usuário
const usuario = { nome: "Raphael", matricula: "123456", pendencia: false, acessibilidade: true };

// lista objetos de armários
const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false },
  { id: 2, formato: "padrao", status: true, acessivel: false },
  { id: 3, formato: "padrao", status: true, acessivel: false },
  { id: 4, formato: "padrao", status: false, acessivel: true },
  { id: 5, formato: "padrao", status: false, acessivel: true },
  { id: 6, formato: "duplo", status: true, acessivel: true },
  { id: 7, formato: "duplo", status: false, acessivel: true },
  { id: 8, formato: "duplo", status: false, acessivel: true },  
];

// função para reserva do armário, incluindo as regras.
function reservarArmario() {
  
  // obter tipo de armário selecionado pelo usuário no html.
  let tipoSelecionado = document.getElementById("tipoArmario").value;
  
  // na lista armários, filtrar apenas os armários que estão disponíveis e que são acessiveis ao usuário.
  let armariosDisponiveis = armarios.filter(a => a.formato === tipoSelecionado && a.status === true && usuario.acessibilidade === a.acessivel);
  
  // caso não exista armário disponível, retorna para o usuário mensagem.
  if (armariosDisponiveis.length === 0) {
    document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }
  
  // Caso exista armário(s) disponíveil, seguimos sorteando uma opção. 
  let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];
  
  // Depois localizamos o armário emprestado na lista de armarios e mudamos o status do armário.
  //let armarioEmprestado = armarios.find(armario => armario.id === armarioSorteado.id).status = false;
  
  //localizar o armário sorteado na lista e marca como ocupado
  let armarioEmprestado = armarios.find(armario => armario.id === armarioSorteado.id);
  //armarios.find(...) -> procura na lista o armário cujo id é igual ao do sorteado e devolve próprio objeto
  armarioEmprestado.status = false;
  //armarioEmprestado.status = false; -> marca o armário como ocupado, agora numa linha separada

  //melhoria 1: registrar data e hora da reserva
  let dataReserva = new Date();
  //new Date() -> pega a data e a hora atuais do seu pc
  armarioEmprestado.dataReserva = dataReserva;
  //armarioEmprestado.dataReserva = ... -> cria uma chave nova no objeto e guarda a data nela
  
  //melhoria 2: calcula a entrega (24h depois) e registra
  let dataEntrega = new Date(dataReserva.getTime() + 24 * 60 * 60 * 1000);
  //dataReserva.getTime() -> converte a data em milissegundos
  //24 * 60 * 60 * 1000 -> 24 horas em milissegundos (24h * 60 min * 60s * 100ms)
  //new Date(número) -> transforma o número de volta numa data.
  armarioEmprestado.dataEntrega = dataEntrega;

  // Finalmente, mudamos a pendencia do usuário para verdadeira.
  usuario.pendencia = true;
  
  // Impmimimos uma mensagem de reserva para o usuário.
  //melhoria 3: exibir a data e hora de entrega
  document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! O armário ${armarioSorteado.id} foi reservado com sucesso! Entrega das chaves até: ${dataEntrega.toLocaleString("pt-br")}`;
  //$data{datantrega...} -> insere a data no meio do texto como já aconteceu no &{usuario.nome}
  //.toLocaleString("pt-BR") -> formata como DD/MM/AAAA HH:MM:SS, em vez do forma longo em inglês

  console.log(usuario);
  console.log(armarios);

}