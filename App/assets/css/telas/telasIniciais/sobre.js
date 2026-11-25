import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesSobre = StyleSheet.create({
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
    container: {
        flex: 1,
        backgroundColor: '#000',
        width: wp('100%'),
        height: hp('100%'),
        marginTop: hp('4%'),
        fontFamily: 'Space'
    },
    iconePergunta: {
        alignSelf: "flex-start",
        backgroundColor: "#000000",
        width: wp('10%'),
        height: hp('8%'),
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
    voltar: {
        width: wp('14%'),
        height: hp('6%'),
        marginTop: hp('2%'),
        marginLeft: wp('3%'),
    },
});

export default stylesSobre;