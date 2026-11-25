import React from 'react';
import { View } from 'react-native';
import { Alvo, Barra, Botao, Carinhas, Figura, Icone, Link, LinhaMissao, T, caixa, cor, entre, linha } from './interface';
import { contagem, diaDe, missoesAtivas, nomeDoDia, proxima } from './modelo';

function Ceu({ compacto, largura, acao, tituloBotao }) {
  return <View style={{ borderRadius: 26, backgroundColor: '#141638', overflow: 'hidden',
    minHeight: compacto ? 0 : 285, justifyContent: 'center' }}>
    {compacto ? <Figura nome="tripulacao" resizeMode="cover" descricao="Luma e o robô Pip exploram a Lua"
      style={{ width: '100%', height: Math.round((largura - 28) / 2.05) }} /> :
      <View style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '65%' }}>
        <Figura nome="tripulacao" resizeMode="cover" descricao="Luma e o robô Pip exploram a Lua" style={{ width: '100%', height: '100%' }} />
        <View pointerEvents="none" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, flexDirection: 'row' }}>
          {Array.from({length: 20}, (_, i) => <View key={i} style={{ flex: 1, backgroundColor: '#141638', opacity: (20 - i) / 20 }} />)}
        </View>
      </View>}
    <View style={{ paddingHorizontal: compacto ? 22 : 34, paddingTop: compacto ? 17 : 26, paddingBottom: compacto ? 23 : 26,
      width: compacto ? '100%' : '51%', alignItems: 'flex-start' }}>
      <View style={linha}><View style={{ height: 2, width: 22, backgroundColor: '#FFD879', marginRight: 8 }} />
        <T forte size={13} color="#FFDE8D" style={{ letterSpacing: 1.2 }}>LUMA & PIP</T></View>
      <T forte accessibilityRole="header" size={compacto ? 33 : 47} color="#FFFAEB" style={{ letterSpacing: -1.5, marginTop: 7, lineHeight: compacto ? 38 : 50 }}>Vamos decolar?</T>
      <T size={compacto ? 16 : 18} color="#E4E3F5" style={{ marginTop: 7, maxWidth: 340 }}>Sua tripulação está pronta para as missões de hoje.</T>
      <Botao tipo="sol" titulo={tituloBotao} icone="arrow-right-circle" onPress={acao} style={{ marginTop: 17 }} />
    </View>
  </View>;
}
export function Lista({ estado, data, ir, limite }) {
  const tarefas = missoesAtivas(estado);
  const dia = diaDe(estado, data);
  const pendentes = tarefas.filter(t => !dia.resultados[t.id]);
  const lista = limite ? (pendentes.length ? pendentes : tarefas).slice(0, limite) : tarefas;
  const p = contagem(estado, data);
  return <View style={caixa}>
    <View style={entre}><View style={{ flex: 1 }}>
      <T size={23} forte accessibilityRole="header">{limite ? 'Plano de voo' : 'Missões de hoje'}</T>
      <T size={14} color={cor.fraca}>{nomeDoDia(data, true)}</T></View>
      {limite && <Link titulo="Ver todas" onPress={() => ir('Missões')} />}
    </View>
    <View style={{ marginTop: 16, marginBottom: 6 }}>
      <View style={entre}><T size={14} color={cor.fraca}>{p.visitadas} de {p.total} visitadas</T>
        <T size={14} forte color={cor.roxo}>{p.total ? Math.round(100 * p.visitadas / p.total) : 0}%</T></View>
      <View style={{ marginVertical: 7 }}><Barra valor={p.visitadas} total={p.total} /></View>
    </View>
    {lista.map((t, i) => <LinhaMissao key={t.id} tarefa={t} resultado={dia.resultados[t.id]} ultima={i === lista.length - 1}
      onPress={() => ir('Missão', t.id)} />)}
    {!lista.length && <T color={cor.fraca} style={{ marginTop: 8 }}>A tripulação está de folga. Um responsável pode preparar as próximas missões.</T>}
  </View>;
}
export function CartaoJogo({ estado, data, ir }) {
  const { jogo } = contagem(estado, data);
  const recorde = diaDe(estado, data).recorde;
  return <View style={[caixa, { backgroundColor: '#EAE5F9', borderColor: '#DBD2F1', marginTop: 14, overflow: 'hidden' }]}>
    <View style={linha}><View style={{ flex: 1, marginRight: 8 }}>
      <T forte size={20} accessibilityRole="header">Hangar de jogos</T>
      <T color={cor.fraca} size={15} style={{ marginTop: 3 }}>{jogo ? 'Memória, jogo da velha e asteroides esperam por você.' : 'Visite todas as missões de hoje para liberar os três jogos.'}</T></View>
      <Figura nome="foguete" size={55} /></View>
    <Botao titulo={jogo ? 'Escolher jogo' : 'Conhecer os jogos'} tipo="suave" icone="play" onPress={() => ir('Jogo')} style={{ marginTop: 12, alignSelf: 'flex-start', backgroundColor: '#FFF' }} />
    {!jogo && <View style={[linha, { marginTop: 11 }]}><Icone nome="lock" size={14} /><T forte size={13} color={cor.roxo} style={{ marginLeft: 6 }}>Hangar fechado</T></View>}
    {recorde != null && <T size={14} color={cor.roxo} style={{ marginTop: 6 }}>Asteroides · {recorde} de 6 moedas</T>}
  </View>;
}
export default function Base({ estado, data, ir, largura }) {
  const seguinte = proxima(estado, data);
  const p = contagem(estado, data);
  const dia = diaDe(estado, data);
  const larga = largura >= 790;
  const cta = seguinte ? (p.visitadas ? 'Continuar missões' : 'Começar missão') : p.jogo ? 'Escolher um jogo' : 'Ver missões';
  const decolar = () => seguinte ? ir('Missão', seguinte.id) : ir(p.jogo ? 'Jogo' : 'Missões');
  return <View>
    <Ceu compacto={largura < 640} largura={largura} tituloBotao={cta} acao={decolar} />
    <View style={{ flexDirection: larga ? 'row' : 'column', marginTop: larga ? 22 : 15, alignItems: 'stretch' }}>
      <View style={{ flex: larga ? 1.28 : undefined }}><Lista estado={estado} data={data} ir={ir} limite={3} /></View>
      <View style={{ flex: larga ? 1 : undefined, marginLeft: larga ? 17 : 0, marginTop: larga ? 0 : 14 }}>
        <View style={[caixa, { backgroundColor: '#E8F5EB', borderColor: '#D2E8D8' }]}>
          <View style={entre}><View style={linha}><Icone nome="book-open" size={19} color={cor.verde} />
            <T forte size={20} style={{ marginLeft: 8 }}>Diário de bordo</T></View></View>
          <T size={15} color={cor.fraca} style={{ marginTop: 3 }}>Como você está se sentindo hoje?</T>
          <Carinhas valor={dia.diario?.humor} escolher={humor => ir('Diário', humor)} />
        </View>
        <CartaoJogo estado={estado} data={data} ir={ir} />
      </View>
    </View>
  </View>;
}
