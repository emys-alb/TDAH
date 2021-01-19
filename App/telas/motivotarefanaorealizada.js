import React from 'react';

// Layout
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../assets/css/telas';
import Entradadetexto from "../componentes/Entradadetexto";
import Avaliacao from '../componentes/Avaliacao';

//Redux
import * as actions from '../redux/actions/counter';
import { useDispatch } from 'react-redux';

const motivotarefanaorealizada = ({ navigation }) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <View style={styles.buttonsContainerArea}>
                    <Avaliacao title="Por que você não concluiu a tarefa?" />
                    <Entradadetexto />
                    <TouchableOpacity
                        style={styles.botaoTelaMotivo}
                        onPress={() => {
                            navigation.navigate('Tarefas do Dia');
                            dispatch(actions.increment());
                        }}>
                        <Text style={styles.textButton}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default motivotarefanaorealizada;