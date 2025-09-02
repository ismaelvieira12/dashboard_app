import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { styles } from '../welcome/WelcomeScreen';
import { useNavigation } from '@react-navigation/native';
export  const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem VIndo ao Finance!</Text>
      <Image  source={require('../../assets/Imagem_inicio.jpg')} style={styles.imagemInicio} />

      <View style={{width: '100%', alignItems: 'center'}}>
        <TouchableOpacity style={styles.buttonSingUp} onPress={() => navigation.navigate('SingUpScreen')}>
          <Text style={styles.textBtn}>Sing Up</Text>
        </TouchableOpacity>

        <View>
          <Text style={{color: '#dbd9d9ff', marginTop: 20}}>Já possui uma conta? 
            <Text style={{fontWeight: 'bold', color: "#00bfffdc"}} onPress={() => navigation.navigate('LoginScreen')}>Log In</Text>
          </Text>
        </View>
      </View>
    </View>
  )
}
