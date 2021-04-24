import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import  Start  from './components/Start'
import  Zarejestruj  from './components/Zarejestruj'
import  Edycja  from './components/Edycja'
import  Wyszukaj  from './components/Wyszukaj'
import  WyszukajAll  from './components/WyszukajAll'
import  Usun  from './components/Usun'


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Start} options={
          {  
            title: 'Menu główne', 
            headerTintColor: '#ffffff', 
            headerStyle: {
              backgroundColor: '#884444',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center'
            },
            }}/>
        <Stack.Screen name="Zarejestruj" component={Zarejestruj} options={{  title: 'Zarejestruj', headerTintColor: '#1791e8' }} />
        <Stack.Screen name="Edycja" component={Edycja} options={{ title: 'Edycja', headerTintColor: '#518226' }}/>
        <Stack.Screen name="Wyszukaj" component={Wyszukaj} options={{ title: 'Wyszukaj', headerTintColor: '#e09d00'}}/>
        <Stack.Screen name="WyszukajAll" component={WyszukajAll} options={{title: 'Wyszukaj wszystko', headerTintColor: '#ffffff', headerStyle: { backgroundColor: '#1a1a1a'}, headerTitleStyle: {alignSelf: 'center', right:30}}}/>
        <Stack.Screen name="Usun" component={Usun} options={{ title: 'Usuń', headerTintColor: '#e09d00'}}/>
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


