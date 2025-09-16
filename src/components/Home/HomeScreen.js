import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CartesianChart } from "victory-native";

const DATA = Array.from({ length: 31 }, (_, i) => ({
  day: i,
  highTmp: 40 + 30 * Math.random(),
}));

export const  HomeScreen = () => {
  return (
    <View>
      <View style={{width: "10%", height: 350}}>
         <CartesianChart data={DATA} xKey="day" yKeys={["highTmp"]} />
      </View>
    </View>
  )
}
