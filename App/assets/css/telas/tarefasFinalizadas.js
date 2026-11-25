import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesTarefasFinalizadas = StyleSheet.create({
    astroAjuda:{
        width: wp('40%'),
        height:hp('21%'),
        alignSelf:"center",
        marginTop:hp('7%'),
        marginBottom:hp('7%'),
    },
    botaoVerdeFinalizadas:{
        backgroundColor:"#008575",
        width:wp('40%'),
        height:hp('10%'),
        borderRadius:10,
        alignSelf: "center",
        justifyContent: "center",
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
    container: {
        flex: 1,
        backgroundColor: '#000',
        width: wp('100%'),
        height: hp('100%'),
        marginTop: hp('4%'),
        fontFamily: 'Space'
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
        marginTop: hp('1.4%'),
        marginBottom: hp('5%'),
    },
    textButton:{
        fontWeight:"200",
        color:"#FFFFFF",
        fontSize:hp('4.5%'),
        alignSelf:"center",
        fontFamily: "Space"
    },
    textButtonTarefa:{
        fontWeight:"200",
        color:"#FFFFFF",
        fontSize:hp('2.8%'),
        textAlign:"center",
        fontFamily: 'Space',
    },
    textSobre: {
        fontWeight:"200",
        color:"#FFFFFF",
        fontSize: hp('5%'),
        marginRight: wp('5%'),
        marginLeft: wp('5%'),
        textAlign:"center",
        justifyContent: "center",
        marginBottom: hp('7%'),
        fontFamily: 'Space'
    },
});

export default stylesTarefasFinalizadas;