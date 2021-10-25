import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesTarefanaorealizada = StyleSheet.create({
    buttonGreenTaskNotDone:{
        backgroundColor:"#008575",
        width:wp('40%'),
        height:hp('15%'),
        borderRadius:10,
        justifyContent: "center",
        marginRight:wp('42%'),
    },
    buttonGreyTaskNotDone:{
        backgroundColor:"#545C60",
        width:wp('40%'),
        height:hp('15%'),
        borderRadius:10,
        justifyContent: "center",
        marginLeft:wp('43%'),
        marginTop: hp('-17%'),
    },
    buttonRedTaskNotDone:{
        backgroundColor:"#D93E00",
        width:wp('40%'),
        height:hp('15%'),
        borderRadius:10,
        justifyContent: "center",
    },
    buttonsAvaliacaoArea:{
        marginBottom:hp('2%'),
        alignSelf:"center",
    },
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
    container: {
        flex: 1,
        backgroundColor: '#000',
        width: wp('100%'),
        height: hp('100%'),
        marginTop: hp('4%'),
        fontFamily: 'Space'
    },
    textButtonTarefa:{
        fontWeight:"200",
        color:"#FFFFFF",
        fontSize:hp('2.8%'),
        textAlign:"center",
        fontFamily: 'Space',
    },
    textButtonTarefaN:{
        fontWeight:"200",
        color:"#FFFFFF",
        fontSize:hp('4%'),
        textAlign:"center",
        fontFamily: 'Space',
        
    }
});

export default stylesTarefanaorealizada;