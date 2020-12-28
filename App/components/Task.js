import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Task = (props) => {
    return(
        <View>
        <Text>{props.title}</Text>
        <Text>{props.text}</Text>

        <View>
            <Button>{"Realizada"}</Button>
            <Button>{"Não Realizada"}</Button>
        </View>

        </View>
    )
}

const stylesButton = StyleSheet.create({
    button: {
        alignContent: "center",
        color: "#fff",
        display: "flex",
    }
  });

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#000",
        display: "flex",
    }
})
  

export default Task 