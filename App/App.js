import React from 'react';

//Screens
import inicio from './telas/telasIniciais/inicio';
import sobre from './telas/telasIniciais/sobre';
import tarefasScreen from './telas/tarefas';
import avaliacaoScreen from './telas/avaliacao';
import parabensScreen from './telas/Parabens';
import tarefanrealizadaScreen from "./telas/tarefanaorealizada";
import motivonaorealizarScreen from "./telas/motivotarefanaorealizada";
import pedirajudaScreen from "./telas/pedirajuda";
import finalizacaoScreen from "./telas/tarefasFinalizadas";
import jogoScreen from './telas/jogo/tictactoe';
import menuScreen from './telas/telasIniciais/menu';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function App(props) {
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
          <Stack.Screen name="Jogo da Velha" component={jogoScreen} />
          <Stack.Screen name="menu" component={menuScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;