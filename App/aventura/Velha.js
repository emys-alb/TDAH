import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Alvo, Botao, Flutuar, Icone, Pip, T, Titulo, caixa, cor, linha } from './interface';
import { jogadaDoPip, linhaVencedora, marcar } from './regrasDosJogos';

const tabuleiroVazio = () => Array(9).fill(null);
export default function Velha({ animar }) {
  const [casas, setCasas] = useState(tabuleiroVazio);
  const [desafio, setDesafio] = useState(false);
  const vitoria = linhaVencedora(casas);
  const fim = !!vitoria || casas.every(Boolean);
  const inicio = casas.every(c => !c);
  const vezDoPip = !fim && casas.filter(Boolean).length % 2 === 1;
  useEffect(() => {
    if (!vezDoPip) return;
    const tempo = setTimeout(() => {
      const pos = jogadaDoPip(casas, desafio);
      setCasas(atual => atual === casas && pos !== null ? marcar(atual, pos, 'O') : atual);
    }, 480);
    return () => clearTimeout(tempo);
  }, [casas, vezDoPip, desafio]);
  function escolher(i) {
    setCasas(atual => atual !== casas || fim || vezDoPip || atual[i] ? atual : marcar(atual, i, 'X'));
  }
  let mensagem = vezDoPip ? 'Pip está escolhendo uma casa…' : 'Sua vez! Escolha uma casa para o X.';
  if (vitoria) mensagem = casas[vitoria[0]] === 'X' ? 'Você alinhou três! Vitória da tripulação!' : 'Pip alinhou três! Vamos jogar outra vez?';
  else if (fim) mensagem = 'Deu empate! O tabuleiro ficou cheio.';
  return <View style={{ width: '100%', maxWidth: 510, alignSelf: 'center' }}>
    <Titulo sub="Você joga com X e Pip com O. Alinhe três na horizontal, vertical ou diagonal.">Jogo da velha com Pip</Titulo>
    <View style={caixa}>
      <View style={[linha, { padding: 10, backgroundColor: '#E5F5EC', borderRadius: 15 }]}><Pip animar={animar} />
        <View style={{ flex: 1, marginLeft: 10 }}><T size={14} color={cor.verde}>{desafio ? 'Modo desafio' : 'Modo amigável'}</T>
          <T accessibilityLiveRegion="polite" forte size={17}>{mensagem}</T></View>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -4, marginTop: 10 }}>
        {casas.map((marca, i) => {
          const ganhou = vitoria && vitoria.includes(i);
          return <View key={i} style={{ width: '33.3333%', padding: 4 }}>
            <Alvo label={'Casa ' + (i + 1) + ', ' + (marca || 'livre')} disabled={!!marca || vezDoPip || fim} onPress={() => escolher(i)}
              style={{ height: 78, borderRadius: 13, borderWidth: ganhou ? 3 : 1, borderColor: ganhou ? '#AF7E25' : '#D7D1E6',
                backgroundColor: ganhou ? '#FFEDBA' : marca === 'X' ? '#EEE8FB' : marca === 'O' ? '#E1F3EB' : '#F8F7FC', alignItems: 'center' }}>
              {marca ? <Flutuar animar={animar}><Icone nome={marca === 'X' ? 'x' : 'circle'} size={38} color={marca === 'X' ? cor.roxo : cor.verde} /></Flutuar> :
                <T size={14} color={cor.fraca}>{i + 1}</T>}
            </Alvo>
          </View>;
        })}
      </View>
      {fim && <Botao titulo="Jogar de novo" icone="rotate-ccw" style={{ marginTop: 12 }} onPress={() => setCasas(tabuleiroVazio())} />}
      {(inicio || fim) && <Botao tipo="contorno" titulo={desafio ? 'Jogar no modo amigável' : 'Jogar no modo desafio'} style={{ marginTop: 10 }}
        onPress={() => { setDesafio(!desafio); setCasas(tabuleiroVazio()); }} />}
    </View>
  </View>;
}
