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
    </View>
  )
}