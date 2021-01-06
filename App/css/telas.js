import { StyleSheet,Dimensions } from "react-native"

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
    buttonsAjudaArea:{
        marginLeft:44,
        marginRight:44,
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
    astroAjuda:{
        width: 184,
        height:185,
        alignSelf:"center",
        marginTop:30,
        marginBottom:45,
 
    },
    circuloAstroAjuda:{
        backgroundColor:"#C4C4C4",
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2 ,
        marginLeft:45,
        marginRight:45,
        marginTop:39,
        borderColor:"#F40202",
        borderWidth:10,
    },
});

export default styles;