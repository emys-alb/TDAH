import React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import stylesComponentes from '../assets/css/componentes'

const BarraDeProgresso = ({ value }) => {
    let progresso = Math.round(value * 100);
    let width = progresso - 20;

    return(
        <View style={stylesComponentes.progressBarContainer}>
            <View style={stylesComponentes.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill], {width: wp(`${width}% `), backgroundColor: "#02A9F4", height: hp("2.7%")}} />
             </View>
            <Text style={{color: "#fff", fontWeight: "bold"}}> {progresso}/100 </Text>
        </View>
    )
}

export default BarraDeProgresso