import React from "react";
import { Text, View, Button } from "react-native";

import styles from "../css/telas";

const Parabens = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <View style={styles.parabensCircle}></View>
            <Text>{"Parabéns por ter concluido a missão! A galáxia está salva graças a você."}</Text>
            <Text>{"Continue assim."}</Text>
            <Button title="Proxima Missão" color="#00AA95" accessibilityLabel="Botão para ir para a próxima missão"
                onPress={() => navigation.navigate('Tarefas do Dia')}></Button>
        </View>
    )
}

export default Parabens;