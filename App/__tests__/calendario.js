const { inicioDoMes, diasDoMes, planoDoDia } = require('../aventura/agenda');
const { atualizar, estadoInicial, diaDe, contagem, proxima, totalEstrelas } = require('../aventura/modelo');

const hoje = '2026-11-25';
const amanha = '2026-11-26';
const pontual = { id: 'd-passeio', titulo: 'Passear', horario: '07:00', descricao: '', ativa: true };
const agir = (e, tipo, dados = {}) => atualizar(e, { data: hoje, tipo, ...dados });
const nova = () => agir(estadoInicial(), 'iniciarAgenda');

it('calcula fevereiro bissexto e navega entre anos usando datas locais', () => {
  expect(diasDoMes('2028-02-01')).toHaveLength(29);
  expect(diasDoMes('2027-02-01')).toHaveLength(28);
  expect(inicioDoMes('2026-12-31', 1)).toBe('2027-01-01');
  expect(inicioDoMes('2027-01-31', -1)).toBe('2026-12-01');
});
it('isola o agendamento por data e o integra às estrelas e ao próximo dia', () => {
  let e = agir(nova(), 'agendar', { diaAlvo: amanha, item: pontual });
  expect(contagem(e, hoje).total).toBe(10);
  expect(contagem(e, amanha).total).toBe(11);
  expect(proxima(e, amanha).id).toBe(pontual.id);
  expect(agir(e, 'concluir', { id: pontual.id })).toBe(e);
  e = agir(e, 'concluir', { id: pontual.id, data: amanha });
  expect(totalEstrelas(e)).toBe(5);
  expect(diaDe(e, amanha).resultados[pontual.id].titulo).toBe('Passear');
  expect(contagem(e, '2026-11-27').total).toBe(10);
});
it('editar ou retirar uma missão por data preserva os outros dias e o histórico da rotina', () => {
  let e = nova();
  const t = e.rotina[0];
  e = agir(e, 'agendar', { diaAlvo: amanha, item: { ...t, horario: '13:00' } });
  expect(planoDoDia(e, amanha).find(m => m.id === t.id).horario).toBe('13:00');
  expect(planoDoDia(e, hoje).find(m => m.id === t.id).horario).toBe('08:10');
  e = agir(e, 'agendar', { diaAlvo: amanha, item: { ...t, ativa: false } });
  expect(contagem(e, amanha).total).toBe(9);
  e = agir(e, 'rotina', { data: '2026-11-27', item: { ...t, titulo: 'Escovar com ajuda' } });
  expect(planoDoDia(e, hoje).find(m => m.id === t.id).titulo).toBe(t.titulo);
  expect(planoDoDia(e, '2026-11-28').find(m => m.id === t.id).titulo).toBe('Escovar com ajuda');
});
it('mostra somente resultados conhecidos de uma versão antiga, preservando recompensas', () => {
  const antigo = estadoInicial();
  antigo.dias['2026-10-31'] = { resultados: { antigo: { titulo: 'Leitura', status: 'feita' } } };
  const e = agir(antigo, 'iniciarAgenda');
  expect(contagem(e, '2026-10-31')).toMatchObject({ total: 1, feitas: 1 });
  expect(contagem(e, '2026-10-30').total).toBe(0);
  expect(totalEstrelas(e)).toBe(5);
  expect(agir(e, 'agendar', { diaAlvo: '2026-10-31', item: pontual })).toBe(e);
});
