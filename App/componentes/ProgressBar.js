import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

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

const styles = StyleSheet.create ({
    progressBar: {
        height: 20,
        width: '80%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5, 
    }
},
)

export default ProgressBar