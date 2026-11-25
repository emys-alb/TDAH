import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesParabens = StyleSheet.create({
    astroAjuda:{
        width: wp('40%'),
        height:hp('21%'),
        alignSelf:"center",
        marginTop:hp('7%'),
        marginBottom:hp('7%'),
    },
    botaoVerdeTelaTarefa:{
        backgroundColor:"#008575",
        width:wp('40%'),
        height:hp('10%'),
        borderRadius:10,
        justifyContent: "center",
    },
    buttonsAjudaArea:{
        alignSelf: "center"
    },
    circuloAstroParabens:{
        backgroundColor:"#C4C4C4",
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2 ,
        marginLeft:wp('13%'),
        marginRight:wp('13%'),
        marginTop:hp('3%'),
        borderColor:"#02A9F4",
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
    titleParabens: {
        textAlign:"center",
        fontSize: hp('4%'),
        fontWeight: "bold",
        color: "#FFFFFF",
        paddingTop: hp('3%'),
        paddingBottom: hp('6%'),
        fontFamily: "Space"
    },
});

export default stylesParabens;