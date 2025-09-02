import { View, Text } from 'react-native'
import React from 'react'
import { login } from '../login/Login'
import LinearGradient from "react-native-linear-gradient";

export default function LoginScreen() {
  return (
    <View style={login.boxLogin}>
      <Text style={login.textLogin}>LoginScreen</Text>
      npm install react-native-linear-gradient
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}  
      >
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Login with Gradient</Text>
      </LinearGradient>
    </View>

  )
}