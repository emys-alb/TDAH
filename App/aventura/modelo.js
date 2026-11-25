const semente = require('../bd/nomeDaCrianca.json');

const { planoDoDia } = require('./agenda');

const { andamentoDaMissao, atualizarAndamento } = require('./passos');

const ESTRELAS = 5;
const SENTIMENTOS = [
  { id: 'feliz', nome: 'Feliz' },
  { id: 'tranquilo', nome: 'Tranquilo' },
  { id: 'chateado', nome: 'Chateado' },
];
const EMBLEMAS = [
  { nome: 'Primeira decolagem', meta: 5, arte: 'foguete', cor: '#FBE6BA' },
  { nome: 'Explorador da Lua', meta: 15, arte: 'lua', cor: '#DEE6FA' },
  { nome: 'Guardião da Terra', meta: 30, arte: 'terra', cor: '#D8EFE6' },
  { nome: 'Viajante de Saturno', meta: 50, arte: 'saturno', cor: '#F3DCED' },
];
const dois = n => String(n).padStart(2, '0');

function chaveDoDia(data = new Date()) {
  return [data.getFullYear(), dois(data.getMonth() + 1), dois(data.getDate())].join('-');
}
function nomeDoDia(chave, semana = false) {
  const [ano, mes, dia] = chave.split('-').map(Number);
  const data = new Date(ano, mes - 1, dia, 12);
  const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  const dias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  return (semana ? dias[data.getDay()] + ', ' : '') + dia + ' de ' + meses[mes - 1];
}
function estadoInicial() {
  return {
    versao: 1, movimentoReduzido: false, dias: {},
    rotina: semente.map(({ id, titulo, descricao, horario, passos }) => ({
      passos: passos || [],
      id: String(id), titulo, descricao, horario: horario.padStart(5, '0'), arte: String(id), ativa: true,
    })),
  };
}
function diaDe(estado, data) {
  return estado.dias[data] || { resultados: {}, diario: null, vooLiberado: false, recorde: null };
}
function missoesAtivas(estado, data) {
  return planoDoDia(estado, data).filter(t => t.ativa);
}
function contagem(estado, data) {
  const tarefas = missoesAtivas(estado, data);
  const dia = diaDe(estado, data);
  const feitas = tarefas.filter(t => dia.resultados[t.id]?.status === 'feita').length;
  const visitadas = tarefas.filter(t => dia.resultados[t.id]).length;
  return { feitas, visitadas, total: tarefas.length, jogo: dia.vooLiberado || (tarefas.length > 0 && visitadas === tarefas.length) };
}
function totalEstrelas(estado) {
  return Object.values(estado.dias).reduce((soma, dia) =>
    soma + Object.values(dia.resultados).filter(r => r.status === 'feita').length * ESTRELAS, 0);
}
function registrarDia(estado, data, dia) {
  const novo = { ...estado, dias: { ...estado.dias, [data]: dia } };
  if (!dia.vooLiberado && contagem(novo, data).jogo) novo.dias[data] = { ...dia, vooLiberado: true };
  return novo;
}
function atualizar(estado, acao) {
  if (acao.tipo === 'iniciarAgenda') {
    return estado.versoesRotina ? estado : { ...estado, versoesRotina: { [acao.data]: estado.rotina } };
  }
  if (acao.tipo === 'agendar') {
    const alvo = acao.diaAlvo;
    if (!alvo || alvo < acao.data) return estado;
    const diaAlvo = diaDe(estado, alvo);
    if (diaAlvo.resultados[acao.item.id]) return estado;
    const diaNovo = { ...diaAlvo, ajustes: { ...diaAlvo.ajustes, [acao.item.id]: acao.item } };
    if (alvo === acao.data) return registrarDia(estado, alvo, diaNovo);
    return { ...estado, dias: { ...estado.dias, [alvo]: diaNovo } };
  }
  if (acao.tipo === 'notaRetomada') {
    const dia = estado.dias[acao.diaAlvo];
    const a = dia?.andamentos?.[acao.id];
    if (!a?.retomadas[acao.numero]) return estado;
    const retomadas = a.retomadas.map((r, i) => i === acao.numero ? { ...r, nota: acao.nota.trim() } : r);
    const atualizado = { ...dia, andamentos: { ...dia.andamentos, [acao.id]: { ...a, retomadas } } };
    return { ...estado, dias: { ...estado.dias, [acao.diaAlvo]: atualizado } };
  }
  if (acao.tipo === 'movimento') return { ...estado, movimentoReduzido: acao.valor };
  const dia = diaDe(estado, acao.data);
  if (acao.tipo === 'rotina') {
    const item = acao.item;
    const existe = estado.rotina.some(t => t.id === item.id);
    const rotina = existe ? estado.rotina.map(t => t.id === item.id ? item : t) : [...estado.rotina, item];
    const versoesRotina = { ...estado.versoesRotina, [acao.data]: rotina };
    return registrarDia({ ...estado, rotina, versoesRotina }, acao.data, dia);
  }
  if (acao.tipo === 'diario') {
    return registrarDia(estado, acao.data, { ...dia, diario: { humor: acao.humor, nota: acao.nota.trim() } });
  }
  if (acao.tipo === 'voo') {
    if (!contagem(estado, acao.data).jogo) return estado;
    return registrarDia(estado, acao.data, { ...dia, recorde: Math.max(dia.recorde || 0, acao.pontos) });
  }
  const tarefa = missoesAtivas(estado, acao.data).find(t => t.id === acao.id);
  if (!tarefa) return estado;
  const anterior = dia.resultados[tarefa.id];
  const andamento = andamentoDaMissao(dia, tarefa);
  if (['pausar', 'retomar', 'passo'].includes(acao.tipo)) {
    if (anterior?.status === 'feita') return estado;
    let novo = atualizarAndamento(dia, tarefa, acao);
    if (novo === dia) return estado;
    const a = novo.andamentos[tarefa.id];
    if (acao.tipo === 'passo' && a.indice === a.passos.length) {
      novo = { ...novo, emCurso: null, resultados: { ...dia.resultados, [tarefa.id]: { titulo: tarefa.titulo, status: 'feita' } } };
    }
    return registrarDia(estado, acao.data, novo);
  }
  let resultado;
  if (acao.tipo === 'avaliar' && anterior?.status === 'feita') {
    resultado = { ...anterior, humor: acao.humor };
  } else if (acao.tipo === 'concluir' && !andamento.passos.length && !andamento.pausado && anterior?.status !== 'feita') {
    resultado = { titulo: tarefa.titulo, status: 'feita' };
  } else if (acao.tipo === 'pular' && anterior?.status !== 'feita') {
    resultado = { titulo: tarefa.titulo, status: 'pulada', motivo: acao.motivo.trim() };
  } else {
    return estado;
  }
  return registrarDia(estado, acao.data, { ...dia, emCurso: dia.emCurso === tarefa.id ? null : dia.emCurso, resultados: { ...dia.resultados, [tarefa.id]: resultado } });
}
function proxima(estado, data) {
  const dia = diaDe(estado, data);
  const tarefas = missoesAtivas(estado, data);
  return tarefas.find(t => t.id === dia.emCurso && dia.resultados[t.id]?.status !== 'feita') || tarefas.find(t => !dia.resultados[t.id]);
}
function novaRota(sorteio = Math.random) {
  const rota = [];
  for (let i = 0; i < 6; i += 1) {
    const moeda = Math.floor(sorteio() * 3);
    const pedra = (moeda + 1 + Math.floor(sorteio() * 2)) % 3;
    rota.push([0, 1, 2].map(p => p === moeda ? 'moeda' : p === pedra ? 'pedra' : 'livre'));
  }
  return rota;
}
module.exports = { ESTRELAS, SENTIMENTOS, EMBLEMAS, chaveDoDia, nomeDoDia, estadoInicial, diaDe, missoesAtivas,
  contagem, totalEstrelas, atualizar, proxima, novaRota };
