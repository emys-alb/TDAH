import React from 'react';
import { Text, View, Image, TouchableOpacity } from "react-native";

import stylesComponentes from '../../assets/css/componentes';
import styles from '../../assets/css/telas';

const telaInicio = ({ navigation }) => {
    return(
        <View style={styles.container}> 
            <TouchableOpacity style={stylesComponentes.iconePergunta} onPress={() => navigation.navigate('menu')}>
                <Image resizeMode="contain" style={styles.duvida} source={require('../../assets/img/menu-icon.png')}/>
            </TouchableOpacity>
            <View style={styles.icones}>
                <Text style={stylesComponentes.titleInicial}>TDAH</Text>
                <Image resizeMode="contain" style={styles.planetaTerra} source={require('../../assets/img/planet-earth.png')} />
            </View>
            <View style={styles.icones}>
                <Image resizeMode="contain" style={styles.planeta} source={require('../../assets/img/planet.png')} />
                <Text style={stylesComponentes.titleInicial}>Uma {'\n'} aventura {'\n'}no espaço!</Text>
            </View>
            <TouchableOpacity style={stylesComponentes.botaoLaranja}  onPress={() => navigation.navigate('Lista Tarefas')}>
                <Text style={styles.textButtonTarefaN}>Começar Aventura!</Text>
            </TouchableOpacity>
            <Image resizeMode="contain" style={styles.ship} source={require('../../assets/img/rocket-ship.png')} />
        </View>
    )
}

export default telaInicio;