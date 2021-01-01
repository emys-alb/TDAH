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
        alignItems: 'center',
        width: "100%"
    },
    progressBar: {
        backgroundColor: '#FF7C48',
    }

});

export default styles;