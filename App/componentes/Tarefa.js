import React from "react";
import { Text, View } from "react-native";

import styles from '../css/componentes'

const Tarefa = (props) => {
    return(
        <View style={styles.container}>
        <Text style={styles.titleTarefa}> {props.title} </Text>
        <View style={styles.textContainerTarefa}>
        <Text style={styles.textTarefa}>{props.text}</Text>
        </View>
        </View>
    )
}

export default Tarefa 