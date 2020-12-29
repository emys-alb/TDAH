import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Tarefa = (props) => {
    return(
        <View style={styles.container}>
        <Text style= {styles.title}> {props.title} </Text>
        <Text>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: "#FFFFFF",
    },

    title: {
        fontWeight: "700",
        fontSize: "1.6em",
        color: "FF7C48",
    },
    
    });

export default Tarefa 