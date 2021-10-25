import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesTarefa = StyleSheet.create({
    clock:{
        width: wp('7%'),
        height:hp('3.5%'),
        marginTop:hp("3%"),
        marginLeft:wp('1%'),
    },
    taskImage:{
        width:wp("35%"),
        height:hp("18%"),
        alignSelf:"center",
        marginTop:hp("1%"),
    },
    taskTime:{
        color: "#FFFFFF",
        fontSize:hp("3%"),
        marginLeft:wp("10%"),
        marginTop: hp("-3.5%"),
        marginBottom:hp("-1%"),
    },
    textContainerTarefa: {
        padding: 8,
        backgroundColor: "#6169E2",
        borderRadius: 26,
        alignSelf: "center",
        width: wp('90%'),
        height: hp('60%'),
        paddingTop: hp('3%'),
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
        paddingBottom: hp('3%'),
        fontFamily: 'Space'
    },
    textTarefa: {
        color: "#FFF",
        fontSize: hp('3%'),
        marginTop:hp('2%'),
        fontFamily: 'Space'
    },
    timeContainer:{
        backgroundColor:"#D3D3D3",
        marginLeft:wp("50%"),
        borderRadius:10,
        opacity: 0.8,
    },
});

export default stylesTarefa;