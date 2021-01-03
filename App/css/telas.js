import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 34,
        paddingRight: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
        width: "100%",
        height: "100%",
        marginTop: "8%",
    },
    buttonsContainerArea:{
        padding: 8,
        backgroundColor: "#6E76E4",
        borderRadius: 26,
        width: "90%",
        height: "80%",
        paddingTop: 30,
        paddingLeft: 25,
        paddingRight: 15,
        marginTop: "20%",
        fontSize: 30,
    },
    buttonsAvaliacaoArea:{
        marginBottom:"4%",
    },

    
});

export default styles;