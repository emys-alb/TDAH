import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesEntradadetexto = StyleSheet.create({
    areaDeTexto:{
        height:hp('40%'), 
        borderColor: 'gray', 
        borderWidth: 1,
        backgroundColor: "#FFFFFF",
        marginBottom:hp('7%'),
        fontFamily: "Space"
    }
});

export default stylesEntradadetexto;