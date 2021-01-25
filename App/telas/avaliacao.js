import React, {useState} from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import styles from '../assets/css/telas';
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
                                <Text style={styles.textButtonTarefa}>Bem</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonsAvaliacaoArea}>
                            <TouchableOpacity style={styles.botaoCinzaTelaAvaliacao} onPress={() => 
                                                navigation.navigate('Parabens')
                                              }
                            >
                                <Text style={styles.textButtonTarefa}>Normal</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonsAvaliacaoArea}>
                            <TouchableOpacity style={styles.botaoVermelhoTelaAvaliacao} onPress={() => 
                                                navigation.navigate('Parabens')
                                              }
                            >
                                <Text style={styles.textButtonTarefa}>Chateado</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                  
            </View>
        </View>
    )
}

export default avaliacao;