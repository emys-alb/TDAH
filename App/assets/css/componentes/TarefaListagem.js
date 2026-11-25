import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesTarefaListagem = StyleSheet.create({
    clock:{
        width: wp('7%'),
        height:hp('3.5%'),
        marginTop:hp("3%"),
        marginLeft:wp('1%'),
    },
    textContainerTaskListing:{
        backgroundColor: "#6169E2",
        borderRadius: 5,
        width: wp('90%'),
        height: hp('10%'),
        marginTop:hp("1%"),
        alignSelf:"center",
        fontFamily: 'Space'
    },
    titleTaskListing: {
        fontWeight: "500",
        fontSize: hp('3.6%'),
        color: "#FF7C48",
        justifyContent:"flex-start",
        fontFamily: 'Space'
    },
    taskImageListing:{
        width:wp("15%"),
        height:hp("7%"),
        alignSelf:"flex-end",
        marginTop:hp("-10%"),
        marginRight:wp("2%"),
    },
    taskTime:{
        color: "#FFFFFF",
        fontSize:hp("3%"),
        marginLeft:wp("10%"),
        marginTop: hp("-3.5%"),
        marginBottom:hp("-1%"),
    },
    taskTimeListing:{
        color: "#FFFFFF",
        fontSize:hp("3%"),
        alignSelf:"flex-start",
        marginLeft:wp("3%"),
        fontFamily: 'Space'
    },
    timeContainer:{
        backgroundColor:"#D3D3D3",
        marginLeft:wp("50%"),
        borderRadius:10,
        opacity: 0.8,
    }
});

export default stylesTarefaListagem;