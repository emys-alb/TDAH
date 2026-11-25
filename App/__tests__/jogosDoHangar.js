const { novaMemoria, revelar, linhaVencedora, jogadaDoPip } = require('../aventura/regrasDosJogos');

it.each([4, 6])('distribui exatamente duas cartas de cada um dos %i pares', pares => {
  const jogo = novaMemoria(pares);
  expect(jogo.cartas).toHaveLength(pares * 2);
  for (const figura of jogo.cartas) expect(jogo.cartas.filter(c => c.arte === figura.arte)).toHaveLength(2);
});
it('mantém dois erros visíveis e impede reabrir a mesma carta ou um par encontrado', () => {
  const inicial = novaMemoria(4, () => 0.999);
  const aberta = revelar(inicial, 0);
  expect(revelar(aberta, 0)).toBe(aberta);
  const erro = revelar(aberta, 1);
  expect(erro.abertas).toEqual([0, 1]);
  expect(revelar(erro, 2)).toBe(erro);
  const par = revelar(aberta, 4);
  expect(par.achadas).toEqual([0, 4]);
  expect(par.tentativas).toBe(1);
  expect(revelar(par, 0)).toBe(par);
});
it('Pip ganha quando pode e defende uma ameaça no modo desafio', () => {
  const defesa = ['X','X',null, null,'O',null, null,null,null];
  expect(jogadaDoPip(defesa, true)).toBe(2);
  const ataque = ['O',null,'X', 'X','O',null, null,'X',null];
  expect(jogadaDoPip(ataque, false)).toBe(8);
  expect(jogadaDoPip(ataque, true)).toBe(8);
});
it('reconhece diagonais e encerra partidas vencidas ou empatadas', () => {
  const venceu = [null,null,'X', null,'X',null, 'X','O','O'];
  expect(linhaVencedora(venceu)).toEqual([2,4,6]);
  expect(jogadaDoPip(venceu, false)).toBeNull();
  const empate = ['X','O','X','X','O','O','O','X','X'];
  expect(linhaVencedora(empate)).toBeUndefined();
  expect(jogadaDoPip(empate, true)).toBeNull();
});
