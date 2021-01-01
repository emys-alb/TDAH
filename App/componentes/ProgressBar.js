import React from 'react';
import Animated from 'react-native-reanimated';
import { Text, View, StyleSheet } from 'react-native';

import styles from '../css/componentes'

const ProgressBar = () => {
    return(
        <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#02A9F4", width: "33%"}}/>
            </View>
            <Text style={{color: "#fff", fontWeight: "bold"}}> 1/3 </Text>
        </View>
    )
}

export default ProgressBar