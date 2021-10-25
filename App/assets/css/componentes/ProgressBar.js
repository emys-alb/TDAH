import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesProgressBar = StyleSheet.create({
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
    }
});

export default stylesProgressBar;