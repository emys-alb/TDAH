import React from "react";
import { Text, View } from "react-native";

import stylesComponentes from '../assets/css/componentes'

const Tarefa = (props) => {
    return(
        <View>
        <Text style={stylesComponentes.titleTarefa}> {props.title} </Text>
        <View style={stylesComponentes.textContainerTarefa}>
        <Text style={stylesComponentes.textTarefa}>{props.text}</Text>
        </View>
       </View>
    )
}

export default Tarefa 