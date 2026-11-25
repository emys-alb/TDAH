import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesPedirajuda = StyleSheet.create({
    astroAjuda:{
        width: wp('40%'),
        height:hp('21%'),
        alignSelf:"center",
        marginTop:hp('7%'),
        marginBottom:hp('7%'),
    },
    buttonHelpScreen:{
        backgroundColor:"#008575",
        width:wp('40%'),
        height:hp('15%'),
        borderRadius:10,
        justifyContent: "center",
        
    },
    buttonsAjudaArea:{
        alignSelf: "center"
    },
    circuloAstroAjuda:{
        backgroundColor:"rgba(196, 196, 196, 0.27)",
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2 ,
        marginLeft:wp('13%'),
        marginRight:wp('13%'),
        marginTop:hp('3%'),
        borderColor:"#F40202",
        borderWidth:10,
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
        width: wp('100%'),
        height: hp('100%'),
        marginTop: hp('4%'),
        fontFamily: 'Space'
    },
    textButtonTarefaN:{
        fontWeight:"200",
        color:"#FFFFFF",
        fontSize:hp('4%'),
        textAlign:"center",
        fontFamily: 'Space',
        
    },
});

export default stylesPedirajuda;