import React from "react";
import { Text, View, Image } from "react-native";

import stylesComponentes from '../assets/css/componentes'
import Header from "./Header";

const Tarefa = (props) => {
    return(
        <View>    
        <View style={stylesComponentes.textContainerTarefa}>
            <Text style={stylesComponentes.textTarefa}>{props.text}</Text>
            <Image resizeMode="contain" style={stylesComponentes.taskImage} source={props.image}/>
        </View>
       </View>
    )
}
//<View style={stylesComponentes.timeContainer}>
//<Image style={stylesComponentes.clock} source={require('../assets/img/clock-time.png')}/>
//<Text style={stylesComponentes.taskTime}>{props.horario}{'\n'}</Text>
//</View>
export default Tarefa 