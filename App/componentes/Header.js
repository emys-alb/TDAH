import React from "react";
import { Text, View } from "react-native";

import { Icon } from 'react-native-elements'

import stylesHeader from '../assets/css/componentes/Header';

const Header = ({titulo, navigator}) => {
    return(
        <View style={stylesHeader.view}>
            <Icon name='arrow-back' color="#D93E00" size={32} onPress={() => navigator.goBack()}/>
            <Text style={stylesHeader.titleDayTasks}>{titulo}</Text>
            <Icon name='house' color="#D93E00" size={32} onPress={() => navigator.navigate('Iniciar')}/>
       </View>
    )
}

export default Header;