import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import stylesComponentes from '../../assets/css/componentes';
import styles from '../../assets/css/telas';

const telaInicio = ({ navigation }) => {
    return(
        <View style={styles.container}> 
            <TouchableOpacity style={stylesComponentes.iconePergunta} onPress={() => navigation.navigate('Sobre')}>
                <Image source={require('../../assets/img/question.png')}/>
            </TouchableOpacity>
            <View style={styles.icones}>
                <Text style={stylesComponentes.titleAvaliacao}>TDAH</Text>
                <Image source={require('../../assets/img/planet-earth.png')} />
            </View>
            <View style={styles.icones}>
                <Image source={require('../../assets/img/planet.png')} />
                <Text style={stylesComponentes.titleAvaliacao}>Uma aventura no espaço!</Text>
            </View>
            <TouchableOpacity style={stylesComponentes.botaoLaranja} onPress={() => navigation.navigate('Tarefas do Dia')}>
                <Text style={styles.textButtonTarefaN}>Começar Aventura!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default telaInicio;