import React, { useState } from 'react';
import { View, TouchableOpacity, Text} from 'react-native';

import styles from '../assets/css/telas';
import Tarefa from '../componentes/Tarefa';
import BarraDeProgresso from '../componentes/ProgressBar';

const Tarefas = ({ navigation }) => {
  const [value, setValue] = useState(0);

  const updatePercent= (newValue) => {
    setValue((value + newValue));
  };

  return (

    <View style={styles.container}>
      <BarraDeProgresso value={value} />
      <View>
        <View style={{alignItems: "center"}}>
          <Tarefa title="Escovar os dentes" text="O mundo precisa ser salvo do exercito de cáries. Rápido, escove os dentes e não deixe que eles ganhem."/>
        </View>

        <View style={styles.buttons}>
                     <TouchableOpacity style={styles.botaoVermelhoTelaTarefa} onPress={() => navigation.navigate('Tarefa nao realizada')}>
                        <Text style={styles.textButtonTarefa}>Não Realizada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoVerdeTelaTarefa} onPress={() => {updatePercent(0.3); navigation.navigate('Avalie sua Tarefa') }}>
                        <Text style={styles.textButtonTarefa}>Realizada</Text>
                    </TouchableOpacity>
        </View>
      </View>
    
    </View>
  );
}

export default Tarefas