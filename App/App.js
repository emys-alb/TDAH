import React, { useState } from 'react';

//Screens
import inicio from './telas/telasIniciais/inicio';
import sobre from './telas/telasIniciais/sobre';
import tarefasScreen from './telas/tarefas';
import avaliacaoScreen from './telas/avaliacao';
import parabensScreen from './telas/parabens';
import tarefanrealizadaScreen from "./telas/tarefanaorealizada";
import motivonaorealizarScreen from "./telas/motivotarefanaorealizada";
import pedirajudaScreen from "./telas/pedirajuda";
import finalizacaoScreen from "./telas/tarefasFinalizadas";
import menuScreen from './telas/telasIniciais/menu';
import dayTaskScreen from './telas/telasIniciais/dayTasks';
import motivosScreen from './telas/motivos';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import * as Font from 'expo-font'

import AppLoading from 'expo-app-loading';

function App(props) {

  const [loaded, setLoaded] = useState(false);

  const useFonts = async() => {
    await Font.loadAsync({
      'Space': require('./assets/fonts/Space.ttf')
    })
  }

  const loadFonts = async() => {
    await useFonts();
  }

  if (!loaded) {
    return (<AppLoading 
      startAsync={loadFonts}
      onFinish={() => setLoaded(true)}
      onError={() => {console.log("Erro ao carregar fontes.")}}
    />)
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Iniciar" component={inicio} />
          <Stack.Screen name="Sobre" component={sobre} />
          <Stack.Screen name="Tarefas do Dia" component={tarefasScreen} />
          <Stack.Screen name="Avalie sua Tarefa" component={avaliacaoScreen} />
          <Stack.Screen name="Parabens" component={parabensScreen} />
          <Stack.Screen name="Tarefa nao realizada" component={tarefanrealizadaScreen} />
          <Stack.Screen name="motivo" component={motivonaorealizarScreen} />
          <Stack.Screen name="ajuda" component={pedirajudaScreen} />
          <Stack.Screen name="Missoes Finalizadas" component={finalizacaoScreen} />
          <Stack.Screen name="menu" component={menuScreen} />
          <Stack.Screen name="Lista Tarefas" component={dayTaskScreen} />
          <Stack.Screen name="motivos" component={motivosScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;