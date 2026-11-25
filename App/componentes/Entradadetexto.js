import React from 'react';
import { TextInput } from 'react-native';
import stylesEntradadetexto from '../assets/css/componentes/Entradadetexto';

const Entradadetexto = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput style={stylesEntradadetexto.areaDeTexto}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

export default Entradadetexto;