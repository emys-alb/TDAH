import React, { useState } from 'react';
import { Switch, TextInput, View } from 'react-native';
import { Alvo, Botao, Figura, Icone, T, Titulo, caixa, campo, cor, entre, linha } from './interface';
import { SENTIMENTOS, nomeDoDia } from './modelo';
const espaco = { marginTop: 14 };
function Etiqueta({ children }) { return <T forte size={15} style={{ marginTop: 11, marginBottom: 5 }}>{children}</T>; }
export function Editor({ item, concluir, cancelar }) {
  const [titulo, setTitulo] = useState(item.titulo);
  const [horario, setHorario] = useState(item.horario);
  const [descricao, setDescricao] = useState(item.descricao);
  const [erro, setErro] = useState('');
  function salvar() {
    const hora = horario.trim().match(/^(\d{1,2}):([0-5]\d)$/);
    if (!titulo.trim() || !hora || Number(hora[1]) > 23) {
      setErro('Escreva um nome e um horário válido, como 08:30.'); return;
    }
    concluir({ ...item, titulo: titulo.trim(), horario: hora[1].padStart(2, '0') + ':' + hora[2], descricao: descricao.trim() });
  }
  return <View style={[caixa, espaco]}><T forte size={21}>{item.id ? 'Editar missão' : 'Nova missão'}</T>
    <Etiqueta>Nome</Etiqueta><TextInput value={titulo} onChangeText={setTitulo} maxLength={60} style={campo} accessibilityLabel="Nome da missão" placeholder="Ex. Guardar os brinquedos" />
    <Etiqueta>Horário</Etiqueta><TextInput value={horario} onChangeText={setHorario} maxLength={5} autoCapitalize="none" style={campo} accessibilityLabel="Horário da missão" placeholder="08:30" />
    <Etiqueta>Primeiro passo (opcional)</Etiqueta><TextInput value={descricao} onChangeText={setDescricao} multiline maxLength={240} style={campo} accessibilityLabel="Primeiro passo" />
    {!!erro && <T color="#9A323C" accessibilityLiveRegion="polite" style={{ marginTop: 6 }}>{erro}</T>}
    <Botao titulo="Salvar missão" icone="check" onPress={salvar} style={espaco} />
    <Botao titulo="Cancelar" tipo="contorno" onPress={cancelar} style={{ marginTop: 8 }} />
  </View>;
}
function Registros({ dias }) {
  const datas = Object.keys(dias).filter(d => Object.keys(dias[d].resultados).length > 0).sort().reverse();
  const [aberto, setAberto] = useState(null);
  if (!datas.length) return null;
  return <View style={[caixa, espaco]}><T forte size={20}>Histórico das missões</T>
    {datas.map(d => { const registros = Object.entries(dias[d].resultados);
      return <View key={d}><Alvo label={'Histórico de ' + nomeDoDia(d)} onPress={() => setAberto(aberto === d ? null : d)} style={entre}>
        <T>{nomeDoDia(d)} · {registros.length} {registros.length === 1 ? 'missão' : 'missões'}</T><Icone nome={aberto === d ? 'chevron-up' : 'chevron-down'} size={16} />
      </Alvo>{aberto === d && registros.map(([id, r]) => <View key={id} style={{ paddingVertical: 5 }}>
        <T forte size={15}>{r.titulo}</T><T size={14} color={cor.fraca}>{r.status === 'feita' ? 'Concluída' : 'Para depois'}{r.motivo ? ' · ' + r.motivo : ''}{r.humor ? ' · ' + SENTIMENTOS.find(s => s.id === r.humor)?.nome : ''}</T>
      </View>)}</View>;
    })}
  </View>;
}
export default function Responsaveis({ estado, agir, ir }) {
  const [item, setItem] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const tarefas = [...estado.rotina].sort((a, b) => a.horario.localeCompare(b.horario));
  const novo = () => { setMensagem(''); setItem({ id: '', titulo: '', horario: '', descricao: '', arte: 'foguete', ativa: true }); };
  return <View style={{ maxWidth: 740, width: '100%', alignSelf: 'center' }}>
    <Titulo sub="Prepare a rotina que a criança vai encontrar na base espacial.">Área dos responsáveis</Titulo>
    <View style={[caixa, entre]}><View style={{ flex: 1, marginRight: 14 }}>
      <T forte size={18}>Reduzir animações</T><T size={14} color={cor.fraca}>A preferência do aparelho também é respeitada.</T></View>
      <Switch accessibilityLabel="Reduzir animações" value={estado.movimentoReduzido} onValueChange={valor => agir({ tipo: 'movimento', valor })} />
    </View>
    <Botao titulo="Planejar por data" icone="calendar" tipo="suave" style={espaco} onPress={() => ir('Planejar')} />
    {item ? <Editor key={item.id || 'nova'} item={item} cancelar={() => { setItem(null); }} concluir={editada => {
      agir({ tipo: 'rotina', item: { ...editada, id: editada.id || 'm-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7) } });
      setItem(null); setMensagem('Rotina atualizada.');
    }} /> : <View style={[caixa, espaco]}><View style={entre}><T size={21} forte>Rotina diária</T>
      <Botao titulo="Adicionar" icone="plus" tipo="suave" onPress={novo} /></View>
      {!!mensagem && <T size={14} color={cor.verde} accessibilityLiveRegion="polite" style={{ marginTop: 7 }}>{mensagem}</T>}
      {tarefas.map(t => <View key={t.id} style={[linha, { paddingVertical: 6, borderBottomWidth: 1, borderColor: cor.linha }]}>
        <Alvo label={'Editar ' + t.titulo} onPress={() => { setMensagem(''); setItem(t); }} style={[linha, { flex: 1, justifyContent: 'flex-start', paddingVertical: 4, paddingRight: 8 }]}>
          <Figura nome={t.arte} size={31} /><View style={{ flex: 1, marginLeft: 9 }}><T forte>{t.titulo}</T><T size={13} color={cor.fraca}>{t.horario} · {t.ativa ? 'Ativa' : 'Em pausa'}</T></View>
          <Icone nome="edit-2" size={16} /></Alvo>
        <Switch accessibilityLabel={'Ativar ' + t.titulo} value={t.ativa} onValueChange={ativa => agir({ tipo: 'rotina', item: { ...t, ativa } })} />
      </View>)}
    </View>}
    <Registros dias={estado.dias} />
    <T size={14} color={cor.fraca} style={{ marginTop: 19 }}>Tripulantes da Aventura Hiperespacial · Projeto de Ricardo Adley da Silva Sena e Emilly de Albuquerque Oliveira.</T>
  </View>;
}
