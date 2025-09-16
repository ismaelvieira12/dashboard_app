import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { graficos } from '../Home/Home';
import { useAnimatedProps } from 'react-native-reanimated';
import { CartesianChart, Line, useChartPressState } from "victory-native";

const DATA = [
  {day: new Date("2025-09-10").getTime(), price: 500},
  {day: new Date("2025-09-11").getTime(), price: 250},
  {day: new Date("2025-09-12").getTime(), price: 600},
  {day: new Date("2025-09-13").getTime(), price: 720},
  {day: new Date("2025-09-14").getTime(), price: 430},
  {day: new Date("2025-09-15").getTime(), price: 10},
  {day: new Date("2025-09-16").getTime(), price: 980},

]

export const  HomeScreen = () => {

  // criando interação com o grafico
  const { state, isActive} = useChartPressState({x, y: { price: 0 }})

  // Criando a div de animaão para mostrar os valores na tela
  const animetedText = useAnimatedProps(() => {
    return {
      Text: `R$ ${state.y.price.value.value.toFixed(2)}`,
      defaultValue: ""
    }
  })

  // para mostrar a Data na tela
   const animetedDataText = useAnimatedProps(() => {
     const date = new Date(state.x.value.value)
    return {

      // Pegando a Data
      Text: `${date.toLocaleDateString("pt-BR")}`,
      defaultValue: ""
    }
  })

  


  return (
    <View style={graficos.containerGra}>
      <View style={{width: "100%", height: 350}}>

        <CartesianChart data={DATA} xKey="day" yKeys={["price"]}
          chartPressState={state}
        >
          {({ points }) => (

            <Line points={points.price} color="#FA4" strokeWidth={4} />
          )}
        </CartesianChart>

      </View>
    </View>
  )
}
