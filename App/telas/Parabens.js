import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import stylesComponentes from "../assets/css/componentes";
import styles from "../assets/css/telas";

const Parabens = ({ navigation }) => {
    return(
        <View style={styles.container}>
            
            <View style={styles.circuloAstroParabens}>
                <Image style={styles.astroAjuda} source={require('../assets/img/astronaut.png')} />
            </View>
            <View>
                <Text style={stylesComponentes.titleParabens}>{"Parabéns por ter concluido a missão!\nA galáxia está salva graças a você.\nContinue assim."}</Text>
                <View style={styles.buttonsAjudaArea}>
                <TouchableOpacity style={styles.botaoVerdeTelaTarefa} onPress={() => navigation.navigate('Missoes Finalizadas')}>
                    <Text style={styles.textButtonTarefaN}>Proxima Missão</Text>
                 </TouchableOpacity>
                 </View>
            </View>
        </View>
    )
}

export default Parabens;