import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Modal, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainPage from './components/MainPage';
import Home from './components/Home';
import Profile from './components/Profile';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      {/* <Home /> */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="MainPage"
            component={MainPage}
          />
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen 
            name="Profile" 
            component={Profile} 
            options={{title: 'Profile'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

