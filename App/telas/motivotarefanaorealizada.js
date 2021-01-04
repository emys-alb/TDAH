import React from 'react';
import { View , Button, TextInput} from 'react-native';
import styles from '../css/telas';
import ProgressBar from '../componentes/ProgressBar';
import Entradadetexto from "../componentes/Entradadetexto";
import Avaliacao from '../componentes/Avaliacao';
const motivotarefanaorealizada = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View>
                <ProgressBar />
            </View>
            <View style={{alignItems: "center"}}>
                <View style={styles.buttonsContainerArea}>
                <Avaliacao title = "Por que você não concluiu a tarefa?"/>
                    <Entradadetexto/>
                         <Button title="Enviar e continuar" color="#00AA95" accessibilityLabel="Botão para enviar motivo e continuar para proxima missão" onPress={() => navigation.navigate('Tarefas do Dia')}/>
                </View>
            </View>
        </View>
    )
}
export default motivotarefanaorealizada;