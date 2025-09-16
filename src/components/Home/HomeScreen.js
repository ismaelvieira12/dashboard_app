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
        <CartesianChart data={DATA} xKey="day" yKeys={["highTmp"]}>
          {/* 👇 render function exposes various data, such as points. */}
          {({ points }) => (
            // 👇 and we'll use the Line component to render a line path.
            <Line points={points.highTmp} color="red" strokeWidth={3} />
          )}
        </CartesianChart>
      </View>
    </View>
  )
}
