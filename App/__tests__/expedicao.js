const { atualizar, contagem, diaDe, estadoInicial, totalEstrelas, novaRota } = require('../aventura/modelo');
const hoje = '2026-11-25';
function estadoComMissoesSimples() {
  const estado = estadoInicial();
  return { ...estado, rotina: estado.rotina.map(t => ({ ...t, passos: [] })) };
}
function executar(estado, tipo, extras = {}) {
  return atualizar(estado, { data: hoje, id: '1', tipo, ...extras });
}
it('permite retomar uma missão adiada, premiando a conclusão só uma vez por dia', () => {
  let estado = executar(estadoComMissoesSimples(), 'pular', { motivo: 'Depois do café' });
  expect(totalEstrelas(estado)).toBe(0);
  estado = executar(estado, 'concluir');
  estado = executar(estado, 'concluir');
  estado = executar(estado, 'pular', { motivo: '' });
  estado = executar(estado, 'avaliar', { humor: 'feliz' });
  expect(totalEstrelas(estado)).toBe(5);
  expect(diaDe(estado, hoje).resultados['1'].humor).toBe('feliz');
  expect(contagem(estado, '2026-11-26').visitadas).toBe(0);
  estado = executar(estado, 'concluir', { data: '2026-11-26' });
  expect(totalEstrelas(estado)).toBe(10);
});
it('libera o voo ao visitar todas, preserva o melhor recorde e as estrelas ao editar a rotina', () => {
  let estado = estadoComMissoesSimples();
  expect(executar(estado, 'voo', { pontos: 4 })).toBe(estado);
  for (const item of estado.rotina) estado = executar(estado, item.id === '2' ? 'pular' : 'concluir', { id: item.id, motivo: '' });
  expect(contagem(estado, hoje).jogo).toBe(true);
  estado = executar(estado, 'voo', { pontos: 6 });
  estado = executar(estado, 'voo', { pontos: 2 });
  estado = executar(estado, 'rotina', { item: { ...estado.rotina[0], ativa: false } });
  expect(totalEstrelas(estado)).toBe(45);
  expect(diaDe(estado, hoje).recorde).toBe(6);
  expect(contagem(estado, '2026-11-26').jogo).toBe(false);
});
it('oferece uma moeda e duas faixas transitáveis em cada trecho', () => {
  const rota = novaRota();
  expect(rota).toHaveLength(6);
  for (const trecho of rota) expect(trecho.slice().sort()).toEqual(['livre','moeda','pedra']);
});
