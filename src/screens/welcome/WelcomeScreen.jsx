import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { styles } from '../welcome/welcome';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/fundo-bitwav.png')}
      style={styles.background}
      resizeMode="cover" // Preenche a tela sem distorcer
    >
      <View style={styles.efeito}></View>
      {/* Overlay para dar contraste no texto */}
      <View style={styles.overlay}>
        <Text style={styles.text}>Bem-vindo ao Finance!</Text>

        <TouchableOpacity
          style={styles.buttonSingUp}
          onPress={() => navigation.navigate('SingUpScreen')}
        >
          <Text style={styles.textBtn}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Já possui uma conta?{' '}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            Log In
          </Text>
        </Text>
      </View>
      <StatusBar style='light'/>
    </ImageBackground>
  );
};
