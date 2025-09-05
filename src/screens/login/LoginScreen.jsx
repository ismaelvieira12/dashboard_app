import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { login } from '../login/Login'
import LinearGradient from "react-native-linear-gradient";

export default function LoginScreen() {
  return (
    <View style={login.boxLogin}>
          <Image
            style={login.imgEl}
            source ={require("../../../assets/logo.png")}
          />
      <Text style={login.textLogin}>Fazer Login</Text>
      <View style={login.EfeitoOne}></View>
      <View style={login.EfeitoTwo}></View>
      <View style={login.EfeitoThree}></View>
      <View style={login.EfeitoFor}></View>
      <View style={login.EfeitoFive}></View>

      <View style={login.form}>
       
      </View>
      <TouchableOpacity style={login.buttonLogin}>
        <Text style={login.textButtonLogin}>Login</Text>
      </TouchableOpacity>
      
    </View>

  )
}