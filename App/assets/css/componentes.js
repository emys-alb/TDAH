import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesComponentes = StyleSheet.create({
    titleTarefa: {
        fontWeight: "700",
        fontSize: hp('5%'),
        color: "#FF7C48",
        lineHeight: 28,
        paddingBottom: hp('2%'),
        paddingTop: hp('3%'),
        justifyContent: "center"
    },

    textContainerTarefa: {
        padding: 8,
        backgroundColor: "#6E76E4",
        borderRadius: 26,
        width: wp('90%'),
        height: hp('50%'),
        paddingTop: hp('10%'),
        paddingLeft: wp('10%'),
        paddingRight: wp('10%'),
        paddingBottom: hp('10%'),
    },

    textTarefa: {
        color: "#FFF",
        fontSize: hp('3%'),
    },

    titleAvaliacao: {
        textAlign:"center",
        fontWeight: "700",
        fontSize: hp('4.2%'),
        color: "#FFFFFF",
        paddingBottom: 30,
        paddingTop: 20,
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
        backgroundColor: "#000",
        width: wp('7%'),
        height: hp('7%'),
    },
});

export default stylesComponentes;