import React from "react";
import { Text, View, Button, Image, TouchableOpacity } from "react-native";

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
                <View style={styles.buttonsAjudaArea}>
                <TouchableOpacity style={styles.botaoVerdeTelaAvaliacao} onPress={() => navigation.navigate('Tarefas do Dia')}>
                    <Text style={styles.textButtonTarefaN}>Proxima Missão</Text>
                 </TouchableOpacity>
                 </View>
            </View>
        </View>
    )
}

export default Parabens;