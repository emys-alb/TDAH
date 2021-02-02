import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from '../assets/css/telas';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions/counter';

const tarefasFinalizadas = ({ navigation }) => {
    const dispatch = useDispatch();
    const [counter, skipCounter] = useSelector(store => {
        //console.log(store);
        return [store.counter,store.skipCounter];
    });
    //const skipCounter = useSelector(store => store.skipCounter);


    let nivel = "Ouro";
    if (counter < 9 && counter > 3) {
        nivel = "Prata";
    } else if (counter < 3) {
        nivel = "Bronze";
    }

    return (
        <View style={styles.container}>
            <View style={styles.circuloAstroParabens}>
                <Image resizeMode="contain" style={styles.astroAjuda} source={require('../assets/img/astronaut-pescando.png')} />
            </View>
            <Text style={styles.textSobre}>Parabéns por ter concluído todas as tarefas</Text>
            <View style={styles.icones}>
                <View>
                    <Image resizeMode="contain" style={styles.icone} source={require('../assets/img/medalha.png')} />
                    <Text style={styles.textButton}>
                        Nível {nivel}</Text>
                </View>
                <View>
                    <Image resizeMode="contain" style={styles.icone} source={require('../assets/img/completed-task.png')} />
                    <Text style={styles.textButton}>{skipCounter}/{counter + 1}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.botaoVerdeFinalizadas} onPress={() =>{
                 navigation.navigate('Iniciar');
                 dispatch(actions.reset());
                }}>
                <Text style={styles.textButtonTarefa}>Curtir Games</Text>
            </TouchableOpacity>
        </View>
    )
}

export default tarefasFinalizadas;