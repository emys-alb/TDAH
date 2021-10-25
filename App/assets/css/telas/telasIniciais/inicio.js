import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesInicio = StyleSheet.create({
    botaoLaranja: {
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#D93E00",
        marginTop: hp('2%'),
        borderRadius: 10,
        width: wp('40%'),
        height: hp('13%'),
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
        width: wp('100%'),
        height: hp('100%'),
        marginTop: hp('4%'),
        fontFamily: 'Space'
    },
    duvida: {
        height: hp('5%'),
        width: wp('10%'),
        marginTop: hp('2%'),
        marginLeft: wp('2%'),
    },
    iconePergunta: {
        alignSelf: "flex-start",
        backgroundColor: "#000000",
        width: wp('10%'),
        height: hp('8%'),
    },
    icones: {
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: hp('1.4%'),
        marginBottom: hp('5%'),
    },
    planeta: {
        width: wp('25.5%'),
        height: hp('13%'),
        alignSelf: "flex-start",
    },
    planetaTerra: {
        width: wp('25.5%'),
        height: hp('13%'),
        alignSelf: "flex-end",
    },
    ship:{
        width: wp('25.5%'),
        height: hp('13%'),
        alignSelf: "center",
        marginTop:hp("2%"),
    },
    textButtonTarefaN:{
        fontWeight:"200",
        color:"#FFFFFF",
        fontSize:hp('4%'),
        textAlign:"center",
        fontFamily: 'Space',
        
    },
    titleInicial: {
        textAlign:"center",
        fontWeight: "bold",
        fontSize: hp('7%'),
        color: "#FFFFFF",
        fontFamily: "Space"
    },
});

export default stylesInicio;