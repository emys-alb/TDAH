import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import stylesComponentes from '../../assets/css/componentes';
import styles from '../../assets/css/telas';

const telaInicio = ({ navigation }) => {
    return(
        <View style={styles.container}> 
            <Button style={stylesComponentes.iconePergunta} onPress={() => navigation.navigate('Sobre')}>
                <Image source={require('../../assets/img/question.png')}/>
            </Button>
            <View style={styles.icones}>
                <Text style={stylesComponentes.titleAvaliacao}>TDAH</Text>
                <Image source={require('../../assets/img/planet-earth.png')} />
            </View>
            <View style={styles.icones}>
                <Text style={stylesComponentes.titleAvaliacao}>Uma aventura no espaço!</Text>
                <Image source={require('../../assets/img/planet.png')} />
            </View>
            <Button title={'Começar Aventura!'} onPress={() => navigation.navigate('Tarefas do Dia')}></Button>
        </View>
    )
}

export default telaInicio;