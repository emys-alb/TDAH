import React from "react";
import { View, Button, Image, TouchableOpacity,Text } from "react-native";
import styles from "../assets/css/telas";
import Avaliacao from '../componentes/Avaliacao';

const pedirajuda = ({ navigation }) => {
    return(
        <View style={styles.container}>
        <View style={styles.circuloAstroAjuda}>
            <Image resizeMode="contain" style={styles.astroAjuda} source={require('../assets/img/astronaut-pescando.png')} />
        </View>
        <View>
            <Avaliacao title="Algumas missões são muito dificeis para uma pessoa só.
                Procure um responsável para lhe ajudar com essa tarefa." />
                 <View style={styles.buttonsAjudaArea}>
                    <TouchableOpacity style={styles.botaoVerdeTelaAvaliacao} onPress={() => navigation.navigate('Tarefas do Dia')}>
                                <Text style={styles.textButtonTarefaN}>Voltar para Missão</Text>
                    </TouchableOpacity>
                 </View>
        </View>

    </View>
    )
}
export default pedirajuda;