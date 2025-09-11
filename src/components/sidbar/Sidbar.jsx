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
        justifyContent: "space-around",
        flexDirection:"row",
        alignItems:"center",
        backgroundColor: "#323131",
        padding: 5,
        gap: 10,
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 90

    },
    burguer: {
        width : 60,
        height: 50,
        backgroundColor: "#413f3f",
        borderRadius: 10
    }
});
