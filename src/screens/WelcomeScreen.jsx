import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
export  const WelcomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>WelcomeScreen</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "flex-start", // Alinha no topo
    padding: 20,
  },
  text: {
    color: "#fff",  // Deixa o texto visível no fundo preto
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 70,
  },
});