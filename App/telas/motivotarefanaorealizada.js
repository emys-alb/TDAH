import React,{useState} from 'react';

// Layout
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../assets/css/telas';
import Entradadetexto from "../componentes/Entradadetexto";
import Avaliacao from '../componentes/Avaliacao';

//Redux
import * as actions from '../redux/actions/counter';
import * as skipActions from '../redux/actions/skipCounter';
import { useDispatch,connect, useSelector  } from 'react-redux';
//const motivotarefanaorealizada = ({ navigation,incrementCounter, incrementSkipCounter }) => {
const motivotarefanaorealizada = ({ navigation }) => {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const counter = useSelector(store => store.counter);
    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <View style={styles.buttonsContainerArea}>
                    <Avaliacao title="Por que você não concluiu a tarefa?" />
                    <Entradadetexto />
                    <TouchableOpacity
                        style={styles.botaoTelaMotivo}
                        onPress={() => {
                           // incrementCounter();
                            //incrementSkipCounter();
                           // dispatch(skipActions.incrementSkip());
                           if (counter === 9) {
                            setValue(0)
                            navigation.navigate('Missoes Finalizadas');
                          }else{
                            dispatch(actions.increment(),);
                            navigation.navigate('Tarefas do Dia');
                          }
                        }}>
                        <Text style={styles.textButton}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

//const mapDispatchToProps = dispatch =>({
 //   incrementCounter:() => dispatch({
  //      type: "INCREMENT_COUNTER"
   // }),
    //incrementSkipCounter:() => dispatch({
     //   type: "INCREMENT_SKIP"
    //}),
//})

//export default connect(null,mapDispatchToProps)(motivotarefanaorealizada);
export default motivotarefanaorealizada;