import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';

// Layout
import stylesDayTasks from '../../assets/css/telas/telasIniciais/dayTasks';
import Tarefa from '../../componentes/Tarefa';
import TarefaListagem from '../../componentes/TarefaListagem';
import Header from '../../componentes/Header'
//import tarefasData from '../services/sqlite/tarefasData';


const dayTask = ({ navigation }) => {
    const [tarefasLista, setTarefas] = useState([
        { id: 1, titulo: "Escovar os dentes", descricao: "O mundo precisa ser salvo do exercito de cáries. Rápido, escove os dentes e não deixe que eles ganhem.", horario: '8:10', imagem: require('../../assets/img/escovando-os-dentes.png')},
        { id: 2, titulo: "Tomar café da manhã", descricao: "Saco vazio não para em pé. \nEsta na hora de tomar café.", horario: '8:30', imagem: require('../../assets/img/cafe.png') },
        { id: 3, titulo: "Assistir TV", descricao: "Manhã boa é manhã tranquila. \nHora de assistir TV.", horario: '10:00', imagem: require('../../assets/img/relatorio-de-noticias.png') },
        { id: 4, titulo: "Ajudar mamãe", descricao: "Nem só de descanso vive o homem. Hora de ajudar mamãe.", horario: '10:30', imagem: require('../../assets/img/lavando.png') },
        { id: 5, titulo: "Jogar", descricao: "Depois de muito trabalho, é hora de muita diversão", horario: '11:00', imagem: require('../../assets/img/game.png')},
        { id: 6, titulo: "Almoçar", descricao: "Que manhã cansativa, hora de repor as energias com aquele almoço.", horario: '12:00', imagem: require('../../assets/img/comendo.png') },
        { id: 7, titulo: "Brincar com o gato", descricao: "Gabo está se sentindo só. Hora de brincar com ele.", horario: '14:00', imagem: require('../../assets/img/cat.png') },
        { id: 8, titulo: "Lanche", descricao: "old que sorvete superestimado", horario: '16:00', imagem: require('../../assets/img/lanche.png') },
        { id: 9, titulo: "Brincar na rua", descricao: "A rua te espera, vai brincar!", horario: '17:00', imagem: require('../../assets/img/slider.png') },
        { id: 10, titulo: "Assistir filmes", descricao: "Hora de aproveitar o fim do dia com aquele filminho", horario: '19:00', imagem: require('../../assets/img/computer.png') },
    
      ]);
  return (
    <View style={stylesDayTasks.container}>
        <Header titulo='Suas missões do dia!' goHome={()=> navigation.navigate('Iniciar')} goBack={() => navigation.goBack()} navigator={navigation}/>
        <ScrollView >
        { tarefasLista.map(item => {
            return <TarefaListagem
            title={item.titulo}
            text={item.descricao}
            horario={item.horario}
           // horario={tarefasLista[counter].horario} 
            image={item.imagem}/>
        }) }
        </ScrollView>
        <TouchableOpacity style={stylesDayTasks.buttonListingTask}  onPress={() => navigation.navigate('Tarefas do Dia')}>
                <Text style={stylesDayTasks.textButtonTarefaN}>Começar Missões</Text>
            </TouchableOpacity>
    </View>
  );
 }
export default dayTask;