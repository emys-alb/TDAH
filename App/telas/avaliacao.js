import React, {useState} from 'react';
import { View, TouchableOpacity, Text,Image} from 'react-native';
import stylesAvaliacao from '../assets/css/telas/avaliacao';
import Avaliacao from '../componentes/Avaliacao';
import BarraDeProgresso from '../componentes/ProgressBar';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions/counter';
const avaliacao = ({navigation}) => {
    const [value, setValue] = useState(0);
    const counter = useSelector(store => store.counter);
    return(
        <View style={stylesAvaliacao.container}>
             <View style={{alignItems: "center"}}>
                    <View style={stylesAvaliacao.buttonsContainerArea}>
                    <Avaliacao title = "Como você se sentiu realizando essa atividade?"/>
                        <View style={stylesAvaliacao.buttonsAvaliacaoArea}>
                            <TouchableOpacity style={stylesAvaliacao.botaoVerdeTelaAvaliacao} onPress={() =>
                                                navigation.navigate('Parabens')
                           }>
                            <Image resizeMode="contain"  style={stylesAvaliacao.taskImage} source={require('../assets/img/happy-astronaut.png')} />
                                <Text style={stylesAvaliacao.textButtonTarefa}>Bem</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={stylesAvaliacao.buttonsAvaliacaoArea}>
                            <TouchableOpacity style={stylesAvaliacao.botaoCinzaTelaAvaliacao} onPress={() => 
                                                navigation.navigate('Parabens')
                                              }
                            >
                                <Image resizeMode="contain"  style={stylesAvaliacao.taskImage} source={require('../assets/img/normal-astronaut.png')} />
                                <Text style={stylesAvaliacao.textButtonTarefa}>Normal</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={stylesAvaliacao.buttonsAvaliacaoArea}>
                            <TouchableOpacity style={stylesAvaliacao.botaoVermelhoTelaAvaliacao} onPress={() => 
                                                navigation.navigate('Parabens')
                                              }
                            >
                            <Image resizeMode="contain"  style={stylesAvaliacao.taskImage} source={require('../assets/img/sad-astronaut.png')} />
                                <Text style={stylesAvaliacao.textButtonTarefa}>Chateado</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                  
            </View>
        </View>
    )
}

export default avaliacao;