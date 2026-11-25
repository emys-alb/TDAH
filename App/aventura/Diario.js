import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Botao, Carinhas, Figura, T, Titulo, caixa, campo, cor, linha } from './interface';
import { SENTIMENTOS, diaDe, nomeDoDia } from './modelo';

export default function Diario({ estado, data, agir, inicial }) {
  const diario = diaDe(estado, data).diario;
  const [humor, setHumor] = useState(inicial || diario?.humor);
  const [nota, setNota] = useState(diario?.nota || '');
  const [salvou, setSalvou] = useState(false);
  const dias = Object.keys(estado.dias).filter(d => estado.dias[d].diario).sort().reverse();
  return <View style={{ width: '100%', maxWidth: 740, alignSelf: 'center' }}>
    <Titulo sub="Guarde um pedacinho da sua viagem.">Diário de bordo</Titulo>
    <View style={[caixa, { borderColor: '#C7E3D5' }]}>
      <T size={14} forte color={cor.verde}>{nomeDoDia(data, true)}</T>
      <T size={23} forte style={{ marginTop: 4 }}>Como você se sente hoje?</T>
      <Carinhas valor={humor} escolher={id => { setHumor(id); setSalvou(false); }} />
      <T forte size={15} style={{ marginTop: 11, marginBottom: 7 }}>Quer contar mais? (opcional)</T>
      <TextInput style={[campo, { minHeight: 76, textAlignVertical: 'top' }]} multiline maxLength={360}
        accessibilityLabel="Anotação do diário" value={nota} onChangeText={v => {setNota(v); setSalvou(false);}}
        placeholder="Hoje eu..." placeholderTextColor={cor.fraca} />
      <Botao titulo="Salvar no diário" icone="book-open" disabled={!humor} style={{ marginTop: 14, alignSelf: 'flex-start' }}
        onPress={() => { agir({ tipo: 'diario', humor, nota }); setSalvou(true); }} />
      {salvou && <T accessibilityLiveRegion="polite" size={15} color={cor.verde} style={{ marginTop: 8 }}>Entrada registrada no diário.</T>}
    </View>
    {dias.length > 0 && <View style={[caixa, { marginTop: 16 }]}>
      <T forte size={21} accessibilityRole="header">Minhas viagens</T>
      {dias.map(d => { const entrada = estado.dias[d].diario;
        return <View key={d} style={[linha, { paddingVertical: 12, borderBottomWidth: d === dias[dias.length - 1] ? 0 : 1, borderColor: cor.linha }]}>
          <Figura nome={entrada.humor} size={42} /><View style={{ marginLeft: 12, flex: 1 }}>
            <T forte>{nomeDoDia(d)} · {SENTIMENTOS.find(s => s.id === entrada.humor)?.nome}</T>
            {!!entrada.nota && <T size={15} color={cor.fraca}>{entrada.nota}</T>}
          </View></View>;
      })}
    </View>}
  </View>;
}
