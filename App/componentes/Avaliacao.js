import React from "react";
import { Text, View } from "react-native";

import stylesComponentes from '../assets/css/componentes'

const Avaliacao = (props) => {
    return(
        <View>
        <Text style={stylesComponentes.titleAvaliacao}> {props.title} </Text>
        <View style={stylesComponentes.buttonsContainerArea}>
        </View>
       </View>
    )
}

export default Avaliacao