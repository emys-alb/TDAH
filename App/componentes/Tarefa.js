import React from "react";
import { Text, View, Image } from "react-native";

import stylesTarefa from '../assets/css/componentes/Tarefa';
import Header from "./Header";

const Tarefa = (props) => {
    return(
        <View>    
        <View style={stylesTarefa.textContainerTarefa}>
            <Text style={stylesTarefa.textTarefa}>{props.text}</Text>
            <Image resizeMode="contain" style={stylesTarefa.taskImage} source={props.image}/>
        </View>
       </View>
    )
}
//<View style={stylesTarefa.timeContainer}>
//<Image style={stylesTarefa.clock} source={require('../assets/img/clock-time.png')}/>
//<Text style={stylesTarefa.taskTime}>{props.horario}{'\n'}</Text>
//</View>
export default Tarefa 