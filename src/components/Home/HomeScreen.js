import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { graficos } from '../Home/Home';
import Animated, { useAnimatedProps, SharedValue } from 'react-native-reanimated';
import { CartesianChart, Line, useChartPressState } from "victory-native";
import { Circle } from '@shopify/react-native-skia';


const DATA = [
  {day: new Date("2025-09-10").getTime(), price: 500},
  {day: new Date("2025-09-11").getTime(), price: 250},
  {day: new Date("2025-09-12").getTime(), price: 600},
  {day: new Date("2025-09-13").getTime(), price: 720},
  {day: new Date("2025-09-14").getTime(), price: 430},
  {day: new Date("2025-09-15").getTime(), price: 10},
  {day: new Date("2025-09-16").getTime(), price: 980},
]


function ToolTip({ x, y }) {
  return <Circle cx={x} cy={y} r={8} color="black" />;
}
// Criando componente animado de input
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

export const HomeScreen = () => {
  // criando interação com o gráfico
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } })

  // Animação para mostrar valores
  const animatedText = useAnimatedProps(() => {
    return {
      text: `R$ ${state.y.price.value.value.toFixed(2)}`
    }
  })

  // Animação para mostrar datas
  const animatedDataText = useAnimatedProps(() => {
    const date = new Date(state.x.value.value)
    return {
      text: `${date.toLocaleDateString("pt-BR")}`
    }
  })

  return (
    <View style={graficos.containerGra}>
        {/* Mostrando os valores e a data quando pressionar */}
        {isActive && (
          <View style={graficos.Values}>
            <AnimatedTextInput
              editable={false} 
              underlineColorAndroid="transparent"
              style={{ fontSize: 30, fontWeight: 'bold', color: "#000000ff" }}
              animatedProps={animatedText}
            />

            <AnimatedTextInput
              editable={false} 
              underlineColorAndroid="transparent"
              style={{ fontSize: 20, color: "#555" }}
              animatedProps={animatedDataText}
            />
          </View>
        )}

        {/* Mostrar o ultimo valor mesmo quando não estiver pressionando o grafico */}

        {!isActive && (
          <View style={graficos.Values}>
            <AnimatedTextInput
              style={{ fontSize: 30, fontWeight: 'bold', color: "#000000ff" }}
            >
                R$ {DATA[DATA.length - 1].price.toFixed(2)}
            </AnimatedTextInput>

            <Text style={graficos.DateText}> Hoje </Text>
          </View>
        )}
      <View style={{ width: "100%", height: 350 }}>


        <CartesianChart 
          data={DATA} 
          xKey="day" 
          yKeys={["price"]}
          axisOptions={{
            tickCount: 5
          }}
          chartPressState={state}
        >
          {({ points }) => (
            <>
              <Line points={points.price} color="#FA4" strokeWidth={4} />
              {isActive && (
                <ToolTip x={state.x.position} y={state.y.price.position}/>
              )}
            </>
          )}
        </CartesianChart>

      </View>
    </View>
  )
}
