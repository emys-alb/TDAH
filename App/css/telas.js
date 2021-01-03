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
        width: "100%"
    },
    parabensCircle: {
        position: 'absolute',
        width: 272,
        height: 259,
        paddingLeft: 45,
        paddingTop: 39,

        backgroundColor: '#C4C4C4',
        borderRadius: 10,
        borderColor: '#02A9F4',
    },
});

export default styles;