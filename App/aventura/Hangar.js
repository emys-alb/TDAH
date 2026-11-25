import React from 'react';
import { View } from 'react-native';
import { Alvo, Botao, Figura, Icone, T, Titulo, caixa, cor, linha } from './interface';
import { contagem } from './modelo';
import Memoria from './Memoria';
import Velha from './Velha';
import Asteroides from './Jogo';

const jogos = [
  { id: 'memoria', nome: 'Memória cósmica', descricao: 'Vire as cartas e encontre os pares espaciais.', arte: 'saturno', fundo: '#EEE9FB' },
  { id: 'velha', nome: 'Jogo da velha com Pip', descricao: 'Forme uma linha antes do seu copiloto.', arte: 'feliz', fundo: '#DAF0E5' },
  { id: 'asteroides', nome: 'Rota dos asteroides', descricao: 'Desvie das rochas e traga moedas para a base.', arte: 'foguete', fundo: '#FBEBC8' },
];
export default function Hangar({ id, ...props }) {
  const { estado, data, ir } = props;
  const aberto = contagem(estado, data).jogo;
  if (aberto) {
    if (id === 'memoria') return <Memoria {...props} />;
    if (id === 'velha') return <Velha {...props} />;
    if (id === 'asteroides') return <Asteroides {...props} />;
  }
  return <View style={{ width: '100%', maxWidth: 680, alignSelf: 'center' }}>
    <Titulo sub={aberto ? 'Escolha sua próxima brincadeira.' : 'Visite todas as missões de hoje para abrir o hangar.'}>Hangar de jogos</Titulo>
    {jogos.map(j => <Alvo key={j.id} label={j.nome} disabled={!aberto} onPress={() => ir('Jogo', j.id)}
      style={[caixa, linha, { marginBottom: 12, padding: 17 }]}>
      <View style={{ backgroundColor: j.fundo, borderRadius: 18, padding: 10 }}><Figura nome={j.arte} size={42} /></View>
      <View style={{ flex: 1, marginHorizontal: 13 }}><T forte size={20}>{j.nome}</T><T color={cor.fraca} size={15}>{j.descricao}</T></View>
      <Icone nome={aberto ? 'play-circle' : 'lock'} />
    </Alvo>)}
    {!aberto && <Botao titulo="Ver missões" onPress={() => ir('Missões')} />}
  </View>;
}
