import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';  
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider} from './Context/BlogContext';
import IndexScreen from './Screen/IndexScreen';
import ShowScreen from './Screen/ShowScreen';
import CreateScreen from './Screen/CreateScreen'
import EditScreen from './Screen/EditScreen'
import { StyleSheet, Text, View } from 'react-native';

const Stack= createStackNavigator();  
const App= ()=>{
  return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name ="Index"
     component={IndexScreen}
    />
    <Stack.Screen name ="Show" component={ShowScreen}/>
    <Stack.Screen name ="Create" component={CreateScreen}/>
    <Stack.Screen name ="Edit" component={EditScreen}/>
    </Stack.Navigator>
    </NavigationContainer>

  )
};
 //J'ai passé le fichier App.js comme children à mon composant BlogProvider..
export default ()=>{
  return (
    <Provider>
    <App/>
    </Provider>
  )
}
