import React, { useState } from 'react';
import { View } from 'react-native';
import { Alvo, Botao, Figura, Flutuar, Icone, T, Titulo, caixa, cor, entre } from './interface';
import { novaMemoria, revelar } from './regrasDosJogos';

export default function Memoria({ animar }) {
  const [jogo, setJogo] = useState(() => novaMemoria(4));
  const { cartas, abertas, achadas, tentativas } = jogo;
  const pares = cartas.length / 2;
  const fim = achadas.length === cartas.length;
  const comparar = abertas.length === 2;
  const colunas = 4;
  const mensagem = fim ? 'Você encontrou todos os pares!' : comparar ? 'São figuras diferentes. Observe as cartas antes de escondê-las.' :
    abertas.length ? 'Agora procure a outra carta igual.' : tentativas ? 'Escolha a primeira carta do próximo par.' : 'Escolha uma carta para começar.';
  return <View style={{ width: '100%', maxWidth: 580, alignSelf: 'center' }}>
    <Titulo sub="Encontre duas figuras iguais. Você tem o tempo que quiser.">Memória cósmica</Titulo>
    <View style={caixa}>
      <View style={entre}><T forte color={cor.roxo}>Pares · {achadas.length / 2}/{pares}</T><T size={15}>Tentativas · {tentativas}</T></View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -3, marginVertical: 10 }}>
        {cartas.map((c, i) => {
          const achou = achadas.includes(i);
          const mostra = achou || abertas.includes(i);
          const label = 'Carta ' + (i + 1) + ', ' + (mostra ? c.nome + (achou ? ', par encontrado' : '') : 'fechada');
          return <View key={i} style={{ width: (100 / colunas) + '%', padding: 3 }}>
            <Alvo label={label} disabled={mostra || comparar} onPress={() => setJogo(anterior => revelar(anterior, i))}
              style={{ height: 78, borderRadius: 12, borderWidth: 2, borderColor: achou ? '#64A78B' : mostra ? '#C1ABEB' : '#514581',
                backgroundColor: achou ? '#DFF4E9' : mostra ? '#F3EEFD' : '#363062', alignItems: 'center' }}>
              {mostra ? <Flutuar animar={animar}><Figura nome={c.arte} size={35} /></Flutuar> : <Icone nome="star" size={24} color="#FFDF98" />}
              <T forte size={11} color={mostra ? cor.tinta : '#E2DDF6'}>{mostra ? c.nome : i + 1}</T>
            </Alvo>
          </View>;
        })}
      </View>
      <T accessibilityLiveRegion="polite" forte color={cor.roxo}>{mensagem}</T>
      {comparar && <Botao titulo="Esconder as duas cartas" tipo="suave" style={{ marginTop: 12 }}
        onPress={() => setJogo(atual => ({ ...atual, abertas: [] }))} />}
      {fim && <Botao titulo="Jogar de novo" icone="rotate-ccw" onPress={() => setJogo(novaMemoria(pares))} style={{ marginTop: 12 }} />}
      {(fim || (!tentativas && !abertas.length)) && <Botao tipo="contorno" titulo={pares === 4 ? 'Jogar com 6 pares' : 'Jogar com 4 pares'}
        style={{ marginTop: 10 }} onPress={() => setJogo(novaMemoria(pares === 4 ? 6 : 4))} />}
    </View>
  </View>;
}
