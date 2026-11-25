import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stylesHeader = StyleSheet.create({
    titleDayTasks:{
        color:"#FF7C48",
        fontSize:hp("4%"),
        alignSelf:"center",
        padding:"1%",
        maxWidth: 250,
        textAlign: 'center',
        marginLeft: 32,
        marginRight: 32,
        fontFamily: 'Space'
    },
    view: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: 16,
    }
});

export default stylesHeader;