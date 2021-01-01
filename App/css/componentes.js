import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    titleTarefa: {
        fontWeight: "700",
        fontSize: 32,
        color: "#FF7C48",
        lineHeight: 28,
        paddingBottom: 30,
        paddingTop: 8,
        justifyContent: "center"
    },

    textContainerTarefa: {
        padding: 8,
        backgroundColor: "#6E76E4",
        borderRadius: 26,
        width: "90%",
        height: 300,
        paddingTop: 30,
        paddingLeft: 25,
        paddingRight: 15,
    },

    textTarefa: {
        color: "#FFF",
        fontSize: 20,
    },

    progressBar: {
        height: 20,
        width: '80%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5, 
    },
});

export default styles;