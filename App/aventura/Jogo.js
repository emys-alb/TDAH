import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Platform, View } from 'react-native';
import { Alvo, Barra, Botao, Fala, Figura, Flutuar, Icone, T, Titulo, caixa, cor, entre, linha } from './interface';
import { contagem, diaDe, novaRota } from './modelo';

const nomes = ['Esquerda', 'Centro', 'Direita'];
const legendas = { moeda: 'Moeda', pedra: 'Asteroide', livre: 'Espaço livre' };
const ceu = '#20234A';
function Objeto({ tipo }) {
  if (tipo === 'livre') return <Icone nome="arrow-up" size={26} color="#BAF1DA" />;
  if (tipo === 'moeda') return <View style={{ width: 38, height: 38, borderRadius: 19, borderWidth: 4,
    borderColor: '#EDAC4D', backgroundColor: '#FFE38B', alignItems: 'center', justifyContent: 'center' }}>
    <Icone nome="star" size={17} color="#845024" /></View>;
  return <View style={{ width: 38, height: 32, borderRadius: 13, transform: [{rotate:'-15deg'}], backgroundColor: '#9D8AAE', borderWidth: 2, borderColor: '#CCB8D5' }}>
    <View style={{ position:'absolute', top:3, left:6, width:10, height:8, borderRadius:5, backgroundColor:'#6E6284' }} />
    <View style={{ position:'absolute', bottom:4, right:5, width:8, height:7, borderRadius:4, backgroundColor:'#796A8F' }} /></View>;
}
function Pista({ trecho, faixa, animar, escolher, etapa }) {
  const [largura, setLargura] = useState(0);
  const pos = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    if (!animar) { pos.setValue(faixa); return; }
    const a = Animated.timing(pos, { toValue: faixa, duration: 300, easing: Easing.out(Easing.cubic), useNativeDriver: Platform.OS !== 'web' });
    a.start(); return () => a.stop();
  }, [faixa, animar, pos]);
  return <View style={{ backgroundColor: ceu, borderRadius: 19, overflow: 'hidden', marginTop: 13 }}>
    <View onLayout={e => setLargura(e.nativeEvent.layout.width)} style={{ flexDirection: 'row', minHeight: 175 }}>
      {trecho.map((tipo, i) => <Alvo key={i} label={nomes[i] + ', ' + legendas[tipo]} onPress={() => escolher(i)}
        style={{ flex: 1, borderRadius: 0, borderRightWidth: i < 2 ? 1 : 0, borderColor: '#49476C', paddingTop: 14, paddingBottom: 69, alignItems: 'center', justifyContent: 'flex-start' }}>
        <T size={14} forte color="#E3E0EF">{nomes[i]}</T>
        <View style={{ height: 47, justifyContent: 'center', marginTop: 4 }}><Objeto tipo={tipo} /></View>
        <T size={12} color="#D6D3ED">{legendas[tipo]}</T>
      </Alvo>)}
      {largura > 0 && <Animated.View pointerEvents="none" style={{ position: 'absolute', alignItems: 'center', bottom: 8, left: 0,
        width: largura / 3, transform: [{ translateX: pos.interpolate({ inputRange: [0, 2], outputRange: [0, largura * 2 / 3] }) }] }}>
        <Flutuar key={etapa} animar={animar}><Figura nome="foguete" size={51} /></Flutuar>
      </Animated.View>}
    </View>
  </View>;
}
export default function Jogo({ estado, data, agir, animar, ir }) {
  const liberado = contagem(estado, data).jogo;
  const [rota, setRota] = useState(novaRota);
  const [etapa, setEtapa] = useState(0);
  const [moedas, setMoedas] = useState(0);
  const [faixa, setFaixa] = useState(1);
  const [fala, setFala] = useState('Toque na faixa que quer atravessar. Procure a moeda dourada!');
  const passou = useRef(-1);
  const fim = etapa >= rota.length;
  const recorde = diaDe(estado, data).recorde;
  function escolher(i) {
    if (fim || passou.current === etapa) return;
    const objeto = rota[etapa][i];
    setFaixa(i);
    if (objeto === 'pedra') { setFala('O escudo da nave segurou o asteroide. Escolha outra faixa para passar.'); return; }
    passou.current = etapa;
    const pontos = moedas + (objeto === 'moeda' ? 1 : 0);
    setMoedas(pontos);
    setFala(objeto === 'moeda' ? 'Moeda a bordo! Escolha por onde vamos passar agora.' : 'Passagem tranquila! Onde está a próxima moeda?');
    if (etapa + 1 === rota.length) agir({ tipo: 'voo', pontos });
    setEtapa(etapa + 1);
  }
  function jogarDeNovo() {
    passou.current = -1; setRota(novaRota()); setMoedas(0); setEtapa(0); setFaixa(1); setFala('Nova rota à vista. Qual faixa você escolhe?');
  }
  return <View style={{ width: '100%', maxWidth: 660, alignSelf: 'center' }}>
    <Titulo sub="Uma viagem de seis trechos com Luma e Pip.">Rota dos asteroides</Titulo>
    <View style={caixa}>{!liberado ? <>
      <Fala animar={animar}>O hangar abre quando você visita as missões de hoje.</Fala>
      <Botao titulo="Ver missões" onPress={() => ir('Missões')} /></> : fim ? <>
      <View style={{ alignItems: 'center' }}><Flutuar animar={animar}><Figura nome="terra" size={84} /></Flutuar>
        <T size={27} forte style={{ marginTop: 10 }}>Pouso perfeito!</T>
        <T size={17}>Você trouxe {moedas} de {rota.length} moedas.</T>
        <T forte size={15} color={cor.roxo} style={{ marginTop: 4 }}>Recorde de hoje · {recorde} moedas</T></View>
      <Botao titulo="Voar de novo" icone="rotate-ccw" onPress={jogarDeNovo} style={{ marginTop: 18 }} />
      <Botao titulo="Voltar à base" tipo="contorno" onPress={() => ir('Base', undefined, true)} style={{ marginTop: 8 }} /></> : <>
      <View style={entre}><T forte>Trecho {etapa + 1} de {rota.length}</T><T forte color={cor.roxo}>Moedas · {moedas}</T></View>
      <View style={{ marginTop: 8 }}><Barra valor={etapa} total={rota.length} /></View>
      <Pista faixa={faixa} animar={animar} escolher={escolher} trecho={rota[etapa]} etapa={etapa} />
      <View accessibilityLiveRegion="polite"><Fala animar={animar}>{fala}</Fala></View>
    </>}</View>
  </View>;
}
