import React, { useState } from 'react';
import { View, TouchableOpacity, Text} from 'react-native';

import styles from '../assets/css/telas';
import Tarefa from '../componentes/Tarefa';
import BarraDeProgresso from '../componentes/ProgressBar';
//import tarefasData from '../services/sqlite/tarefasData';
import contador from '../services/contador';

const Tarefas = ({ navigation }) => {

  const [value, setValue] = useState(0);

  const updatePercent= (newValue) => {
    setValue((value + newValue));
  };

  const atualizaMissao= () => {
    contador.incrementaContador();
  };
  //deixa esses comentarios pra eu não me esquecer
  //tarefasData.create("tarefa teste","teste apenas","S");
 // tarefasData.create("tarefa teste 373763","teste apenas 4837483","N");
  //const data = tarefasData.all();
  //const tarefasList = data.map((item, key))

  /*
   No momento estamos usando dados estaticos o bd ta feito so nao to conseguindo fazer a ligacao 
   por motivos de esta dando um erro de field sizes are different exponent ai so react native sabe o que
   e isso pq ja procurei muito
  */
  const [tarefasLista,setTarefas] =useState([
    {id: 1, titulo:"Escovar os denter", descricao: "O mundo precisa ser salvo do exercito de cáries. Rápido, escove os dentes e não deixe que eles ganhem." }, 
    {id: 2, titulo:"Missão 02", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae facilisis nunc, molestie placerat ligula. Integer dictum at dolor non rhoncus. Morbi sit amet libero et ante venenatis tempus congue. " },
    {id: 3, titulo:"Missão 03", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae facilisis nunc, molestie placerat ligula. Integer dictum at dolor non rhoncus. Morbi sit amet libero et ante venenatis tempus congue. " },
    {id: 4, titulo:"tarefa 04 teste", descricao: "Integer dictum at dolor non rhoncus. Morbi sit amet libero et ante venenatis tempus congue." },
    {id: 5, titulo:"tarefa 05 teste", descricao: "arroz doce com batata" },
    {id: 6, titulo:"tarefa 06 teste", descricao: "ovomaltine com doce de leite" },
    {id: 7, titulo:"tarefa 07 teste", descricao: "açai tem gosto de terra" },
    {id: 8, titulo:"tarefa 08 teste", descricao: "old que sorvete superestimado" },
    {id: 9, titulo:"tarefa 09 teste", descricao: "chama no zap zop 998867" },
    {id: 10, titulo:"tarefa 10 teste", descricao: "bolinho de arroz hit atemporal" },
]);
  var cont = contador.getContagem();
  return (

    <View style={styles.container}>
      <BarraDeProgresso value={value} />
      <View>
        <View style={{alignItems: "center"}}>
          <Tarefa title={tarefasLista[cont].titulo} text={tarefasLista[cont].descricao}/>
        </View>

        <View style={styles.buttons}>
                     <TouchableOpacity style={styles.botaoVermelhoTelaTarefa} onPress={() =>navigation.navigate('Tarefa nao realizada')}>
                        <Text style={styles.textButtonTarefa}>Não Realizada</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoVerdeTelaTarefa} onPress={() => {updatePercent(0.1); navigation.navigate('Avalie sua Tarefa') }}>
                        <Text style={styles.textButtonTarefa}>Realizada</Text>
                    </TouchableOpacity>
        </View>
      </View>
    
    </View>
  );
}

export default Tarefas