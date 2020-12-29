import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

const Avaliacao = () => {
    return(
        <View style={styles.container}>
            <Button title= "Bem" color="#00AA95" accessibilityLabel="Botão para dizer se está se sentindo 'Bem'"/>
            <Button title= "Normal" color="#545C60"accessibilityLabel="Botão para dizer se está se sentindo 'Normal'"/>
            <Button title= "Chateado" color="#FF415B"accessibilityLabel="Botão para dizer se está se sentindo 'Chateado'"/>
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

export default Avaliacao;