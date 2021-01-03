import React from 'react';
import { View , Button} from 'react-native';

import styles from '../css/telas';
import Tarefa from '../componentes/Tarefa';
import ProgressBar from '../componentes/ProgressBar';

const Tarefas = ({ navigation }) => {
  return (
    
    <View style={styles.container}>
      <ProgressBar />
      <View>
        <View style={{alignItems: "center"}}>
          <Tarefa title="Escovar os dentes" text="O mundo precisa ser salvo do exercito de cáries. Rápido, escove os dentes e não deixe que eles ganhem."/>
        </View>

        <View style={styles.buttons}>
          <Button title= "Não realizada" color="#FF415B" accessibilityLabel="Botão para marcar a tarefa como 'Não Realizada'"  onPress={() => navigation.navigate('Tarefa nao realizada')}/>
          <Button title= "Realizada" color="#00AA95" accessibilityLabel="Botão para marcar a tarefa como 'Realizada'" 
                  onPress={() => navigation.navigate('Avalie sua Tarefa')}/>
        </View>
      </View>
    
    </View>
  );
}

export default Tarefas