import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { login } from '../login/Login'
import { BlurView } from 'expo-blur';
import { styles } from '../welcome/welcome';


export default function LoginScreen() {
  return (
  <View style={login.boxLogin}>
    {/* Efeitos de fundo */}
    <View style={login.EfeitoOne}></View>
    <View style={login.EfeitoTwo}></View>
    <View style={login.EfeitoThree}></View>
    <View style={login.EfeitoFor}></View>
    <View style={login.EfeitoFive}></View>

    <View style={styles.boxFormLogin}>
      <Text>Teste</Text>
      <Image style={login.imgEl} source={require("../../../assets/logo.png")} />
    </View>

    {/* Botão */}
    <TouchableOpacity style={login.buttonLogin}>
      <Text style={login.textButtonLogin}>Login</Text>
    </TouchableOpacity>
  </View>


  )
}