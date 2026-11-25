import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesTarefas = StyleSheet.create({
    botaoVerdeTelaTarefa:{
        backgroundColor:"#008575",
        width:wp('40%'),
        height:hp('10%'),
        borderRadius:10,
        justifyContent: "center",
    },
    botaoVermelhoTelaTarefa:{
        backgroundColor:"#D93E00",
        width:wp('40%'),
        height:hp('10%'),
        borderRadius:10,
        justifyContent: "center",
    },
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
        fontFamily: 'Space'
    },
    textButtonTarefa:{
        fontWeight:"200",
        color:"#FFFFFF",
        fontSize:hp('2.8%'),
        textAlign:"center",
        fontFamily: 'Space',
    },
});

export default stylesTarefas;