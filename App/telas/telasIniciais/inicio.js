import React from 'react';
import { Text, View, Image, TouchableOpacity } from "react-native";

import stylesInicio from '../../assets/css/telas/telasIniciais/inicio';

const telaInicio = ({ navigation }) => {
    return(
        <View style={stylesInicio.container}> 
            <TouchableOpacity style={stylesInicio.iconePergunta} onPress={() => navigation.navigate('menu')}>
                <Image resizeMode="contain" style={stylesInicio.duvida} source={require('../../assets/img/menu-icon.png')}/>
            </TouchableOpacity>
            <View style={stylesInicio.icones}>
                <Text style={stylesInicio.titleInicial}>TDAH</Text>
                <Image resizeMode="contain" style={stylesInicio.planetaTerra} source={require('../../assets/img/planet-earth.png')} />
            </View>
            <View style={stylesInicio.icones}>
                <Image resizeMode="contain" style={stylesInicio.planeta} source={require('../../assets/img/planet.png')} />
                <Text style={stylesInicio.titleInicial}>Uma {'\n'} aventura {'\n'}no espaço!</Text>
            </View>
            <TouchableOpacity style={stylesInicio.botaoLaranja}  onPress={() => navigation.navigate('Lista Tarefas')}>
                <Text style={stylesInicio.textButtonTarefaN}>Começar Aventura!</Text>
            </TouchableOpacity>
            <Image resizeMode="contain" style={stylesInicio.ship} source={require('../../assets/img/rocket-ship.png')} />
        </View>
    )
}

export default telaInicio;