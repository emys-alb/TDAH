import React from 'react';
import { View , Button} from 'react-native';
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
                         <Button title= "Continuar Tentando"color="#00AA95" accessibilityLabel="Botão para retornar a tarefa" onPress={() => navigation.navigate('Tarefas do Dia')} />
                    </View>
                    <View style={styles.buttonsAvaliacaoArea}>
                        <Button title= "Pular Missão" color="#545C60" accessibilityLabel="Botão para pular missão"  onPress={() => navigation.navigate('motivo')}/>
                    </View>
                    <View style={styles.buttonsAvaliacaoArea}>
                        <Button title= "Preciso de Ajuda" color="#FF415B" accessibilityLabel="Botão para pedir ajuda" onPress={() => navigation.navigate('ajuda')} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default tarefanaorealizada;