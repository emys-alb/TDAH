import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import stylesTarefanaorealizada from '../assets/css/telas/tarefanaorealizada';
import Avaliacao from '../componentes/Avaliacao';
import BarraDeProgresso from '../componentes/ProgressBar';
import contador from '../services/contador';
const tarefanaorealizada = ({ navigation }) => {
    return (
        <View style={stylesTarefanaorealizada.container}>
            <View style={{ alignItems: "center" }}>
                <View style={stylesTarefanaorealizada.buttonsContainerArea}>
                    <Avaliacao title="Parabéns pela tentativa. Se teve dificuldade considere pedir ajuda." />

                    <View style={stylesTarefanaorealizada.buttonsAvaliacaoArea}>
                        <TouchableOpacity style={stylesTarefanaorealizada.buttonGreenTaskNotDone} onPress={() => navigation.navigate('Tarefas do Dia')}>
                            <Text style={stylesTarefanaorealizada.textButtonTarefaN}>Continuar Tentando</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesTarefanaorealizada.buttonsAvaliacaoArea}>
                        <TouchableOpacity style={stylesTarefanaorealizada.buttonGreyTaskNotDone} onPress={() => navigation.navigate('motivos')}>
                            <Text style={stylesTarefanaorealizada.textButtonTarefa}>Pular Missão</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesTarefanaorealizada.buttonsAvaliacaoArea}>
                        <TouchableOpacity style={stylesTarefanaorealizada.buttonRedTaskNotDone} onPress={() => navigation.navigate('ajuda')}>
                            <Text style={stylesTarefanaorealizada.textButtonTarefaN}>Preciso de Ajuda</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default tarefanaorealizada;