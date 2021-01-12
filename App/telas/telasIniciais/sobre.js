import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import stylesComponentes from '../../assets/css/componentes';
import styles from '../../assets/css/telas';

const telaSobre = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={stylesComponentes.iconePergunta} onPress={() => navigation.navigate('Iniciar')}>
                <Image source={require('../../assets/img/seta-de-retorno.png')}/>
            </TouchableOpacity>
            <Text style={stylesComponentes.textTarefa}>Olá, o aplicativo tem a função de auxiliar crianças com TDAH a organizarem o seu dia de forma divertida!</Text>
            <Image source={require('../../assets/img/astronaut-pescando.png')}/>
        </View>
    )
}

export default telaSobre;