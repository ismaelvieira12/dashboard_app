import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { styles } from '../welcome/WelcomeScreen';
export  const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem VIndo ao Finance!</Text>
      <Image  source={require('../../assets/Imagem_inicio.jpg')} style={styles.imagemInicio} />

      <View style={{width: '100%', alignItems: 'center'}}>
        <TouchableOpacity style={styles.buttonSingUp}>
          <Text >Sing Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
