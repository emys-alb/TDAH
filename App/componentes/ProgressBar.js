import React from 'react';
import Animated from 'react-native-reanimated';
import { Text, View, StyleSheet } from 'react-native';

import stylesComponentes from '../css/componentes'

const ProgressBar = () => {
    return(
        <View style={stylesComponentes.progressBarContainer}>
            <View style={stylesComponentes.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#02A9F4", width: "33%"}}/>
            </View>
            <Text style={{color: "#fff", fontWeight: "bold"}}> 1/3 </Text>
        </View>
    )
}

export default ProgressBar