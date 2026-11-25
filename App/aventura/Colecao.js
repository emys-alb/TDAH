import React from 'react';
import { View } from 'react-native';
import { Barra, Figura, Icone, T, Titulo, caixa, cor, linha } from './interface';
import { EMBLEMAS, ESTRELAS, totalEstrelas } from './modelo';
export default function Colecao({ estado, largura }) {
  const total = totalEstrelas(estado);
  const ganhos = EMBLEMAS.filter(e => e.meta <= total).length;
  return <View style={{ maxWidth: 850, alignSelf: 'center', width: '100%' }}>
    <Titulo sub={'Cada missão concluída rende ' + ESTRELAS + ' estrelas para a sua coleção.'}>Coleção de emblemas</Titulo>
    <View style={[caixa, linha, { backgroundColor: '#FFF2CD', borderColor: '#EDDCA9', marginBottom: 12 }]}>
      <Figura nome="medalha" size={52} /><View style={{ marginLeft: 15 }}>
        <T forte size={24}>{total} {total === 1 ? 'estrela' : 'estrelas'}</T><T color={cor.fraca}>{ganhos} de {EMBLEMAS.length} emblemas conquistados</T></View>
    </View>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -5 }}>
      {EMBLEMAS.map(e => { const ganhou = total >= e.meta;
        return <View key={e.nome} style={{ width: largura >= 610 ? '50%' : '100%', padding: 5 }}>
          <View style={[caixa, { flex: 1 }]}>
            <View style={linha}><View style={{ width: 55, height: 55, borderRadius: 18, backgroundColor: e.cor, alignItems: 'center', justifyContent: 'center' }}><Figura nome={e.arte} size={38} /></View>
              <View style={{ flex: 1, marginLeft: 12 }}><T size={18} forte>{e.nome}</T>
                <View style={linha}><Icone nome={ganhou ? 'check-circle' : 'lock'} size={13} color={ganhou ? cor.verde : cor.fraca} />
                  <T size={14} color={ganhou ? cor.verde : cor.fraca} style={{ marginLeft: 5 }}>{ganhou ? 'Conquistado' : e.meta + ' estrelas'}</T>
                </View></View></View>
            <View style={{ marginTop: 14 }}><Barra valor={Math.min(e.meta, total)} total={e.meta} tom={ganhou ? '#5A9277' : '#9380D9'} /></View>
          </View></View>;
      })}
    </View>
  </View>;
}
