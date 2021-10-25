import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesMenu = StyleSheet.create({
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
    menuOption:{
        alignSelf: "flex-start",
        width: wp('80%'),
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
        fontFamily: "Space"
        
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
        fontFamily: "Space"
    },
    voltar: {
        width: wp('14%'),
        height: hp('6%'),
        marginTop: hp('2%'),
        marginLeft: wp('3%'),
    },
});

export default stylesMenu;