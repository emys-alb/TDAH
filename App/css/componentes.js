import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    titleTarefa: {
        fontWeight: "700",
        fontSize: 32,
        color: "#FF7C48",
        lineHeight: 28,
        paddingBottom: 30,
        paddingTop: 20,
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
    titleAvaliacao: {
        textAlign:"center",
        fontWeight: "700",
        fontSize: 30,
        color: "#FFFFFF",
        paddingBottom: 30,
        paddingTop: 20,
       
    },

    progressBarContainer: {
        backgroundColor: "#FF7C48",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
        height: 30,
        padding: "2%",
    },

    progressBar: {
        height: 20,
        width: '80%',
        backgroundColor: '#C4C4C4',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 15,
    },
});

export default styles;