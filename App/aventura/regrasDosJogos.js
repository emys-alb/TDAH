const FIGURAS = [
  { arte: 'terra', nome: 'Terra' }, { arte: 'lua', nome: 'Lua' },
  { arte: 'saturno', nome: 'Saturno' }, { arte: 'foguete', nome: 'Foguete' },
  { arte: 'feliz', nome: 'Astronauta' }, { arte: 'medalha', nome: 'Medalha' },
];

function novaMemoria(pares, sortear = Math.random) {
  const figuras = FIGURAS.slice(0, pares);
  const cartas = figuras.concat(figuras);
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(sortear() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
  return { cartas, abertas: [], achadas: [], tentativas: 0 };
}

function revelar(jogo, indice) {
  const { cartas, abertas, achadas } = jogo;
  if (!cartas[indice] || abertas.length === 2 || abertas.includes(indice) || achadas.includes(indice)) return jogo;
  if (!abertas.length) return { ...jogo, abertas: [indice] };
  const dupla = [abertas[0], indice];
  const acertou = cartas[abertas[0]].arte === cartas[indice].arte;
  return { ...jogo, abertas: acertou ? [] : dupla, achadas: acertou ? achadas.concat(dupla) : achadas, tentativas: jogo.tentativas + 1 };
}

const LINHAS = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function linhaVencedora(casas) {
  return LINHAS.find(([a, b, c]) => casas[a] && casas[a] === casas[b] && casas[a] === casas[c]);
}
function marcar(casas, indice, marca) {
  return casas.map((valor, i) => i === indice ? marca : valor);
}
function livres(casas) {
  return casas.map((marca, i) => marca ? -1 : i).filter(i => i >= 0);
}
function pontuar(casas, vez) {
  const linha = linhaVencedora(casas);
  const vagas = livres(casas);
  if (linha) return (casas[linha[0]] === 'O' ? 1 : -1) * (vagas.length + 1);
  if (!vagas.length) return 0;
  const pontos = vagas.map(i => pontuar(marcar(casas, i, vez), vez === 'O' ? 'X' : 'O'));
  return vez === 'O' ? Math.max(...pontos) : Math.min(...pontos);
}
function jogadaDoPip(casas, desafio, sortear = Math.random) {
  const vagas = livres(casas);
  if (linhaVencedora(casas) || !vagas.length) return null;
  let opcoes = vagas;
  if (desafio) {
    const pontos = vagas.map(i => pontuar(marcar(casas, i, 'O'), 'X'));
    const melhor = Math.max(...pontos);
    opcoes = vagas.filter((_, i) => pontos[i] === melhor);
  } else {
    const vitoria = vagas.find(i => linhaVencedora(marcar(casas, i, 'O')));
    if (vitoria !== undefined) return vitoria;
  }
  return opcoes[Math.floor(sortear() * opcoes.length)];
}
module.exports = { novaMemoria, revelar, marcar, linhaVencedora, jogadaDoPip };
