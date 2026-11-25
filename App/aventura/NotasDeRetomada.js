import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Botao, T, campo, cor } from './interface';

export function CampoDeNota({ valor, mudar }) {
  return <View style={{ marginTop: 10 }}>
    <T forte size={15}>O que ajudou a retomar? (opcional)</T>
    <TextInput accessibilityLabel="O que ajudou a retomar" value={valor} onChangeText={mudar} multiline maxLength={360}
      placeholder="Ex. Fizemos o primeiro movimento juntos." placeholderTextColor={cor.fraca}
      style={[campo, { minHeight: 70, marginTop: 5, textAlignVertical: 'top' }]} />
  </View>;
}
export default function NotaDeRetomada({ retomada, numero, salvar }) {
  const [editando, editar] = useState(false);
  const [texto, mudar] = useState(retomada.nota);
  const titulo = 'Retomada ' + numero + (retomada.passo ? ' · ' + retomada.passo : '');
  return <View style={{ padding: 12, marginTop: 8, borderRadius: 12, backgroundColor: '#EAF7F1' }}>
    <T forte size={14} color={cor.verde}>{titulo}</T>
    {editando ? <>
      <CampoDeNota valor={texto} mudar={mudar} />
      <Botao titulo="Salvar anotação" tipo="suave" style={{ marginTop: 7 }} onPress={() => { salvar(texto); editar(false); }} />
      <Botao titulo="Cancelar" tipo="contorno" style={{ marginTop: 5 }} onPress={() => editar(false)} />
    </> : <>
      {!!retomada.nota && <T style={{ marginTop: 4 }}>{retomada.nota}</T>}
      <Botao titulo={retomada.nota ? 'Editar anotação' : 'Anotar o que ajudou'} tipo="contorno" style={{ marginTop: 7 }}
        onPress={() => { mudar(retomada.nota); editar(true); }} />
    </>}
  </View>;
}
