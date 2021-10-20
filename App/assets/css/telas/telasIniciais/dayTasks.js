import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesDayTasks = StyleSheet.create({
    buttonListingTask:{
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#D93E00",
        marginTop: hp('1%'),
        marginBottom: hp('1%'),
        borderRadius: 10,
        width: wp('60%'),
        height: hp('10%'),
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

export default stylesDayTasks;