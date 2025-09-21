import { StatusBar } from 'expo-status-bar';
import * as React from 'react'; // Importar React
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DashboardScreen } from './src/components/Dashboard/DashboardScreen';
// Importe suas telas
import { WelcomeScreen } from './src/components/Welcome/WelcomeScreen';
import { HomeScreen } from './src/components/Home/HomeScreen';

// Crie seu Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* 'Welcome' é o nome da rota, e 'WelcomeScreen' é o componente que ela renderiza */}
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} // Opcional: esconde o cabeçalho para esta tela
        />
        {/* 'Home' é o nome da rota, e 'HomeScreen' é o componente que ela renderiza */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Opcional: define o título do cabeçalho
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{ headerShown: false }} // Opcional: define o título do cabeçalho
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}