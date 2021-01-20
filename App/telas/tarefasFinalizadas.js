import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from '../assets/css/telas';

const tarefasFinalizadas = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.circuloAstroParabens}>
                <Image style={styles.astroAjuda} source={require('../assets/img/astronaut-pescando.png')} />
            </View>
            <View style={styles.icones}>
                <View>
                    <Image style={styles.icone} source={require('../assets/img/rank.png')} />
                    <Text style={styles.textButton}>Nível XXXX</Text>
                </View>
                <View>
                    <Image style={styles.icone} source={require('../assets/img/check.png')} />
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