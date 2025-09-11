import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from "react-native";

export const Sidbar = () => {
  return (
    <View style={ styles.boxMenu}>
      <View style={ styles.burguer}></View>
      <View style={ styles.burguer}></View>
      <View style={ styles.burguer}></View>
    </View>
  )
}

export const styles = StyleSheet.create({
    boxMenu: {
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        flexDirection:"column",
        backgroundColor: "red",
        padding: 5,
        gap: 10,
        position: "absolute",
        bottom: 0,
        width: "100%"
    },
    burguer: {
        width : 50,
        height: 5,
        backgroundColor: "#fff"
    }
});
