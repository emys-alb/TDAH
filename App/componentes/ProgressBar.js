import React, { useState } from 'react';
import Animated from 'react-native-reanimated';
import { Text, View, StyleSheet } from 'react-native';

import stylesComponentes from '../assets/css/componentes'

const BarraDeProgresso = () => {
    return(
        <View style={stylesComponentes.progressBarContainer}>
            <View style={stylesComponentes.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#02A9F4", width: 300, height: "100%"}}/>
            </View>
            <Text style={{color: "#fff", fontWeight: "bold"}}> {progresso}/100 </Text>
        </View>
    )
}

export default BarraDeProgresso