import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Barra, Botao, Carinhas, Fala, Figura, Flutuar, Icone, T, Titulo, caixa, campo, cor, linha } from './interface';
import { ESTRELAS, SENTIMENTOS, contagem, diaDe, missoesAtivas, proxima } from './modelo';

import { andamentoDaMissao } from './passos';
import { CampoDeNota } from './NotasDeRetomada';

function Painel({ children }) {
  return <View style={[caixa, { maxWidth: 610, width: '100%', alignSelf: 'center', padding: 24 }]}>{children}</View>;
}
const espaco = { marginTop: 10 };
const motivos = ['Preciso de mais tempo', 'Quero companhia', 'Outro motivo'];
export default function Missao({ tela, tarefa, estado, data, agir, ir, animar }) {
  const [motivo, setMotivo] = useState('');
  const [texto, setTexto] = useState('');
  const [pausa, setPausa] = useState('');
  const [anotar, setAnotar] = useState(false);
  const [nota, setNota] = useState('');
  const [orientacao, mostrarOrientacao] = useState(false);
  if (!tarefa || !tarefa.ativa) return <Painel><Titulo>Missão em descanso</Titulo><Botao titulo="Ver missões" onPress={() => ir('Missões')} /></Painel>;
  const dia = diaDe(estado, data);
  const r = dia.resultados[tarefa.id];
  const andamento = andamentoDaMissao(dia, tarefa);
  const { indice, passos } = andamento;
  const passo = passos[indice];
  const proximidade = proxima(estado, data);
  const p = contagem(estado, data);
  const seguir = () => proximidade ? ir('Missão', proximidade.id, true) : ir(p.jogo ? 'Jogo' : 'Missões', undefined, true);
  if (tela === 'Avaliação' && r?.status === 'feita') {
    return <Painel><Figura nome="medalha" size={66} />
      <View style={{ marginTop: 14 }}><Titulo sub={tarefa.titulo}>Missão cumprida!</Titulo></View>
      <Fala animar={animar}>Você conquistou {ESTRELAS} estrelas. Como foi fazer essa missão?</Fala>
      <Carinhas valor={r.humor} escolher={humor => { agir({ tipo: 'avaliar', id: tarefa.id, humor }); ir('Conquista', tarefa.id, true); }} />
      <Botao titulo="Agora não" tipo="contorno" style={espaco} onPress={() => ir('Conquista', tarefa.id, true)} />
    </Painel>;
  }
  if (tela === 'Conquista' && r?.status === 'feita') {
    return <Painel><View style={{ alignItems: 'center', paddingVertical: 10 }}>
      <Flutuar animar={animar}><Figura nome="medalha" size={88} /></Flutuar>
      <T forte size={31} style={{ marginTop: 9 }}>Brilhou, tripulante!</T>
      <T size={18} color={cor.roxo}>+{ESTRELAS} estrelas na coleção</T></View>
      <Fala animar={animar}>{p.jogo ? 'O hangar está aberto! Escolha um dos três jogos da tripulação.' : 'Mais um passo no seu plano de voo. A próxima missão espera por você.'}</Fala>
      <Botao titulo={proximidade ? 'Próxima missão' : 'Escolher um jogo'} icone="arrow-right" onPress={seguir} />
      <Botao tipo="contorno" titulo="Voltar à base" style={espaco} onPress={() => ir('Base', undefined, true)} />
    </Painel>;
  }
  if (andamento.pausado && r?.status !== 'feita') {
    return <Painel><Titulo sub={tarefa.titulo}>Pausa da tripulação</Titulo>
      {!!passo && <T forte color={cor.roxo} style={{ marginBottom: 10 }}>Na volta · passo {indice + 1} de {passos.length} · {passo}</T>}
      {pausa ? <View style={{ backgroundColor: '#EAF7F1', borderRadius: 16, padding: 18, marginBottom: 14 }}>
        <T forte size={20}>{pausa === 'mover' ? 'Movimento do seu jeito' : 'Um momento tranquilo'}</T>
        <T style={{ marginTop: 8 }}>{pausa === 'mover' ? 'Deixe a tela de lado. Se for confortável, mova os braços sentado ou dê alguns passos em um lugar livre.' : 'Descanse numa posição confortável. Você pode olhar para longe da tela ou chamar alguém para ficar com você.'}</T>
      </View> : <><T>Do que você precisa agora?</T>
        <Botao titulo="Quero me movimentar" icone="activity" style={espaco} onPress={() => setPausa('mover')} />
        <Botao titulo="Quero descansar" tipo="suave" style={espaco} onPress={() => setPausa('descansar')} /></>}
      {anotar ? <CampoDeNota valor={nota} mudar={setNota} /> : <Botao titulo="Anotar o que ajudou (opcional)" tipo="contorno"
        style={espaco} onPress={() => setAnotar(true)} />}
      <Botao titulo="Retomar minha missão" icone="arrow-right" style={espaco} onPress={() => {
        agir({ tipo: 'retomar', id: tarefa.id, nota });
        setAnotar(false); setNota(''); setPausa(''); ir('Missão', tarefa.id, true);
      }} />
    </Painel>;
  }
  if (tela === 'Ajuda' && r?.status !== 'feita') {
    return <Painel><Titulo sub={tarefa.titulo}>Precisamos de reforços?</Titulo>
      <Fala animar={animar}>Chame alguém de confiança por perto. Vocês podem ler a missão juntos e começar pelo primeiro passo.</Fala>
      <Botao titulo="Tentar com ajuda" icone="users" onPress={() => ir('Missão', tarefa.id, true)} />
      <Botao titulo="Deixar para depois" tipo="contorno" style={espaco} onPress={() => ir('Adiar', tarefa.id, true)} />
    </Painel>;
  }
  if (tela === 'Adiar' && r?.status !== 'feita') {
    const motivoFinal = motivo === 'Outro motivo' ? texto.trim() : motivo;
    return <Painel><Titulo sub="Se quiser, conte o motivo. Dá para voltar à missão hoje.">Deixar para depois</Titulo>
      {motivos.map(m => <Botao key={m} titulo={m} icone={m === motivo ? 'check-circle' : 'circle'}
        tipo={m === motivo ? 'suave' : 'contorno'} style={espaco} onPress={() => setMotivo(m)} />)}
      {motivo === 'Outro motivo' && <TextInput accessibilityLabel="Seu motivo" placeholder="Escreva aqui" maxLength={160}
        value={texto} onChangeText={setTexto} style={[campo, espaco]} />}
      <Botao titulo="Guardar para depois" style={{ marginTop: 22 }} onPress={() => {
        agir({ tipo: 'pular', id: tarefa.id, motivo: motivoFinal }); ir('Missões', undefined, true);
      }} />
    </Painel>;
  }
  const pos = missoesAtivas(estado, data).findIndex(t => t.id === tarefa.id) + 1;
  const sentimento = SENTIMENTOS.find(s => s.id === r?.humor);
  return <Painel><View style={[linha, { justifyContent: 'space-between' }]}>
    <T forte size={14} color={cor.roxo}>Missão {pos} de {p.total}</T>
    <View style={linha}><Icone nome="clock" size={15} color={cor.fraca} /><T size={15} color={cor.fraca} style={{ marginLeft: 5 }}>{tarefa.horario}</T></View></View>
    <View style={{ backgroundColor: '#F0ECFB', alignItems: 'center', paddingVertical: 20, borderRadius: 20, marginVertical: 17 }}>
      <Figura nome={tarefa.arte} size={87} /></View>
    <Titulo sub={passos.length ? undefined : tarefa.descricao}>{tarefa.titulo}</Titulo>
    {r?.status === 'feita' ? <><Fala animar={animar}>{'Missão concluída! Suas estrelas já estão na coleção.' + (sentimento ? ' Você marcou: ' + sentimento.nome + '.' : '')}</Fala>
      <Botao titulo="Ver missões" onPress={() => ir('Missões', undefined, true)} /></> :
      <>{r?.status === 'pulada' && <Fala animar={animar}>Você guardou esta missão para depois. Podemos tentar agora!</Fala>}
        {!!passo && <View accessibilityLiveRegion="polite" style={{ backgroundColor: cor.lilas, borderRadius: 16, padding: 16, marginBottom: 12 }}>
          <T forte size={15} color={cor.roxo}>Passo {indice + 1} de {passos.length}</T>
          <T forte size={23} style={{ marginVertical: 8 }}>{passo}</T>
          <Barra valor={indice} total={passos.length} />
        </View>}
        <Botao titulo={passo && indice < passos.length - 1 ? 'Fiz este passo' : 'Concluí a missão'} icone="check-circle" onPress={() => {
          agir(passo ? { tipo: 'passo', indice, id: tarefa.id } : { tipo: 'concluir', id: tarefa.id });
          if (!passo || indice === passos.length - 1) ir('Avaliação', tarefa.id, true);
        }} />
        <Botao titulo="Preciso de uma pausa" icone="pause-circle" tipo="suave" style={espaco} onPress={() => { agir({ tipo: 'pausar', id: tarefa.id }); ir('Pausa', tarefa.id, true); }} />
        {!!passo && !!tarefa.descricao && <><Botao titulo={orientacao ? 'Ocultar orientação' : 'Ver orientação'} tipo="contorno"
          style={espaco} onPress={() => mostrarOrientacao(!orientacao)} />
          {orientacao && <T style={espaco}>{tarefa.descricao}</T>}</>}
        <Botao titulo="Preciso de ajuda" icone="life-buoy" tipo="contorno" style={espaco} onPress={() => ir('Ajuda', tarefa.id)} /></>}
  </Painel>;
}
