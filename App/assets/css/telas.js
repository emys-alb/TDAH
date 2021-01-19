import { StyleSheet, Dimensions } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    astroAjuda:{
        width: wp('40%'),
        height:hp('21%'),
        alignSelf:"center",
        marginTop:hp('7%'),
        marginBottom:hp('7%'),
    },

    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: hp('3%'),
        paddingRight: wp('1%'),
    },
    
    buttonsAjudaArea:{
        alignSelf: "center"
    },

    buttonsAvaliacaoArea:{
        marginBottom:hp('2%'),
        alignSelf:"center",
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
    
    circuloAstroAjuda:{
        backgroundColor:"rgba(196, 196, 196, 0.27)",
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2 ,
        marginLeft:wp('13%'),
        marginRight:wp('13%'),
        marginTop:hp('3%'),
        borderColor:"#F40202",
        borderWidth:10,
    },
    
    container: {
        flex: 1,
        backgroundColor: '#000',
        width: wp('100%'),
        height: hp('100%'),
        marginTop: hp('4%'),
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

    duvida: {
        height: hp('5%'),
        width: wp('10%'),
        marginTop: hp('2%'),
        marginLeft: wp('2%'),
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
    botaoVerdeFinalizadas:{
        backgroundColor:"#00AA95",
        width:wp('40%'),
        height:hp('10%'),
        borderRadius:10,
        alignSelf: "center",
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

    planetaTerra: {
        width: wp('25.5%'),
        height: hp('13%'),
        alignSelf: "flex-end",
    },

    planeta: {
        width: wp('25.5%'),
        height: hp('13%'),
        alignSelf: "flex-start",
    },
    ship:{
        width: wp('25.5%'),
        height: hp('13%'),
        alignSelf: "center",
        marginTop:hp("2%"),
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

    textSobre: {
        fontWeight:"800",
        color:"#FFFFFF",
        fontSize: hp('5%'),
        marginTop:hp('5%'),
        marginRight: wp('5%'),
        marginLeft: wp('5%'),
        textAlign:"center",
        justifyContent: "center",
        marginBottom: hp('7%')
    },

    voltar: {
        width: wp('14%'),
        height: hp('6%'),
        marginTop: hp('2%'),
        marginLeft: wp('3%'),
    },
    textContainerMenu: {
        padding: 8,
        backgroundColor: "#FF7C48",
        borderRadius: 26,
        width: wp('90%'),
        height: hp('75%'),
        paddingTop: hp('3%'),
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
        paddingBottom: hp('3%'),
        marginLeft:wp("5%"),
        marginTop:hp("5%"),
    },
    menuText:{
        fontWeight:"400",
        fontSize:hp("5%"),
        color:"#000000",
        textAlign:"center",
        borderBottomWidth:2,
        borderBottomColor:"#000000",
        padding:"2%",
        marginTop:hp("1%"),
    }
});

export default styles;