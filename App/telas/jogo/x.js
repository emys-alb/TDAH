import React, {Component} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';

export class X extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seta1: new Animated.Value(0),
            seta2: new Animated.Value(0),
        };
        this.visivel = this.props.visivel;

        Animated.timing(this.state.seta1,
            {toValue:45, duration:500, easing: Easing.elastic(1.5)}).start();

        Animated.timing(this.state.seta2,
            {toValue:-45, duration:500, easing: Easing.elastic(1.5)}).start();
    }

    render() {
        let r1 = this.state.seta1.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
        });
        let r2 = this.state.seta2.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
        });

        return (
            <Animated.View style={styles.area}>
                <Animated.View style={
                    [
                        styles.seta,
                        {
                            transform: [
                                {perspective: 1000},
                                {rotate: r1}
                            ]
                        }
                    ]}>
                </Animated.View>
                <Animated.View style={
                    [
                        styles.seta,
                        {
                            transform: [
                                {perspective: 1000},
                                {rotate: r2}
                            ]
                        }
                    ]}>
                </Animated.View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    area: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    seta: {
        width: 10,
        height: 60,
        backgroundColor: '#ff0000',
        position: 'absolute',
    }
});