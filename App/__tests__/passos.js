const { estadoInicial, atualizar, diaDe, totalEstrelas, contagem, proxima } = require('../aventura/modelo');
const { MOCHILA, passosDaMissao, andamentoDaMissao } = require('../aventura/passos');
const hoje = '2026-11-25', amanha = '2026-11-26';
const mochila = { id: 'mochila', titulo: 'Preparar a mochila', passos: MOCHILA, horario: '22:00', ativa: true };
const agir = (e, tipo, dados = {}) => atualizar(e, { data: hoje, id: mochila.id, tipo, ...dados });
const iniciar = () => agir(estadoInicial(), 'agendar', { diaAlvo: hoje, item: mochila });
const andamento = e => andamentoDaMissao(diaDe(e, hoje), mochila);
it('retoma no passo exato após recarregar e conclui uma única vez no último passo', () => {
  let e = agir(iniciar(), 'passo', { indice: 0 });
  expect(agir(e, 'passo', { indice: 0 })).toBe(e);
  e = agir(e, 'pausar');
  expect(agir(e, 'passo', { indice: 1 })).toBe(e);
  e = JSON.parse(JSON.stringify(e));
  expect(proxima(e, hoje).id).toBe(mochila.id);
  expect(andamento(e).indice).toBe(1);
  expect(contagem(e, hoje).visitadas).toBe(0);
  expect(totalEstrelas(e)).toBe(0);
  e = agir(e, 'retomar', { nota: ' Ficar juntos ' });
  expect(agir(e, 'retomar', { nota: 'repetida' })).toBe(e);
  expect(andamento(e).retomadas).toEqual([{ passo: 'Colocar o estojo', nota: 'Ficar juntos' }]);
  expect(agir(e, 'concluir')).toBe(e);
  e = agir(e, 'passo', { indice: 1 });
  e = agir(e, 'passo', { indice: 2 });
  expect(totalEstrelas(e)).toBe(5);
  expect(agir(e, 'passo', { indice: 2 })).toBe(e);
  expect(contagem(e, hoje).visitadas).toBe(1);
});
it('preserva a sequência iniciada diante de edições e começa uma nova por dia', () => {
  let e = agir(estadoInicial(), 'rotina', { item: mochila });
  e = agir(e, 'passo', { indice: 0 });
  e = agir(e, 'rotina', { item: { ...mochila, passos: ['Buscar a bolsa', 'Guardar os livros'] } });
  expect(andamento(e).passos).toEqual(MOCHILA);
  const tarefa = e.rotina.find(t => t.id === mochila.id);
  expect(andamentoDaMissao(diaDe(e, amanha), tarefa)).toMatchObject({ indice: 0, passos: tarefa.passos });
});
it('permite retomar sem nota, registrar várias pausas e anotar uma retomada histórica', () => {
  let e = iniciar();
  for (let i = 0; i < 2; i++) { e = agir(e, 'pausar'); e = agir(e, 'retomar'); }
  expect(andamento(e).retomadas).toHaveLength(2);
  e = agir(e, 'notaRetomada', { data: amanha, diaAlvo: hoje, numero: 0, nota: 'Conversamos' });
  expect(andamento(e).retomadas.map(r => r.nota)).toEqual(['Conversamos', '']);
  expect(e.dias[amanha]).toBeUndefined();
  e = agir(e, 'notaRetomada', { diaAlvo: hoje, numero: 0, nota: '' });
  expect(andamento(e).retomadas[0].nota).toBe('');
});
it('reconhece exemplos originais em dados antigos e preserva rotinas personalizadas', () => {
  const t = { ...estadoInicial().rotina[0] };
  delete t.passos;
  expect(passosDaMissao(t)).toHaveLength(3);
  expect(passosDaMissao({ ...t, descricao: 'Uma orientação da família' })).toEqual([]);
  expect(passosDaMissao({ ...t, passos: [] })).toEqual([]);
});
