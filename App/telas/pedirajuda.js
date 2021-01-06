import React from "react";
import { View, Button, Image } from "react-native";
import styles from "../css/telas";
import Avaliacao from '../componentes/Avaliacao';

const pedirajuda = ({ navigation }) => {
    return(
        <View style={styles.container}>
        <View style={styles.circuloAstroAjuda}>
            <Image style={styles.astroAjuda} source={require('../img/astronaut-pescando.png')} />
        </View>
        <View>
            <Avaliacao title="Algumas missões são muito dificeis para uma pessoa só.
                Procure um responsável para lhe ajudar com essa tarefa." />
                 <View style={styles.buttonsAjudaArea}>
                    <Button  title= "Voltar para missão"color="#00AA95" accessibilityLabel="Botão para retornar para missão" onPress={() => navigation.navigate('Tarefas do Dia')}/>
                 </View>
        </View>

    </View>
    )
}
export default pedirajuda;