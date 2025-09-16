import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { graficos } from '../Home/Home';
import { CartesianChart, Line } from "victory-native";

const DATA = [
  {day: new Date("2025-09-10").getTime(), price: 500},
  {day: new Date("2025-09-11").getTime(), price: 250},
  {day: new Date("2025-09-12").getTime(), price: 600},
  {day: new Date("2025-09-13").getTime(), price: 720},
  {day: new Date("2025-09-14").getTime(), price: 430},
  {day: new Date("2025-09-15").getTime(), price: 100},
  {day: new Date("2025-09-16").getTime(), price: 980},

]

export const  HomeScreen = () => {
  return (
    <View style={graficos.containerGra}>
      <View style={{width: "100%", height: 350}}>

        <CartesianChart data={DATA} xKey="day" yKeys={["price"]}>
          {({ points }) => (

            <Line points={points.price} color="#FA4" strokeWidth={4} />
          )}
        </CartesianChart>

      </View>
    </View>
  )
}
