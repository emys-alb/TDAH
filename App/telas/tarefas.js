import React, { useState } from 'react';
import { View, TouchableOpacity, Text} from 'react-native';

import styles from '../assets/css/telas';
import Tarefa from '../componentes/Tarefa';
import ProgressBar from '../componentes/ProgressBar';

const Tarefas = ({ navigation }) => {
  const [progresso, setProgresso] = useState(10);

  return (
    
    <View style={styles.container}>
      <View>
        <ProgressBar progresso={progresso}/>
      </View>

      <View>
        <View style={{alignItems: "center"}}>
          <Tarefa title="Escovar os dentes" text="O mundo precisa ser salvo do exercito de cáries. Rápido, escove os dentes e não deixe que eles ganhem."/>
        </View>

        <View style={styles.buttons}>
                     <TouchableOpacity style={styles.botaoVermelhoTelaTarefa} onPress={() => navigation.navigate('Tarefa nao realizada')}>
                        <Text style={styles.textButtonTarefa}>Não Realizada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoVerdeTelaTarefa} onPress={() => {
                     setProgresso(progresso + 10); navigation.navigate('Avalie sua Tarefa')}}>
                        <Text style={styles.textButtonTarefa}>Realizada</Text>
                    </TouchableOpacity>
        </View>
      </View>
    
    </View>
  );
}

export default Tarefas