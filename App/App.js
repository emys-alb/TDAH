import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StatusBar, useWindowDimensions, View } from 'react-native';
import Base, { CartaoJogo, Lista } from './aventura/Base';
import Calendario from './aventura/Calendario';
import Colecao from './aventura/Colecao';
import Diario from './aventura/Diario';
import Hangar from './aventura/Hangar';
import Missao from './aventura/Missao';
import Responsaveis from './aventura/Responsaveis';
import { Alvo, Figura, Icone, T, Titulo, cor, entre, linha, useMovimento } from './aventura/interface';
import { carregarFontes } from './aventura/fontes';
import { missoesAtivas, totalEstrelas } from './aventura/modelo';
import useNavegacao from './aventura/navegacao';
import useExpedicao from './aventura/useExpedicao';

const abas = [
  { tela: 'Base', icone: 'home' }, { tela: 'Missões', icone: 'compass' },
  { tela: 'Calendário', icone: 'calendar' }, { tela: 'Diário', icone: 'book-open' }, { tela: 'Coleção', icone: 'award' },
];
const telasMissao = ['Missão', 'Ajuda', 'Adiar', 'Pausa', 'Avaliação', 'Conquista'];
const moldura = { width: '100%', maxWidth: 1130, alignSelf: 'center' };
function Abas({ selecionada, ir, compacta }) {
  return <View style={[linha, compacta ? { width: '100%', justifyContent: 'space-around' } : {}]}>
    {abas.map(a => { const ativa = selecionada === a.tela;
      return <Alvo key={a.tela} label={a.tela} selected={ativa} onPress={() => ir(a.tela)}
        style={{ flex: compacta ? 1 : undefined, flexDirection: compacta ? 'column' : 'row', alignItems: 'center', justifyContent: 'center',
          minHeight: compacta ? 52 : 44, paddingHorizontal: compacta ? 2 : 11, paddingVertical: 5, marginHorizontal: 2,
          borderRadius: 14, backgroundColor: ativa ? cor.lilas : 'transparent' }}>
        <Icone nome={a.icone} size={compacta ? 18 : 16} color={ativa ? cor.roxo : cor.fraca} />
        <T size={compacta ? 12 : 15} forte color={ativa ? cor.roxo : cor.fraca} style={{ marginLeft: compacta ? 0 : 6 }}>{a.tela}</T>
      </Alvo>;
    })}
  </View>;
}
function Cabecalho({ larga, ir, selecionada, estrelas }) {
  return <View style={{ backgroundColor: cor.branco, borderBottomWidth: 1, borderColor: cor.linha }}>
    <View style={[moldura, entre, { minHeight: larga ? 72 : 58, paddingHorizontal: larga ? 25 : 14 }]}>
      <Alvo label="Tripulantes, ir para a base" onPress={() => ir('Base')} style={linha}>
        <View style={{ width: larga ? 39 : 33, height: larga ? 39 : 33, borderRadius: 12, backgroundColor: '#ECE7FA', alignItems: 'center', justifyContent: 'center' }}>
          <Figura nome="foguete" size={larga ? 30 : 26} /></View>
        <T size={larga ? 24 : 20} forte style={{ letterSpacing: -0.9, marginLeft: 8 }}>Tripulantes</T>
      </Alvo>
      {larga && <Abas selecionada={selecionada} ir={ir} />}
      <View style={linha}>
        <Alvo label={'Coleção, ' + estrelas + ' estrelas'} onPress={() => ir('Coleção')} style={{ paddingHorizontal: 4 }}>
          <View style={[linha, { paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#FFF0C8', borderRadius: 15 }]}>
            <Icone nome="star" size={15} color="#85541C" /><T size={15} forte color="#6D481E" style={{ marginLeft: 5 }}>{estrelas}</T></View>
        </Alvo>
        <Alvo label="Área dos responsáveis" onPress={() => ir('Responsáveis')} style={{ ...linha, paddingHorizontal: 8, marginLeft: 3 }}>
          <Icone nome="sliders" size={19} color={cor.fraca} />
          {larga && <T size={14} color={cor.fraca} forte style={{ marginLeft: 6 }}>Responsáveis</T>}
        </Alvo>
      </View>
    </View>
  </View>;
}
function Viagem({ estado, data, agir, erro, largura }) {
  const { rota, ir, voltar } = useNavegacao();
  const { tela, id } = rota;
  const larga = largura >= 975;
  const animar = useMovimento(estado.movimentoReduzido);
  const selecionada = telasMissao.includes(tela) ? 'Missões' : tela;
  const props = { estado, data, agir, ir, animar, largura };
  let pagina;
  switch (tela) {
    case 'Base': pagina = <Base {...props} />; break;
    case 'Missões': pagina = <View style={{ maxWidth: 800, width: '100%', alignSelf: 'center' }}>
      <Titulo sub="Escolha uma missão para começar ou retome uma que ficou para depois.">Mapa de missões</Titulo>
      <Lista {...props} /><CartaoJogo {...props} /></View>; break;
    case 'Planejar':
    case 'Calendário': pagina = <Calendario {...props} inicial={id} planejamento={tela === 'Planejar'} />; break;
    case 'Diário': pagina = <Diario {...props} inicial={id} />; break;
    case 'Coleção': pagina = <Colecao {...props} />; break;
    case 'Responsáveis': pagina = <Responsaveis {...props} />; break;
    case 'Jogo': pagina = <Hangar id={id} {...props} />; break;
    default: pagina = <Missao {...props} tela={tela} tarefa={missoesAtivas(estado, data).find(t => t.id === id)} />;
  }
  const secundaria = telasMissao.includes(tela) || tela === 'Jogo' || tela === 'Planejar' || tela === 'Responsáveis';
  return <>
    <Cabecalho larga={larga} ir={ir} selecionada={selecionada} estrelas={totalEstrelas(estado)} />
    <ScrollView key={tela + '-' + (id || '')} style={{ flex: 1 }} keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ paddingBottom: 30 }}>
      <View style={[moldura, { paddingHorizontal: largura >= 700 ? 25 : 14, paddingTop: largura >= 700 ? 22 : 14 }]}>
        {!!erro && <T accessibilityLiveRegion="polite" size={14} color="#893F2D" style={{ marginBottom: 10 }}>{erro}</T>}
        {secundaria && <Alvo onPress={() => voltar() || ir('Base')} label="Voltar" style={{ ...linha, alignSelf: 'flex-start', paddingHorizontal: 6, marginBottom: 5 }}>
          <Icone nome="arrow-left" size={17} /><T forte size={15} color={cor.roxo} style={{ marginLeft: 6 }}>Voltar</T>
        </Alvo>}
        {pagina}
      </View>
    </ScrollView>
    {!larga && <View style={{ backgroundColor: cor.branco, borderTopWidth: 1, borderColor: cor.linha, paddingHorizontal: 7, paddingVertical: 4 }}>
      <Abas compacta selecionada={selecionada} ir={ir} /></View>}
  </>;
}
export default function App() {
  const { estado, data, agir, erro } = useExpedicao();
  const [fontes, setFontes] = useState(false);
  const { width } = useWindowDimensions();
  useEffect(() => {
    let vivo = true;
    carregarFontes().catch(() => {}).then(() => { if (vivo) setFontes(true); });
    return () => { vivo = false; };
  }, []);
  return <SafeAreaView style={{ flex: 1, backgroundColor: cor.fundo }}>
    <StatusBar barStyle="dark-content" backgroundColor={cor.branco} />
    {estado && fontes ? <Viagem key={data} estado={estado} data={data} agir={agir} erro={erro} largura={width} /> :
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator size="large" color={cor.roxo} accessibilityLabel="Carregando a base espacial" /></View>}
  </SafeAreaView>;
}
