import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import stylesTarefasFinalizadas from '../assets/css/telas/tarefasFinalizadas';

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
        <View style={stylesTarefasFinalizadas.container}>
            <View style={stylesTarefasFinalizadas.circuloAstroParabens}>
                <Image resizeMode="contain" style={stylesTarefasFinalizadas.astroAjuda} source={require('../assets/img/astronaut-pescando.png')} />
            </View>
            <Text style={stylesTarefasFinalizadas.textSobre}>Parabéns por ter concluído todas as tarefas</Text>
            <View style={stylesTarefasFinalizadas.icones}>
                <View>
                    <Image resizeMode="contain" style={stylesTarefasFinalizadas.icone} source={require('../assets/img/medalha.png')} />
                    <Text style={stylesTarefasFinalizadas.textButton}>
                        Nível {nivel}</Text>
                </View>
                <View>
                    <Image resizeMode="contain" style={stylesTarefasFinalizadas.icone} source={require('../assets/img/completed-task.png')} />
                    <Text style={stylesTarefasFinalizadas.textButton}>9/{counter + 1}</Text>
                </View>
            </View>
            <TouchableOpacity style={stylesTarefasFinalizadas.botaoVerdeFinalizadas} onPress={() =>{
                 navigation.navigate('Iniciar');
                 dispatch(actions.reset());
                }}>
                <Text style={stylesTarefasFinalizadas.textButtonTarefa}>Curtir Games</Text>
            </TouchableOpacity>
        </View>
    )
}

export default tarefasFinalizadas;