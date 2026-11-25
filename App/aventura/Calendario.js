import React, { useState } from 'react';
import { View } from 'react-native';
import { Alvo, Botao, Figura, Icone, T, Titulo, caixa, cor, entre, linha } from './interface';
import { diaDe, nomeDoDia } from './modelo';
import { diasDoMes, inicioDoMes, MESES, planoDoDia } from './agenda';
import { Editor } from './Responsaveis';

const semana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const coluna = { width: '14.2857%', alignItems: 'stretch', paddingVertical: 2 };
const central = { alignItems: 'center', justifyContent: 'center' };
function resumo(estado, data) {
  const tarefas = planoDoDia(estado, data).filter(t => t.ativa);
  const resultados = diaDe(estado, data).resultados;
  const feitas = tarefas.filter(t => resultados[t.id]?.status === 'feita').length;
  const adiadas = tarefas.filter(t => resultados[t.id]?.status === 'pulada').length;
  return { total: tarefas.length, feitas, adiadas };
}
export default function Calendario({ estado, data: hoje, agir, ir, inicial, planejamento }) {
  const dia = inicial || hoje;
  const [item, editar] = useState(null);
  const [aviso, avisar] = useState('');
  const [ano, mes] = dia.split('-').map(Number);
  const datas = diasDoMes(dia);
  const vazios = new Date(ano, mes - 1, 1, 12).getDay();
  const dados = datas.map(d => resumo(estado, d));
  const totalMes = dados.reduce((n, d) => n + d.total, 0);
  const feitasMes = dados.reduce((n, d) => n + d.feitas, 0);
  const adiadasMes = dados.reduce((n, d) => n + d.adiadas, 0);
  const podeEditar = planejamento && dia >= hoje;
  const registros = diaDe(estado, dia).resultados;
  const lista = planoDoDia(estado, dia).filter(t => t.ativa || podeEditar);
  function escolher(valor) { editar(null); avisar(''); ir(planejamento ? 'Planejar' : 'Calendário', valor, true); }
  function salvar(tarefa) {
    const id = tarefa.id || 'd-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    agir({ tipo: 'agendar', diaAlvo: dia, item: { ...tarefa, id } });
    editar(null); avisar('Agenda de ' + nomeDoDia(dia) + ' atualizada.');
  }
  const novo = () => { avisar(''); editar({ id: '', titulo: '', descricao: '', horario: '', arte: 'foguete', ativa: true }); };
  return <View style={{ maxWidth: 720, width: '100%', alignSelf: 'center' }}>
    <Titulo sub={planejamento ? 'Escolha uma data para preparar as missões daquele dia.' : 'Escolha um dia para ver o plano de voo da tripulação.'}>
      {planejamento ? 'Planejar por data' : 'Calendário de missões'}</Titulo>
    <View style={[caixa, { paddingHorizontal: 10 }]}>
      <View style={entre}>
        <Alvo label="Mês anterior" style={[central, { width: 44 }]} onPress={() => escolher(inicioDoMes(dia, -1))}><Icone nome="chevron-left" /></Alvo>
        <T forte size={21} accessibilityRole="header">{MESES[mes - 1]} de {ano}</T>
        <Alvo label="Próximo mês" style={[central, { width: 44 }]} onPress={() => escolher(inicioDoMes(dia, 1))}><Icone nome="chevron-right" /></Alvo>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {semana.map(s => <View key={s} style={[coluna, central]}><T forte size={13} color={cor.fraca}>{s}</T></View>)}
        {Array.from({length: vazios}, (_, i) => <View key={'v-' + i} style={coluna} />)}
        {datas.map((d, i) => {
          const sel = d === dia;
          const r = dados[i];
          return <View key={d} style={coluna}><Alvo selected={sel} label={d + ', ' + r.feitas + ' de ' + r.total + ' concluídas'}
            onPress={() => escolher(d)} style={[central, { minHeight: 48, borderRadius: 10, borderWidth: d === hoje ? 2 : 0, borderColor: cor.roxo, backgroundColor: sel ? cor.roxo : 'transparent' }]}>
            <T forte size={16} color={sel ? cor.branco : cor.tinta}>{i + 1}</T>
            <T size={11} color={sel ? cor.branco : cor.fraca}>{r.total ? r.feitas + '/' + r.total : '–'}</T>
          </Alvo></View>;
        })}
      </View>
      <T size={14} color={cor.fraca} style={{ marginTop: 10, textAlign: 'center' }}>Concluídas / previstas · {feitasMes} de {totalMes} no mês · {adiadasMes} para depois</T>
      <Botao titulo="Hoje" tipo="suave" style={{ alignSelf: 'center', marginTop: 8 }} onPress={() => escolher(hoje)} />
    </View>
    <View style={[caixa, { marginTop: 14 }]}>
      <T forte size={21} accessibilityRole="header">{nomeDoDia(dia, true)}{dia === hoje ? ' · Hoje' : ''}</T>
      {podeEditar && <T color={cor.fraca} size={14}>As alterações aqui valem apenas para esta data.</T>}
      {podeEditar && !item && <Botao titulo="Cadastrar missão neste dia" icone="plus" onPress={novo} style={{ marginTop: 12 }} />}
      {!planejamento && dia >= hoje && <Botao titulo="Planejar este dia" tipo="suave" icone="calendar" onPress={() => ir('Planejar', dia)} style={{ marginTop: 12 }} />}
      {!lista.length && <T style={{ marginTop: 12 }} color={cor.fraca}>{dia < hoje ? 'Nenhuma missão registrada para este dia.' : 'Nenhuma missão planejada para este dia.'}</T>}
      {!item && lista.map(t => {
        const r = registros[t.id];
        const situacao = r?.status === 'feita' ? 'Concluída' : r ? 'Para depois' : !t.ativa ? 'Fora deste dia' : 'Prevista';
        const edita = podeEditar && !r;
        const abrir = !planejamento && dia === hoje;
        return <View key={t.id} style={{ borderBottomWidth: 1, borderColor: cor.linha }}>
          <Alvo label={t.titulo + ', ' + situacao} disabled={!edita && !abrir}
            onPress={() => edita ? editar(t) : ir('Missão', t.id)} style={[linha, { justifyContent: 'flex-start', paddingVertical: 8 }]}>
            <Figura nome={t.arte} size={32} /><View style={{ flex: 1, marginHorizontal: 10 }}><T forte>{t.titulo}</T>
              <T size={13} color={cor.fraca}>{t.horario ? t.horario + ' · ' : ''}{situacao}</T></View>
            {(edita || abrir) && <Icone nome={edita ? 'edit-2' : 'chevron-right'} size={16} />}
          </Alvo>
        </View>;
      })}
      {!!aviso && <T accessibilityLiveRegion="polite" color={cor.verde} style={{ marginTop: 8 }}>{aviso}</T>}
    </View>
    {item && podeEditar && <View><Editor key={dia + item.id} item={item} cancelar={() => editar(null)} concluir={salvar} />
      {!!item.id && <Botao titulo={item.ativa ? 'Retirar só deste dia' : 'Reativar neste dia'} tipo="contorno"
        style={{ marginTop: 8 }} onPress={() => salvar({ ...item, ativa: !item.ativa })} />}</View>}
  </View>;
}
