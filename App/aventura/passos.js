const semente = require('../bd/nomeDaCrianca.json');

const MOCHILA = ['Guardar o caderno', 'Colocar o estojo', 'Fechar a mochila'];

function passosDaMissao(tarefa) {
  if (Array.isArray(tarefa.passos)) return tarefa.passos;
  const original = semente.find(t => String(t.id) === tarefa.id && t.titulo === tarefa.titulo && t.descricao === tarefa.descricao);
  return original?.passos || [];
}

function andamentoDaMissao(dia, tarefa) {
  return dia.andamentos?.[tarefa.id] || {
    titulo: tarefa.titulo, passos: passosDaMissao(tarefa), indice: 0, pausado: false, retomadas: [],
  };
}

function atualizarAndamento(dia, tarefa, acao) {
  const a = andamentoDaMissao(dia, tarefa);
  let novo;
  if (acao.tipo === 'pausar' && !a.pausado) {
    novo = { ...a, pausado: true };
  } else if (acao.tipo === 'retomar' && a.pausado) {
    const retomada = { passo: a.passos[a.indice] || '', nota: (acao.nota || '').trim() };
    novo = { ...a, pausado: false, retomadas: [...a.retomadas, retomada] };
  } else if (acao.tipo === 'passo' && !a.pausado && a.indice === acao.indice && a.indice < a.passos.length) {
    novo = { ...a, indice: a.indice + 1 };
  } else {
    return dia;
  }
  return { ...dia, emCurso: tarefa.id, andamentos: { ...dia.andamentos, [tarefa.id]: novo } };
}
module.exports = { MOCHILA, passosDaMissao, andamentoDaMissao, atualizarAndamento };
