import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from '../assets/css/telas';
import * as actions from '../redux/actions/counter';
//Redux
import { useDispatch, useSelector } from 'react-redux';

const tarefasFinalizadas = ({ navigation }) => {
const counter = useSelector(store => store.counter);
const dispatch = useDispatch();
let nivel = "Ouro";
if(counter < 9 && counter > 3){
    nivel = "Prata";
}else if(counter < 3){
    nivel = "Bronze";
}
    return (
        <View style={styles.container}>
            <View style={styles.circuloAstroParabens}>
                <Image style={styles.astroAjuda} source={require('../assets/img/astronaut-pescando.png')} />
            </View>
            <View style={styles.icones}>
                <View>
                    <Image style={styles.icone} source={require('../assets/img/medalha.png')} />
                    <Text style={styles.textButton}>
                        Nível {nivel}</Text>
                </View>
                <View>
                    <Image style={styles.icone} source={require('../assets/img/completed-task.png')} />
                    <Text style={styles.textButton}>10/10</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.botaoVerdeFinalizadas} onPress={() => navigation.navigate('Iniciar')}>
                <Text style={styles.textButtonTarefa}>Curtir Games</Text>
            </TouchableOpacity>
        </View>
    )
}

export default tarefasFinalizadas;