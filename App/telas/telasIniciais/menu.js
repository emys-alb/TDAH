import React from 'react';
import { Text, View, Image, TouchableOpacity } from "react-native";

import stylesMenu from '../../assets/css/telas/telasIniciais/menu';

const menu = ({ navigation }) => {
    return(
        <View style={stylesMenu.container}>
            <TouchableOpacity style={stylesMenu.iconePergunta} onPress={() => navigation.navigate('Iniciar')}>
                <Image resizeMode="contain" style={stylesMenu.voltar} source={require('../../assets/img/seta-de-retorno.png')}/>
            </TouchableOpacity>
            <View style={stylesMenu.textContainerMenu}>
                <Text style={stylesMenu.menuText}>Como jogar</Text>
                <Text style={stylesMenu.menuText}>Configurações</Text>
                <Text style={stylesMenu.menuText}>Termos de uso e privacidade</Text>
                <Text style={stylesMenu.menuText}>Reportar Bugs</Text>
                <TouchableOpacity style={stylesMenu.menuOption} onPress={() => navigation.navigate('Sobre')}>
                <Text style={stylesMenu.menuText}>Sobre o Aplicativo</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}
export default menu;