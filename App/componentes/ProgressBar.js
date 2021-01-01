import React from 'react';
import Animated from 'react-native-reanimated';
import { Text, View, StyleSheet } from 'react-native';

import styles from '../css/componentes'

const ProgressBar = () => {
    return(
        <View>
            <View style={styles.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width: "20%"}}/>
            </View>
            <Text>20%</Text>
        </View>
    )
}

export default ProgressBar