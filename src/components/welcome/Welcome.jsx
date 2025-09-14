import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});