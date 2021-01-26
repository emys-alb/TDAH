import React from 'react';
import { Text, View, Image, TouchableOpacity } from "react-native";

import stylesComponentes from '../../assets/css/componentes';
import styles from '../../assets/css/telas';

const telaSobre = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={stylesComponentes.iconePergunta} onPress={() => navigation.navigate('Iniciar')}>
                <Image resizeMode="contain" style={styles.voltar} source={require('../../assets/img/seta-de-retorno.png')}/>
            </TouchableOpacity>
            <Text style={styles.textSobre}>Olá, o aplicativo tem a função de auxiliar crianças com TDAH a organizarem o seu dia de forma divertida!</Text>
            <View style={styles.circuloAstroParabens}>
                <Image resizeMode="contain" style={styles.astroAjuda} source={require('../../assets/img/astronaut-pescando.png')} />
            </View>
            
        </View>
    )
}

export default telaSobre;