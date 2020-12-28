import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Task = (props) => {
    return(
        <View style={styles.container}>
        <Text>{props.title}</Text>
        <Text>{props.text}</Text>

        <View>
            <Button title= "Não realizada" color="#FF415B" accessibilityLabel="Botão para marcar a tarefa como 'Não Realizada'"/>
            <Button title= "Realizada" color="#00AA95"accessibilityLabel="Botão para marcar a tarefa como 'Realizada'"/>
        </View>

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

export default Task 