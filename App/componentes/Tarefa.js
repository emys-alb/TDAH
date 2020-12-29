import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
const Tarefa = (props) => {
    return(
        <View style={styles.container}>
        <Text>{props.title}</Text>
        <Text>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C4C4C4",
    },
    
    });

export default Tarefa 