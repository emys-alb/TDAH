import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import contador from '../services/contador';

import stylesParabens from "../assets/css/telas/parabens";

const parabens = ({ navigation }) => {
    return(
        <View style={stylesParabens.container}>
            
            <View style={stylesParabens.circuloAstroParabens}>
                <Image resizeMode="contain" style={stylesParabens.astroAjuda} source={require('../assets/img/astronaut.png')} />
            </View>
            <View>
                <Text style={stylesParabens.titleParabens}>{"Parabéns por ter concluido a missão!\nA galáxia está salva graças a você.\nContinue assim."}</Text>
                <View style={stylesParabens.buttonsAjudaArea}>
                <TouchableOpacity style={stylesParabens.botaoVerdeTelaTarefa} onPress={() => {
                    if(contador.getContagem() > 8){
                        contador.zeraContagem();
                        navigation.navigate('Missoes Finalizadas')
                    } else {
                        navigation.navigate('Tarefas do Dia')
                    }}}>
                    <Text style={stylesParabens.textButtonTarefaN}>Proxima Missão</Text>
                 </TouchableOpacity>
                 </View>
            </View>
        </View>
    )
}

export default parabens;