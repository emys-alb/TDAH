import React from "react";
import { Text, View } from "react-native";

import stylesAvaliacao from '../assets/css/componentes/Avaliacao';

const Avaliacao = (props) => {
    return(
        <View>
        <Text style={stylesAvaliacao.titleAvaliacao}> {props.title} </Text>
        <View style={stylesAvaliacao.buttonsContainerArea}>
        </View>
       </View>
    )
}

export default Avaliacao