import React from "react";
import { Text, View, Image } from "react-native";

import stylesComponentes from '../assets/css/componentes'

const TarefaListagem = (props) => {
    return(
        <View>
        <View style={stylesComponentes.textContainerTaskListing}>
        <Text style={stylesComponentes.titleTaskListing}> {props.title} </Text>
        <Text style={stylesComponentes.taskTimeListing}>{props.horario}{'\n'}</Text>
            <Image resizeMode="contain" style={stylesComponentes.taskImageListing} source={props.image}/>
        </View>
       </View>
    )
}
//<View style={stylesComponentes.timeContainer}>
//<Image style={stylesComponentes.clock} source={require('../assets/img/clock-time.png')}/>
//<Text style={stylesComponentes.taskTime}>{props.horario}{'\n'}</Text>
//</View>
export default TarefaListagem;