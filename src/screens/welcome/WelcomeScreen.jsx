import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React from 'react';
import { styles } from '../welcome/welcome';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import { Colors } from '../../style/Styles';
export const WelcomeScreen = () => {
  const navigation = useNavigation();

  // Chamando a fonte externa
  const [fontsLoaded] = useFonts({
   Paprika : require("../../fonts/Paprika-Regular.ttf"),
  });

  if (!fontsLoaded) {
     return null
  }

  return (
    <ImageBackground
      source={require('../../assets/fundo-bitwav.png')}
      style={styles.background}
      resizeMode="cover" // Preenche a tela sem distorcer
    >
      <View style={styles.efeito}></View>
      {/* Overlay para dar contraste no texto */}
      <View style={styles.overlay}>
        <View style={ styles.boxMarca}>
          <Image 
            style={styles.imagemInicio}
            source={require('../../../assets/imagem-inicio.png')}
          />
          <Text style={styles.text}>Bit
            <Text style={styles.textWav}>wav</Text>
          </Text>
        </View>

        <View style={styles.boxBtn}>
          <TouchableOpacity
            style={styles.buttonSingUp}
            onPress={() => navigation.navigate('SingUpScreen')}
          >
            <Text style={styles.textBtn}>Cadastrar</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Já possui uma conta?{' '}
            <Text
              style={styles.loginLink}
              onPress={() => navigation.navigate('LoginScreen')}
            >
              Login
            </Text>
          </Text>
        </View>
      </View>
      <StatusBar style='light'/>
    </ImageBackground>
  );
};
