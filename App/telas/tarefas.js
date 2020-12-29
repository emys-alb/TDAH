import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View , Button} from 'react-native';
import Tarefa from '../componentes/Tarefa';

const Tarefas = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <Tarefa title="Escovar os dentes" text="Um bom astronauta sempre cuida primeiro dos dentes. Vamos escovar?"/>
      <Button title= "Não realizada" color="#FF415B" accessibilityLabel="Botão para marcar a tarefa como 'Não Realizada'"/>
      <Button title= "Realizada" color="#00AA95"accessibilityLabel="Botão para marcar a tarefa como 'Realizada'" 
              onPress={() => navigation.navigate('Avalie sua Tarefa')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Tarefas