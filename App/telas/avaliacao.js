import React, {useState} from 'react';
import { View, TouchableOpacity, Text,Image} from 'react-native';
import styles from '../assets/css/telas';
import stylesComponentes from '../assets/css/componentes';
import Avaliacao from '../componentes/Avaliacao';
import BarraDeProgresso from '../componentes/ProgressBar';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions/counter';
const avaliacao = ({navigation}) => {
    const [value, setValue] = useState(0);
    const counter = useSelector(store => store.counter);
    return(
        <View style={styles.container}>
             <View style={{alignItems: "center"}}>
                    <View style={styles.buttonsContainerArea}>
                    <Avaliacao title = "Como você se sentiu realizando essa atividade?"/>
                        <View style={styles.buttonsAvaliacaoArea}>
                            <TouchableOpacity style={styles.botaoVerdeTelaAvaliacao} onPress={() =>
                                                navigation.navigate('Parabens')
                           }>
                            <Image resizeMode="contain"  style={stylesComponentes.taskImage} source={require('../assets/img/happy-astronaut.png')} />
                                <Text style={styles.textButtonTarefa}>Bem</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonsAvaliacaoArea}>
                            <TouchableOpacity style={styles.botaoCinzaTelaAvaliacao} onPress={() => 
                                                navigation.navigate('Parabens')
                                              }
                            >
                                <Image resizeMode="contain"  style={stylesComponentes.taskImage} source={require('../assets/img/normal-astronaut.png')} />
                                <Text style={styles.textButtonTarefa}>Normal</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonsAvaliacaoArea}>
                            <TouchableOpacity style={styles.botaoVermelhoTelaAvaliacao} onPress={() => 
                                                navigation.navigate('Parabens')
                                              }
                            >
                            <Image resizeMode="contain"  style={stylesComponentes.taskImage} source={require('../assets/img/sad-astronaut.png')} />
                                <Text style={styles.textButtonTarefa}>Chateado</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                  
            </View>
        </View>
    )
}

export default avaliacao;