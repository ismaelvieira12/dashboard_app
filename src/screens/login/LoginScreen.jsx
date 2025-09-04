import { View, Text } from 'react-native'
import React from 'react'
import { login } from '../login/Login'
import LinearGradient from "react-native-linear-gradient";

export default function LoginScreen() {
  return (
    <View style={login.boxLogin}>
      <Text style={login.textLogin}>LoginScreen</Text>
      <View style={login.EfeitoOne}></View>
      <View style={login.EfeitoTwo}></View>
      <View style={login.EfeitoThree}></View>
      
    </View>

  )
}