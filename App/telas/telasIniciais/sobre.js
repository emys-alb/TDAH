import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import stylesComponentes from '../../assets/css/componentes';
import styles from '../../assets/css/telas';

const telaSobre = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Button style={stylesComponentes.iconePergunta} onPress={() => navigation.navigate('Iniciar')}>
                <Image source={require('../../assets/img/seta-de-retorno.png')}/>
            </Button>
            <Text style={stylesComponentes.textTarefa}>Olá, o aplicativo tem a função de auxiliar crianças com TDAH a organizarem o seu dia de forma divertida!</Text>
            <Image source={require('../../assets/img/astronaut-pescando.png')}/>
        </View>
    )
}

export default telaSobre;