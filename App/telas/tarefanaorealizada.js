import React from 'react';
import { View , Button, TouchableOpacity, Text} from 'react-native';
import styles from '../css/telas';
import ProgressBar from '../componentes/ProgressBar';
import Avaliacao from '../componentes/Avaliacao';
const tarefanaorealizada = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View>
                <ProgressBar />
            </View>

            <View style={{alignItems: "center"}}>
                <View style={styles.buttonsContainerArea}>
                    <Avaliacao title = "Parabéns pela tentativa. Se teve dificuldade considere pedir ajuda."/>
                    
                    <View style={styles.buttonsAvaliacaoArea}>
                        <TouchableOpacity style={styles.botaoVerdeTelaAvaliacao} onPress={() => navigation.navigate('Tarefas do Dia')}>
                                <Text style={styles.textButtonTarefaN}>Continuar Tentando</Text>
                         </TouchableOpacity>
                    </View>
                    <View style={styles.buttonsAvaliacaoArea}>
                        <TouchableOpacity style={styles.botaoCinzaTelaAvaliacao} onPress={() => navigation.navigate('motivo')}>
                                <Text style={styles.textButtonTarefa}>Pular Missão</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonsAvaliacaoArea}>
                         <TouchableOpacity style={styles.botaoVermelhoTelaAvaliacao} onPress={() => navigation.navigate('ajuda')}>
                                <Text style={styles.textButtonTarefaN}>Precio de Ajuda</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default tarefanaorealizada;