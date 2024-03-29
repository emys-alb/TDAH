import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// Layout
import stylesTarefas from '../assets/css/telas/tarefas';
import Tarefa from '../componentes/Tarefa';
import BarraDeProgresso from '../componentes/ProgressBar';
//import tarefasData from '../services/sqlite/tarefasData';

import * as actions from '../redux/actions/counter';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import Header from '../componentes/Header';
import { useLinkProps } from '@react-navigation/native';

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
    { id: 1, titulo: "Escovar os dentes", descricao: "O mundo precisa ser salvo do exercito de cáries. Rápido, escove os dentes e não deixe que eles ganhem.", horario: '8:10', imagem: require('../assets/img/escovando-os-dentes.png') },
    { id: 2, titulo: "Tomar café da manhã", descricao: "Saco vazio não para em pé. \nEsta na hora de tomar café.", horario: '8:30', imagem: require('../assets/img/cafe.png') },
    { id: 3, titulo: "Assistir TV", descricao: "Manhã boa é manhã tranquila. \nHora de assistir TV.", horario: '10:00', imagem: require('../assets/img/relatorio-de-noticias.png') },
    { id: 4, titulo: "Ajudar mamãe", descricao: "Nem só de descanso vive o homem. Hora de ajudar mamãe.", horario: '10:30', imagem: require('../assets/img/lavando.png') },
    { id: 5, titulo: "Jogar", descricao: "Depois de muito trabalho, é hora de muita diversão", horario: '11:00', imagem: require('../assets/img/game.png') },
    { id: 6, titulo: "Almoçar", descricao: "Que manhã cansativa, hora de repor as energias com aquele almoço.", horario: '12:00', imagem: require('../assets/img/comendo.png') },
    { id: 7, titulo: "Brincar com o gato", descricao: "Gabo está se sentindo só. Hora de brincar com ele.", horario: '14:00', imagem: require('../assets/img/cat.png') },
    { id: 8, titulo: "Lanche", descricao: "old que sorvete superestimado", horario: '16:00', imagem: require('../assets/img/lanche.png') },
    { id: 9, titulo: "Brincar na rua", descricao: "A rua te espera, vai brincar!", horario: '17:00', imagem: require('../assets/img/slider.png') },
    { id: 10, titulo: "Assistir filmes", descricao: "Hora de aproveitar o fim do dia com aquele filminho", horario: '19:00', imagem: require('../assets/img/computer.png') },

  ]);

  // var cont = contador.getContagem();

  return (
    <View style={stylesTarefas.container}>
      <BarraDeProgresso value={value} />
      <Header titulo={tarefasLista[counter].titulo} navigator={navigation}/>
      <View>
        <View style={{ alignItems: "center" }}>
          <Tarefa
            title={tarefasLista[counter].titulo}
            text={tarefasLista[counter].descricao}
            // horario={tarefasLista[counter].horario} 
            image={tarefasLista[counter].imagem} />
        </View>

        <View style={stylesTarefas.buttons}>
          <TouchableOpacity
            style={stylesTarefas.botaoVermelhoTelaTarefa}
            onPress={() => navigation.navigate('Tarefa nao realizada')}>
            <Text style={stylesTarefas.textButtonTarefa}>Não Realizada</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesTarefas.botaoVerdeTelaTarefa} onPress={() => {
            if (counter === 9) {
              setValue(0)
              navigation.navigate('Missoes Finalizadas');
            } else {
              updatePercent(0.1);
              navigation.navigate('Avalie sua Tarefa');
              atualizaMissao();
            }
          }}>
            <Text style={stylesTarefas.textButtonTarefa}>Realizada</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

export default Tarefas;