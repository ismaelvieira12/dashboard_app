import { View, Text } from 'react-native'
import React from 'react';
import { styles } from '../welcome/WelcomeScreen';
export  const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem VIndo ao Finance!</Text>
    </View>
  )
}
