import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesMotivotarefanaorealizada = StyleSheet.create({
    botaoTelaMotivo:{
        backgroundColor:"#008575",
        width:wp('35%'),
        height:hp('8%'),
        alignSelf:"flex-end",
        borderRadius:10,
        justifyContent: "center",
    },
    buttonsContainerArea:{
        padding: 8,
        backgroundColor: "#6169E2",
        borderRadius: 26,
        width: wp('90%'),
        height: hp('90%'),
        paddingTop: hp('8%'),
        paddingLeft: wp('8%'),
        paddingRight: wp('8%'),
        marginTop: hp('5%'),
        fontSize: hp('15%'),
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
        width: wp('100%'),
        height: hp('100%'),
        marginTop: hp('4%'),
        fontFamily: 'Space'
    },
    textButton:{
        fontWeight:"200",
        color:"#FFFFFF",
        fontSize:hp('4.5%'),
        alignSelf:"center",
        fontFamily: "Space"
    }
});

export default stylesMotivotarefanaorealizada;