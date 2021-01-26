import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesComponentes = StyleSheet.create({
    titleTarefa: {
        fontWeight: "700",
        fontSize: hp('4.5%'),
        color: "#FF7C48",
        lineHeight: hp('5%'),
        paddingBottom: hp('2%'),
        paddingTop: hp('3%'),
        justifyContent: "center"
    },

    textContainerTarefa: {
        padding: 8,
        backgroundColor: "#6E76E4",
        borderRadius: 26,
        alignSelf: "center",
        width: wp('90%'),
        height: hp('60%'),
        paddingTop: hp('3%'),
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
        paddingBottom: hp('3%'),
    },

    textTarefa: {
        color: "#FFF",
        fontSize: hp('3%'),
        marginTop:hp('2%'),
    },

    titleAvaliacao: {
        textAlign:"center",
        fontWeight: "700",
        fontSize: hp('4%'),
        color: "#FFFFFF",
        paddingBottom: 30,
        paddingTop: 20,
        marginLeft: wp('2.5%'),
        marginRight: wp('2.5%'),
    },
    
    titleInicial: {
        textAlign:"center",
        fontWeight: "bold",
        fontSize: hp('7%'),
        color: "#FFFFFF",
    },

    progressBarContainer: {
        backgroundColor: "#FF7C48",
        flexDirection: "row",
        justifyContent: "center",
        width: wp('100%'),
        padding: hp('2%'),
    },

    progressBar: {
        height: hp('3%'),
        width: wp('80%'),
        backgroundColor: '#C4C4C4',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
    },

    areaDeTexto:{
        height:hp('40%'), 
        borderColor: 'gray', 
        borderWidth: 1,
        backgroundColor: "#FFFFFF",
        marginBottom:hp('7%'),
    },

    titleParabens: {
        textAlign:"center",
        fontSize: hp('4%'),
        fontWeight: "bold",
        color: "#FFFFFF",
        paddingTop: hp('3%'),
        paddingBottom: hp('6%'),
    },
    iconePergunta: {
        alignSelf: "flex-start",
        backgroundColor: "#000000",
        width: wp('10%'),
        height: hp('8%'),
    },
    botaoLaranja: {
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#FF7C48",
        marginTop: hp('2%'),
        borderRadius: 10,
        width: wp('40%'),
        height: hp('13%'),
    },
    taskTime:{
        color: "#FFFFFF",
        fontSize:hp("3%"),
        marginLeft:wp("10%"),
        marginTop: hp("-3.5%"),
        marginBottom:hp("-1%"),
    },
    timeContainer:{
        backgroundColor:"#D3D3D3",
        marginLeft:wp("50%"),
        borderRadius:10,
        opacity: 0.8,
    },
    clock:{
        width: wp('7%'),
        height:hp('3.5%'),
        marginTop:hp("3%"),
        marginLeft:wp('1%'),
    },
    menuOption:{
        alignSelf: "flex-start",
        width: wp('80%'),
    },
    taskImage:{
        width:wp("35%"),
        height:hp("18%"),
        alignSelf:"center",
        marginTop:hp("1%"),
    },
    textContainerTaskListing:{
        backgroundColor: "#6E76E4",
        borderRadius: 5,
        width: wp('90%'),
        height: hp('10%'),
        marginTop:hp("1%"),
        alignSelf:"center",
    },
    taskImageListing:{
        width:wp("15%"),
        height:hp("7%"),
        alignSelf:"flex-end",
        marginTop:hp("-10.5%"),
        marginRight:wp("2%"),
    },
    titleTaskListing: {
        fontWeight: "500",
        fontSize: hp('3.6%'),
        color: "#FF7C48",
        justifyContent:"flex-start",
    },
    taskTimeListing:{
        color: "#FFFFFF",
        fontSize:hp("3%"),
        alignSelf:"flex-start",
        marginLeft:wp("3%"),
    },
    buttonListingTask:{
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#FF7C48",
        marginTop: hp('1%'),
        marginBottom: hp('1%'),
        borderRadius: 10,
        width: wp('60%'),
        height: hp('10%'),
    }
});

export default stylesComponentes;