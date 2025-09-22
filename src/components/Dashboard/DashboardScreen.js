import {  Text, View } from 'react-native'
import { Bar, CartesianChart } from "victory-native"
import React from 'react'
import { Dash } from './Dashboard'

const data = Array.from({ length: 6 }, (_, index) => ({
    // Starting at 1 for January
    month: index + 1,
    // Randomizing the listen count between 100 and 50
    listenCount: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
}))

export const DashboardScreen = () => {
  return (
    <View style={Dash.container}>
      <Text style={Dash.text}>DashboardScreen</Text>

      <CartesianChart
        data={data}
        /**
         * 👇 the xKey should map to the property on data of you want on the x-axis
         */
        xKey="month"
        /**
         * 👇 the yKey is an array of strings that map to the data you want
         * on the y-axis. In this case we only want the listenCount, but you could
         * add additional if you wanted to show multiple song listen counts.
         */
        yKeys={["listenCount"]}>
        {({ points, chartBounds }) => (
          <Bar
            chartBounds={chartBounds}  // 👈 chartBounds is needed to know how to draw the bars
            points={points.listenCount} // 👈 points is an object with a property for each yKey
          />
        )}
      </CartesianChart>
    </View>
  )
}