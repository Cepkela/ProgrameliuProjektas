import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen'
import Screen from './screens/Screen'
import NewScreen from './screens/NewScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class  App extends Component {
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={Tabs}/>
        <Stack.Screen name="NewScreen" component={NewScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

function Tabs(){
  return(
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={Screen} />
      </Tab.Navigator>
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
export default App;