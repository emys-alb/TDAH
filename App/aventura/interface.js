import React, { useEffect, useRef, useState } from 'react';
import { AccessibilityInfo, Animated, Easing, Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import glifos from '@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Feather.json';
import { origem } from './arte';
import { SENTIMENTOS } from './modelo';

export const cor = {
  fundo: '#F7F6FB', branco: '#FFFFFF', tinta: '#25243E', fraca: '#57576D', linha: '#E3E1EC',
  roxo: '#533CA4', lilas: '#EAE5FA', ceu: '#17183D', manteiga: '#FFD879',
  menta: '#D9F2E5', verde: '#236047', laranja: '#FFDABF', creme: '#FFF3CF',
};
export const linha = { flexDirection: 'row', alignItems: 'center' };
export const entre = { ...linha, justifyContent: 'space-between' };
export const caixa = { backgroundColor: cor.branco, borderWidth: 1, borderColor: cor.linha, borderRadius: 22, padding: 20 };
export const campo = { fontFamily: 'NunitoBody', color: cor.tinta, fontSize: 17, borderColor: '#BDB8CE',
  borderWidth: 1, backgroundColor: cor.branco, paddingHorizontal: 14, paddingVertical: 11, borderRadius: 12, minHeight: 48 };

export function T({ children, size = 16, color = cor.tinta, forte, style, ...resto }) {
  return <Text {...resto} style={[{ fontSize: size, lineHeight: Math.ceil(size * 1.34), color,
    fontFamily: forte ? 'NunitoDisplay' : 'NunitoBody', includeFontPadding: false }, style]}>{children}</Text>;
}
export function Icone({ nome, size = 20, color = cor.roxo }) {
  return <Text accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants"
    aria-hidden style={{ fontFamily: 'IconesDeBordo', fontSize: size, lineHeight: size + 3, color, includeFontPadding: false }}>
    {String.fromCharCode(glifos[nome])}</Text>;
}
export function Figura({ nome, size = 46, style, descricao, resizeMode = 'contain' }) {
  return <Image source={origem(nome)} resizeMode={resizeMode} accessible={!!descricao} accessibilityLabel={descricao}
    style={[{ width: size, height: size }, style]} />;
}
export function Alvo({ children, onPress, label, disabled = false, selected, style, ...props }) {
  return <Pressable accessibilityRole="button" accessibilityLabel={label} disabled={disabled} onPress={onPress}
    accessibilityState={{ disabled, selected }} {...props}
    style={({ pressed, hovered }) => [est.alvo, style, hovered && !disabled && est.sobre,
      pressed && !disabled && est.pressionado]}>{children}</Pressable>;
}
const botoes = {
  principal: [cor.roxo, cor.branco, cor.roxo], sol: [cor.manteiga, '#392C22', cor.manteiga],
  suave: [cor.lilas, cor.roxo, cor.lilas], contorno: [cor.branco, cor.roxo, '#CBC5DC'],
};
export function Botao({ titulo, icone, onPress, tipo = 'principal', disabled, style, label }) {
  const [bg, fg, borda] = disabled ? ['#ECEBF1', '#6B6977', '#E3E1E9'] : botoes[tipo];
  return <Alvo label={label || titulo} onPress={onPress} disabled={disabled}
    style={[est.botao, { backgroundColor: bg, borderColor: borda }, style]}>
    {icone && <View style={{ marginRight: 9 }}><Icone nome={icone} color={fg} size={17} /></View>}
    <T forte color={fg}>{titulo}</T>
  </Alvo>;
}
export function Link({ titulo, onPress, icone = 'chevron-right' }) {
  return <Alvo onPress={onPress} label={titulo} style={{ ...linha, paddingHorizontal: 5, minHeight: 44 }}>
    <T size={14} forte color={cor.roxo}>{titulo}</T><Icone nome={icone} size={16} />
  </Alvo>;
}
export function Titulo({ children, sub, size = 30 }) {
  return <View style={{ marginBottom: 18 }}>
    <T accessibilityRole="header" forte size={size} style={{ letterSpacing: -0.8 }}>{children}</T>
    {!!sub && <T color={cor.fraca} style={{ marginTop: 4 }}>{sub}</T>}
  </View>;
}
export function useMovimento(preferencia) {
  const [sistema, setSistema] = useState(true);
  useEffect(() => {
    let vivo = true;
    const mudar = v => { if (vivo) setSistema(v); };
    AccessibilityInfo.isReduceMotionEnabled().then(mudar).catch(() => {});
    AccessibilityInfo.addEventListener('reduceMotionChanged', mudar);
    return () => { vivo = false; AccessibilityInfo.removeEventListener('reduceMotionChanged', mudar); };
  }, []);
  return !sistema && !preferencia;
}
export function Flutuar({ children, animar, repetir = false, style }) {
  const fase = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    fase.setValue(0);
    if (!animar) return;
    const movimento = (valor, duracao) => Animated.timing(fase, { toValue: valor, duration: duracao,
      easing: Easing.inOut(Easing.sin), useNativeDriver: Platform.OS !== 'web', isInteraction: false });
    const anim = repetir ? Animated.loop(Animated.sequence([movimento(1, 1150), movimento(0, 1150)]))
      : movimento(1, 360);
    anim.start();
    return () => anim.stop();
  }, [animar, fase, repetir]);
  return <Animated.View style={[style, animar && { transform: [{ translateY: fase.interpolate({
    inputRange: [0, 1], outputRange: repetir ? [0, -5] : [9, 0] }) }] }]}>{children}</Animated.View>;
}
export function Pip({ animar }) {
  return <Flutuar animar={animar} repetir style={{ width: 54, height: 54, justifyContent: 'flex-end', alignItems: 'center' }}>
    <View style={{ width: 4, height: 8, backgroundColor: '#E8BA59', position: 'absolute', top: 2, left: 34 }} />
    <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#FFD36D', position: 'absolute', top: 0, left: 32 }} />
    <View style={{ width: 47, height: 33, borderRadius: 12, backgroundColor: '#8CCFB5', padding: 4, borderWidth: 2, borderColor: '#406E67' }}>
      <View style={{ flex: 1, ...linha, justifyContent: 'space-evenly', backgroundColor: '#FFEAC3', borderRadius: 7 }}>
        {[0, 1].map(i => <View key={i} style={{ width: 4, height: 7, borderRadius: 2, backgroundColor: '#3B353B' }} />)}
      </View>
    </View>
    <View style={{ width: 35, height: 9, borderRadius: 5, borderColor: '#3F4E59', borderWidth: 2, backgroundColor: '#D9AE65' }} />
  </Flutuar>;
}
export function Fala({ children, animar }) {
  return <View style={{ ...linha, backgroundColor: '#EAF7F1', padding: 15, borderRadius: 18, marginVertical: 14 }}>
    <Pip animar={animar} /><View style={{ flex: 1, marginLeft: 14 }}>
      <T forte size={14} color={cor.verde}>Pip, seu copiloto</T><T size={16} style={{ marginTop: 2 }}>{children}</T>
    </View>
  </View>;
}
export function Carinhas({ valor, escolher }) {
  return <View style={{ flexDirection: 'row', marginHorizontal: -4, marginVertical: 8 }}>
    {SENTIMENTOS.map(s => {
      const ativo = valor === s.id;
      return <Alvo key={s.id} label={s.nome} selected={ativo} onPress={() => escolher(s.id)}
        style={{ flex: 1, paddingVertical: 11, marginHorizontal: 4, alignItems: 'center', justifyContent: 'center',
          borderWidth: 2, borderColor: ativo ? cor.roxo : cor.linha, backgroundColor: ativo ? cor.lilas : cor.branco, borderRadius: 15 }}>
        <Figura nome={s.id} size={43} /><T size={14} forte color={ativo ? cor.roxo : cor.tinta} style={{ marginTop: 5 }}>{s.nome}</T>
      </Alvo>;
    })}
  </View>;
}
export function Barra({ valor, total, tom = '#7963D2' }) {
  const percentual = total ? Math.min(100, valor / total * 100) : 0;
  return <View accessible accessibilityRole="progressbar" accessibilityValue={{ min: 0, max: total || 1, now: valor }}
    accessibilityLabel="Progresso" style={{ height: 9, backgroundColor: '#E7E4F0', borderRadius: 5, overflow: 'hidden' }}>
    <View style={{ width: percentual + '%', height: 9, backgroundColor: tom, borderRadius: 5 }} />
  </View>;
}
export const coresMissao = ['#E2EAFB', '#FBE8CE', '#E6E1F8', '#D9F0E5', '#F5DEEB'];
export function LinhaMissao({ tarefa, resultado, onPress, ultima }) {
  const feita = resultado?.status === 'feita';
  const estado = feita ? 'Concluída' : resultado ? 'Para depois' : '';
  const fundo = coresMissao[(Number(tarefa.arte) - 1) % coresMissao.length] || cor.lilas;
  return <Alvo onPress={onPress} label={tarefa.titulo + ', ' + tarefa.horario + (estado ? ', ' + estado : '')}
    style={[entre, { paddingVertical: 11, borderBottomColor: cor.linha, borderBottomWidth: ultima ? 0 : 1 }]}>
    <View style={{ width: 47, height: 47, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: fundo }}>
      <Figura nome={tarefa.arte} size={33} />
    </View>
    <View style={{ flex: 1, marginHorizontal: 12 }}>
      <T forte size={17}>{tarefa.titulo}</T>
      <View style={linha}><Icone nome="clock" size={12} color={cor.fraca} /><T size={13} color={cor.fraca} style={{ marginLeft: 5 }}>{tarefa.horario}{estado ? ' · ' + estado : ''}</T></View>
    </View>
    <Icone nome={feita ? 'check-circle' : 'chevron-right'} color={feita ? cor.verde : '#89849D'} size={19} />
  </Alvo>;
}
const est = StyleSheet.create({
  alvo: { minHeight: 44, justifyContent: 'center', borderRadius: 8 },
  botao: { ...linha, minHeight: 49, justifyContent: 'center', paddingHorizontal: 17, paddingVertical: 9, borderRadius: 14, borderWidth: 1 },
  sobre: { opacity: 0.90 }, pressionado: { opacity: 0.76 },
});
