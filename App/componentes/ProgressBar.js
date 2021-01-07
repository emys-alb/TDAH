import React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

import stylesComponentes from '../assets/css/componentes'

const BarraDeProgresso = ({ value }) => {
    let progresso = value * 100;
    return(
        <View style={stylesComponentes.progressBarContainer}>
            <View style={stylesComponentes.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill], {width: progresso, backgroundColor: "#02A9F4", height: "100%"}} />
             </View>
            <Text style={{color: "#fff", fontWeight: "bold"}}> {progresso}/100 </Text>
        </View>
    )
}

export default BarraDeProgresso