import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View , Button} from 'react-native';
import Tarefa from '../componentes/Tarefa';
import ProgressBar from '../componentes/ProgressBar';

const Tarefas = ({ navigation}) => {
  return (

    <View style={styles.container}>
      <ProgressBar />
      <Tarefa title="Escovar os dentes" text="Um bom astronauta sempre cuida bem dos dentes. Vamos começar?"/>
      <View style={styles.buttons}>
        <Button title= "Não realizada" color="#FF415B" accessibilityLabel="Botão para marcar a tarefa como 'Não Realizada'"/>
        <Button title= "Realizada" color="#00AA95"accessibilityLabel="Botão para marcar a tarefa como 'Realizada'" 
                onPress={() => navigation.navigate('Avalie sua Tarefa')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-around",
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});

export default Tarefas