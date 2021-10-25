import React from 'react';
import { Text, View, Image, TouchableOpacity } from "react-native";

import stylesSobre from '../../assets/css/telas/telasIniciais/sobre';

const telaSobre = ({ navigation }) => {
    return(
        <View style={stylesSobre.container}>
            <TouchableOpacity style={stylesSobre.iconePergunta} onPress={() => navigation.navigate('Iniciar')}>
                <Image resizeMode="contain" style={stylesSobre.voltar} source={require('../../assets/img/seta-de-retorno.png')}/>
            </TouchableOpacity>
            <Text style={stylesSobre.textSobre}>Olá, o aplicativo tem a função de auxiliar crianças com TDAH a organizarem o seu dia de forma divertida!</Text>
            <View style={stylesSobre.circuloAstroParabens}>
                <Image resizeMode="contain" style={stylesSobre.astroAjuda} source={require('../../assets/img/astronaut-pescando.png')} />
            </View>
            
        </View>
    )
}

export default telaSobre;