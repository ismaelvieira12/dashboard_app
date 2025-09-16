import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { graficos } from '../Home/Home';
import { CartesianChart, Line } from "victory-native";

const DATA = [
  {day: new Date("2025-09-10")}
]

export const  HomeScreen = () => {
  return (
    <View style={graficos.containerGra}>
      <View style={{width: "100%", height: 350}}>

        <CartesianChart data={DATA} xKey="day" yKeys={["highTmp"]}>
          {({ points }) => (

            <Line points={points.highTmp} color="red" strokeWidth={3} />
          )}
        </CartesianChart>

      </View>
    </View>
  )
}
