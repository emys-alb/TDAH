import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function avaliacao(){
    return(
        <View style={styles.container}>
            <Button title= "Bem" color="#FF415B" accessibilityLabel="Botão para marcar a tarefa como 'Não Realizada'"/>
            <Button title= "Normal" color="#00AA95"accessibilityLabel="Botão para marcar a tarefa como 'Realizada'"/>
            <Button title= "Ruim" color="#00AA95"accessibilityLabel="Botão para marcar a tarefa como 'Realizada'"/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });