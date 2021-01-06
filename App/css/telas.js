import { StyleSheet,Dimensions } from "react-native"

const styles = StyleSheet.create({
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 34,
        paddingRight: "1%",
    },

    container: {
        flex: 1,
        backgroundColor: '#000',
        width: "100%",
        height: "100%",
        marginTop: "8.6%",
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
        marginTop: "15%",
        fontSize: 30,
    },

    buttonsAvaliacaoArea:{
        marginBottom:"4%",
        marginLeft:"25%",
    },
    buttonsAjudaArea:{
        marginLeft:"30%",
    },

    circuloAstroAjuda:{
        backgroundColor:"rgba(196, 196, 196, 0.27)",
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2 ,
        marginLeft:45,
        marginRight:45,
        marginTop:22,
        borderColor:"#F40202",
        borderWidth:10,
    },
    
    astroAjuda:{
        width: 185,
        height:185,
        alignSelf:"center",
        marginTop:30,
        marginBottom:35,
    },
    
    circuloAstroParabens:{
        backgroundColor:"#C4C4C4",
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2 ,
        marginLeft:45,
        marginRight:45,
        marginTop:22,
        borderColor:"#02A9F4",
        borderWidth:10,
    },
    botaoTelaMotivo:{
        backgroundColor:"#00AA95",
        width:138,
        height:69,
        marginLeft:"50%",
        borderRadius:10,
    },
    botaoVermelhoTelaTarefa:{
        backgroundColor:"#FF415B",
        width:138,
        height:69,
        borderRadius:10,
    },
    botaoVerdeTelaTarefa:{
        backgroundColor:"#00AA95",
        width:138,
        height:69,
        borderRadius:10,
    },
    botaoVerdeTelaAvaliacao:{
        backgroundColor:"#00AA95",
        width:138,
        height:69,
        borderRadius:10,
    },
    botaoCinzaTelaAvaliacao:{
        backgroundColor:"#545C60",
        width:138,
        height:69,
        borderRadius:10,
    },
    botaoVermelhoTelaAvaliacao:{
        backgroundColor:"#FF415B",
        width:138,
        height:69,
        borderRadius:10,
    },
    textButton:{
        fontWeight:"800",
        color:"#FFFFFF",
        fontSize:25,
        marginLeft:"23%",
        marginTop:"10%",
 
    },
    textButtonTarefa:{
        fontWeight:"800",
        color:"#FFFFFF",
        fontSize:20,
        marginLeft:"2%",
        marginTop:"15%",
        textAlign:"center",
 
    },
    textButtonTarefaN:{
        fontWeight:"800",
        color:"#FFFFFF",
        fontSize:20,
        marginLeft:"2%",
        marginTop:"8%",
        textAlign:"center",
 
    },
});

export default styles;