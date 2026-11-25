import React from "react";
import { Text, View, Image } from "react-native";

import stylesTarefaListagem from '../assets/css/componentes/TarefaListagem';

const TarefaListagem = (props) => {
    return(
        <View>
        <View style={stylesTarefaListagem.textContainerTaskListing}>
        <Text style={stylesTarefaListagem.titleTaskListing}> {props.title} </Text>
        <Text style={stylesTarefaListagem.taskTimeListing}>{props.horario}{'\n'}</Text>
            <Image resizeMode="contain" style={stylesTarefaListagem.taskImageListing} source={props.image}/>
        </View>
       </View>
    )
}
//<View style={stylesTarefaListagem.timeContainer}>
//<Image style={stylesTarefaListagem.clock} source={require('../assets/img/clock-time.png')}/>
//<Text style={stylesTarefaListagem.taskTime}>{props.horario}{'\n'}</Text>
//</View>
export default TarefaListagem;