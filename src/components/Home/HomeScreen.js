import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { graficos } from '../Home/Home';
import Animated, { useAnimatedProps } from 'react-native-reanimated';
import { CartesianChart, Line, useChartPressState } from "victory-native";
import { Circle } from '@shopify/react-native-skia';
import { LinearGradient, vec } from "@shopify/react-native-skia";

const DATA = [
  {day: new Date("2025-09-10").getTime(), price: 500},
  {day: new Date("2025-09-11").getTime(), price: 250},
  {day: new Date("2025-09-12").getTime(), price: 600},
  {day: new Date("2025-09-13").getTime(), price: 720},
  {day: new Date("2025-09-14").getTime(), price: 430},
  {day: new Date("2025-09-15").getTime(), price: 10},
  {day: new Date("2025-09-16").getTime(), price: 980},
]

// Componente do "ponto ativo"
function ToolTip({ x, y, value }) {
  let color = "#000"; 

  if(value < 200) color = "#FF4D4D" //Quando ovalor for menor que 200 a cor vai ser Vermelha
  else if(value < 500) color = "#FFD93D" // Quando o valor for menor que 500 a cor vai ser amarela
  else color = "#6BCB77" // Quando o valor for menor que 500 a cor vai ser amarela

  return (
    <Circle cx={x} cy={y} r={12} color={color} style={'fill'}/>
  )
}

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

export const HomeScreen = () => {
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } })

  const animatedText = useAnimatedProps(() => {
    return {
      text: `R$ ${state.y.price.value.value.toFixed(2)}`
    }
  })

  const animatedDataText = useAnimatedProps(() => {
    const date = new Date(state.x.value.value)
    return {
      text: `${date.toLocaleDateString("pt-BR")}`
    }
  })

  return (
    <View style={graficos.containerGra}>
      {/* Mostrar valores quando pressiona */}
      {isActive && (
        <View style={graficos.Values}>
          <AnimatedTextInput
            editable={false} 
            underlineColorAndroid="transparent"
            style={{ fontSize: 50, fontWeight: 'bold', color: "#fffbfbff" }}
            animatedProps={animatedText}
          />
          <AnimatedTextInput
            editable={false} 
            underlineColorAndroid="transparent"
            style={{ fontSize: 20, color: "#fffbfbff" }}
            animatedProps={animatedDataText}
          />
        </View>
      )}

      {/* Mostrar último valor mesmo sem pressionar */}
      {!isActive && (
        <View style={graficos.Values}>
          <AnimatedTextInput
            editable={false} 
            style={{ fontSize: 50, fontWeight: 'bold', color: "#fffbfbff" }}
          >
            R$ {DATA[DATA.length - 1].price.toFixed(2)}
          </AnimatedTextInput>

          <AnimatedTextInput
            editable={false} 
          >
            <Text style={graficos.DateText}>Hoje</Text>
          </AnimatedTextInput>
        </View>
      )}

      <View style={graficos.graficoNumberOne}>
        <CartesianChart
          data={DATA}
          xKey="day"
          yKeys={["price"]}
          chartPressState={state}
          axisOptions={{
            tickCount: 5,
            gridColor: "#e0e0e0",
            labelColor: "#555",
          }}
        >
          {({ points }) => (
            <>
              <Line points={points.price} strokeWidth={4} curveType="monotoneX">
                <LinearGradient
                  start={vec(0, 0)}
                  end={vec(350, 0)} // ajuste com a largura do gráfico
                  colors={["#FF6B6B", "#FFD93D", "#6BCB77 "]}
                />
              </Line>

              {isActive && (
                <ToolTip
                  x={state.x.position}
                  y={state.y.price.position}
                  value={state.y.price.value.value.toFixed(2)}
                />
              )}
            </>
          )}
        </CartesianChart>
        <View style={graficos.boxInforBtn}>
          <View></View>
          <View></View>
          <View></View>
          <View></View>
        </View>
      
      </View>
    </View>
  )
}
