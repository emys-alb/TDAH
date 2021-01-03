import React from "react";
import { Text, View } from "react-native";

import styles from '../css/componentes'

const Avaliacao = (props) => {
    return(
        <View>
        <Text style={styles.titleAvaliacao}> {props.title} </Text>
        <View style={styles.buttonsContainerArea}>
        </View>
       </View>
    )
}

export default Avaliacao