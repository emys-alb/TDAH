import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../assets/css/telas';
import Avaliacao from '../componentes/Avaliacao';
import BarraDeProgresso from '../componentes/ProgressBar';
import contador from '../services/contador';
const tarefanaorealizada = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <View style={styles.buttonsContainerArea}>
                    <Avaliacao title="Parabéns pela tentativa. Se teve dificuldade considere pedir ajuda." />

                    <View style={styles.buttonsAvaliacaoArea}>
                        <TouchableOpacity style={styles.buttonGreenTaskNotDone} onPress={() => navigation.navigate('Tarefas do Dia')}>
                            <Text style={styles.textButtonTarefaN}>Continuar Tentando</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonsAvaliacaoArea}>
                        <TouchableOpacity style={styles.buttonGreyTaskNotDone} onPress={() => navigation.navigate('motivos')}>
                            <Text style={styles.textButtonTarefa}>Pular Missão</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonsAvaliacaoArea}>
                        <TouchableOpacity style={styles.buttonRedTaskNotDone} onPress={() => navigation.navigate('ajuda')}>
                            <Text style={styles.textButtonTarefaN}>Preciso de Ajuda</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default tarefanaorealizada;