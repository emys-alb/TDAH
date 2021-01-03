import React from 'react';
import { View , Button} from 'react-native';
import styles from '../css/telas';
import ProgressBar from '../componentes/ProgressBar';
import Avaliacao from '../componentes/Avaliacao';
const avaliacao = ({navigation}) => {
    return(
        <View style={styles.container}>

                <View>
                    <ProgressBar />
                </View>

             <View style={{alignItems: "center"}}>
                    <View style={styles.buttonsContainerArea}>
                    <Avaliacao title = "Como você se sentiu realizando essa atividade?"/>
                        <View style={styles.buttonsAvaliacaoArea}>
                            <Button title= "Bem" color="#00AA95" accessibilityLabel="Botão para dizer se está se sentindo 'Bem'"  onPress={() => navigation.navigate('Parabens')}/>
                        </View>
                    <View style={styles.buttonsAvaliacaoArea}>
                            <Button title= "Normal" color="#545C60"accessibilityLabel="Botão para dizer se está se sentindo 'Normal'"  onPress={() => navigation.navigate('Parabens')}/>
                        </View>
                            <View style={styles.buttonsAvaliacaoArea}>
                                    <Button title= "Chateado"  color="#FF415B" accessibilityLabel="Botão para dizer se está se sentindo 'Chateado'"  onPress={() => navigation.navigate('Parabens')}/>
                            </View>
                    </View>
                  
            </View>
        </View>
    )
}

export default avaliacao;