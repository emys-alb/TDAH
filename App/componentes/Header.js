import React from "react";
import { Text, View } from "react-native";

import { Icon } from 'react-native-elements'

import { StyleSheet, Dimensions } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Header = ({titulo, navigator}) => {
    return(
        <View style={styles.view}>
            <Icon name='arrow-back' color="#D93E00" size={32} onPress={() => navigator.goBack()}/>
            <Text style={styles.titleDayTasks}>{titulo}</Text>
            <Icon name='house' color="#D93E00" size={32} onPress={() => navigator.navigate('Iniciar')}/>
       </View>
    )
}

const styles = StyleSheet.create({
    titleDayTasks:{
        color:"#FF7C48",
        fontSize:hp("4%"),
        alignSelf:"center",
        padding:"1%",
        maxWidth: 250,
        textAlign: 'center',
        marginLeft: 32,
        marginRight: 32,
        fontFamily: 'Space'
    },
    view: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: 16,
    }
})

export default Header;