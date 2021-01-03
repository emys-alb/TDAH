import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import tarefasScreen from './telas/tarefas';
import avaliacaoScreen from './telas/avaliacao';
import parabensScreen from './telas/Parabens';
import tarefanrealizadaScreen from "./telas/tarefanaorealizada";

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
          <Stack.Screen name="Tarefas do Dia" component={tarefasScreen}/>
          <Stack.Screen name="Avalie sua Tarefa" component={avaliacaoScreen}/>
          <Stack.Screen name="Parabens" component={parabensScreen}/>
          <Stack.Screen name="Tarefa nao realizada" component={tarefanrealizadaScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
