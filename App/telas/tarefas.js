import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// Layout
import styles from '../assets/css/telas';
import Tarefa from '../componentes/Tarefa';
import BarraDeProgresso from '../componentes/ProgressBar';
//import tarefasData from '../services/sqlite/tarefasData';

import * as actions from '../redux/actions/counter';

//Redux
import { useDispatch, useSelector } from 'react-redux';

const Tarefas = ({ navigation }) => {
  const [value, setValue] = useState(0);
  const counter = useSelector(store => store.counter);
  const dispatch = useDispatch();

  const updatePercent = (newValue) => {
    setValue((value + newValue));
  };

  const atualizaMissao = () => {
    dispatch(actions.increment());
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
  const [tarefasLista, setTarefas] = useState([
    { id: 1, titulo: "Escovar os dentes", descricao: "O mundo precisa ser salvo do exercito de cáries. Rápido, escove os dentes e não deixe que eles ganhem.", horario: '8:10' },
    { id: 2, titulo: "Tomar café da manhã", descricao: "Saco vazio não para em pé. \nEsta na hora de tomar café.", horario: '8:30' },
    { id: 3, titulo: "Assistir TV", descricao: "Manhã boa é manhã tranquila. \nHora de assistir TV.", horario: '10:00' },
    { id: 4, titulo: "Ajudar mamãe", descricao: "Nem só de descanso vive o homem. Hora de ajudar mamãe.", horario: '10:30' },
    { id: 5, titulo: "Jogar", descricao: "Depois de muito trabalho, é hora de muita diversão", horario: '11:00' },
    { id: 6, titulo: "Almoçar", descricao: "Que manhã cansativa, hora de repor as energias com aquele almoço.", horario: '12:00' },
    { id: 7, titulo: "Brincar com o gato", descricao: "Gabo está se sentindo só. Hora de brincar com ele.", horario: '14:00' },
    { id: 8, titulo: "Lanche", descricao: "old que sorvete superestimado", horario: '16:00' },
    { id: 9, titulo: "Brincar na rua", descricao: "A rua te espera, vai brincar!", horario: '17:00' },
    { id: 10, titulo: "Assistir filmes", descricao: "Hora de aproveitar o fim do dia com aquele filminho", horario: '19:00' },

  ]);

  // var cont = contador.getContagem();

  return (
    <View style={styles.container}>
      <BarraDeProgresso value={value} />
      <View>
        <View style={{ alignItems: "center" }}>
          <Tarefa
            title={tarefasLista[counter].titulo}
            text={tarefasLista[counter].descricao}
            horario={tarefasLista[counter].horario} />
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.botaoVermelhoTelaTarefa}
            onPress={() => navigation.navigate('Tarefa nao realizada')}>
            <Text style={styles.textButtonTarefa}>Não Realizada</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoVerdeTelaTarefa} onPress={() => {
            updatePercent(0.1);

            if (counter === 9) {
              setValue(0)
            }

            navigation.navigate('Avalie sua Tarefa');
            atualizaMissao();
          }}>
            <Text style={styles.textButtonTarefa}>Realizada</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

export default Tarefas;