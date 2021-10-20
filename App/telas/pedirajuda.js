import React from "react";
import { View, Button, Image, TouchableOpacity,Text } from "react-native";
import stylesPedirajuda from "../assets/css/telas/pedirajuda";
import Avaliacao from '../componentes/Avaliacao';

const pedirajuda = ({ navigation }) => {
    return(
        <View style={stylesPedirajuda.container}>
        <View style={stylesPedirajuda.circuloAstroAjuda}>
            <Image resizeMode="contain" style={stylesPedirajuda.astroAjuda} source={require('../assets/img/astronaut-pescando.png')} />
        </View>
        <View>
            <Avaliacao title="Algumas missões são muito dificeis para uma pessoa só.
                Procure um responsável para lhe ajudar com essa tarefa." />
                 <View style={stylesPedirajuda.buttonsAjudaArea}>
                    <TouchableOpacity style={stylesPedirajuda.buttonHelpScreen} onPress={() => navigation.navigate('Tarefas do Dia')}>
                                <Text style={stylesPedirajuda.textButtonTarefaN}>Voltar para Missão</Text>
                    </TouchableOpacity>
                 </View>
        </View>

    </View>
    )
}
export default pedirajuda;