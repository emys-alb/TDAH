import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from '../assets/css/telas';
import Entradadetexto from "../componentes/Entradadetexto";
import Avaliacao from '../componentes/Avaliacao';
import BarraDeProgresso from '../componentes/ProgressBar';

const motivotarefanaorealizada = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={{alignItems: "center"}}>
                <View style={styles.buttonsContainerArea}>
                <Avaliacao title = "Por que você não concluiu a tarefa?"/>
                    <Entradadetexto/>
                        <TouchableOpacity style={styles.botaoTelaMotivo} onPress={() => navigation.navigate('Tarefas do Dia')}>
                        <Text style={styles.textButton}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default motivotarefanaorealizada;