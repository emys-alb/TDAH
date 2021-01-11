import { StyleSheet, Dimensions } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: hp('3%'),
        paddingRight: wp('1%'),
    },

    container: {
        flex: 1,
        backgroundColor: '#000',
        width: wp('100%'),
        height: hp('100%'),
        marginTop: hp('4%'),
    },

    buttonsContainerArea:{
        padding: 8,
        backgroundColor: "#6E76E4",
        borderRadius: 26,
        width: wp('90%'),
        height: hp('90%'),
        paddingTop: hp('8%'),
        paddingLeft: wp('8%'),
        paddingRight: wp('8%'),
        marginTop: hp('5%'),
        fontSize: hp('15%'),
    },

    buttonsAvaliacaoArea:{
        marginBottom:hp('2%'),
        alignSelf:"center",
    },
    buttonsAjudaArea:{
        alignSelf: "center"
    },

    circuloAstroAjuda:{
        backgroundColor:"rgba(196, 196, 196, 0.27)",
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2 ,
        marginLeft:wp('13%'),
        marginRight:wp('13%'),
        marginTop:hp('3%'),
        borderColor:"#F40202",
        borderWidth:10,
    },
    
    astroAjuda:{
        width: wp('40%'),
        height:hp('21%'),
        alignSelf:"center",
        marginTop:hp('7%'),
        marginBottom:hp('7%'),
    },
    
    circuloAstroParabens:{
        backgroundColor:"#C4C4C4",
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2 ,
        marginLeft:wp('13%'),
        marginRight:wp('13%'),
        marginTop:hp('3%'),
        borderColor:"#02A9F4",
        borderWidth:10,
    },
    botaoTelaMotivo:{
        backgroundColor:"#00AA95",
        width:wp('35%'),
        height:hp('8%'),
        alignSelf:"flex-end",
        borderRadius:10,
    },
    botaoVermelhoTelaTarefa:{
        backgroundColor:"#FF415B",
        width:wp('40%'),
        height:hp('10%'),
        borderRadius:10,
    },
    botaoVerdeTelaTarefa:{
        backgroundColor:"#00AA95",
        width:wp('40%'),
        height:hp('10%'),
        borderRadius:10,
    },
    botaoVerdeTelaAvaliacao:{
        backgroundColor:"#00AA95",
        width:wp('40%'),
        height:hp('10%'),
        borderRadius:10,
    },
    botaoCinzaTelaAvaliacao:{
        backgroundColor:"#545C60",
        width:wp('40%'),
        height:hp('10%'),
        borderRadius:10,
    },
    botaoVermelhoTelaAvaliacao:{
        backgroundColor:"#FF415B",
        width:wp('40%'),
        height:hp('10%'),
        borderRadius:10,
    },
    icone: {
        width: wp('18%'), 
        height: hp('10%'),
        alignSelf: "center",
    },
    icones: {
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: hp('5%'),
        marginBottom: hp('5%'),
    },
    textButton:{
        fontWeight:"800",
        color:"#FFFFFF",
        fontSize:hp('4.5%'),
        alignSelf:"center"
    },
    textButtonTarefa:{
        fontWeight:"800",
        color:"#FFFFFF",
        fontSize:hp('2.8%'),
        marginTop:hp('3%'),
        textAlign:"center",
    },
    textButtonTarefaN:{
        fontWeight:"800",
        color:"#FFFFFF",
        fontSize:hp('2.8%'),
        marginTop:hp('1.5%'),
        textAlign:"center",
    },
    botaoVerdeFinalizadas:{
        backgroundColor:"#00AA95",
        width:wp('40%'),
        height:hp('10%'),
        borderRadius:10,
        alignSelf: "center",
    },
});

export default styles;