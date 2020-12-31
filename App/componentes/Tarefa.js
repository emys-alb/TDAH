import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Tarefa = (props) => {
    return(
        <View style={styles.container}>
        <Text style={styles.title}> {props.title} </Text>
        <View style={styles.textContainer}>
        <Text style={styles.text}>{props.text}</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    },

    title: {
        fontWeight: "700",
        fontSize: 36,
        color: "#FF7C48",
        lineHeight: 28,
        paddingBottom: 30,
        paddingTop: 8,
    },

    textContainer: {
        padding: 8,
        backgroundColor: "#6E76E4",
        borderRadius: 26,
        width: 313,
        height: 369,
        paddingTop: 66,
        paddingLeft: 25,
    },

    text: {
        color: "#FFF",
        fontSize: 24,
    }
    
    });

export default Tarefa 