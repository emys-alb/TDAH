import React from "react";
import { Text, View, Button, Image } from "react-native";

import stylesComponentes from "../css/componentes";
import styles from "../css/telas";

const Parabens = ({ navigation }) => {
    return(
        <View style={styles.container}>
            
            <View style={styles.circuloAstroParabens}>
                <Image style={styles.astroAjuda} source={require('../img/astronaut.png')} />
            </View>
            <View>
                <Text style={stylesComponentes.titleParabens}>{"Parabéns por ter concluido a missão!\nA galáxia está salva graças a você.\nContinue assim."}</Text>
                <Button title="Proxima Missão" color="#00AA95" accessibilityLabel="Botão para ir para a próxima missão"
                onPress={() => navigation.navigate('Tarefas do Dia')}></Button>
            </View>
        </View>
    )
}

export default Parabens;