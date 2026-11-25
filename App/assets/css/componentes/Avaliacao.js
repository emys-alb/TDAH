import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesAvaliacao = StyleSheet.create({
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
    titleAvaliacao: {
        textAlign:"center",
        fontWeight: "700",
        fontFamily: 'Space',
        fontSize: hp('4%'),
        color: "#FFFFFF",
        paddingBottom: 30,
        paddingTop: 20,
        marginLeft: wp('2.5%'),
        marginRight: wp('2.5%'),
    }
});

export default stylesAvaliacao;