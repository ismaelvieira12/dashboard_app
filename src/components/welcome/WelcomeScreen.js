import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React from 'react';
import { styles } from '../Welcome/Welcome';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
export const WelcomeScreen = () => {

  // Chamando a fonte externa
  const [fontsLoaded] = useFonts({
   Paprika : require("../../fonts/Paprika-Regular.ttf"),
  });

  if (!fontsLoaded) {
     return null
  }

  return (
    <ImageBackground
      source={require('../../../assets/fundo-bitwav.png')}
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
          >
            <Text style={styles.textBtn}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style='light'/>
      </View>
    </ImageBackground>
  );
};