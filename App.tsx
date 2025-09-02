import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/components/home/Home';
import { WelcomeScreen } from './src/screens/welcome/WelcomeScreen'; 
import LoginScreen from './src/screens/login/LoginScreen';
import SingUpScreen from './src/screens/singUp/SingUpScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
        <Stack.Screen name="WelcomeScreen" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SingUpScreen" options={{headerShown: false}} component={SingUpScreen} />
      </Stack.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}
