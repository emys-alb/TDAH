import React from 'react';
import { Text, View, Image, TouchableOpacity } from "react-native";

import stylesComponentes from '../../assets/css/componentes';
import styles from '../../assets/css/telas';

const menu = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={stylesComponentes.iconePergunta} onPress={() => navigation.navigate('Iniciar')}>
                <Image style={styles.voltar} source={require('../../assets/img/seta-de-retorno.png')}/>
            </TouchableOpacity>
            <View style={styles.textContainerMenu}>
                <Text style={styles.menuText}>Como jogar</Text>
                <Text style={styles.menuText}>Configurações</Text>
                <Text style={styles.menuText}>Termos de uso e privacidade</Text>
                <Text style={styles.menuText}>Reportar Bugs</Text>
                <TouchableOpacity style={stylesComponentes.menuOption} onPress={() => navigation.navigate('Sobre')}>
                <Text style={styles.menuText}>Sobre o Aplicativo</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}
export default menu;