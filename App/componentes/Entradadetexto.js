import React from 'react';
import { TextInput } from 'react-native';
import styles from '../css/componentes'
const Entradadetexto = () => {
  const [value, onChangeText] = React.useState('Informe o motivo aqui');

  return (
    <TextInput style={styles.arearDeTexto}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

export default Entradadetexto;