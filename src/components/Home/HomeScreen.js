import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { graficos } from '../Home/Home';
import Animated, { useAnimatedProps } from 'react-native-reanimated';
import { CartesianChart, Line, useChartPressState } from "victory-native";
import { Group, Circle } from '@shopify/react-native-skia';
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

function GlowToolTip({ x, y }) {
  return (
    <Group>
      {/* Glow externo */}
      <Circle cx={x} cy={y} r={30} color="rgba(0, 255, 200, 0.11)" />
      <Circle cx={x} cy={y} r={20} color="rgba(0, 255, 200, 0.2)" />
      <Circle cx={x} cy={y} r={12} color="rgba(0, 255, 200, 0.4)" />

      {/* Círculo principal */}
      <Circle cx={x} cy={y} r={8} color="#00FFD1" />
      <Circle cx={x} cy={y} r={4} color="#fff" />
    </Group>
  );
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
          gridColor: "#222",  // fundo escuro igual ao print
          labelColor: "#aaa",
        }}
      >
          {({ points }) => (
            <>
              {/* Linha degradê */}
              <Line points={points.price} strokeWidth={4} curveType="monotoneX">
                <LinearGradient
                  start={vec(0, 0)}
                  end={vec(350, 0)}
                  colors={["#FF6B6B", "#FFD93D", "#00ff55ff"]}
                />
              </Line>

              {/* Tooltip com glow */}
              {isActive && (
                <GlowToolTip
                  x={state.x.position}
                  y={state.y.price.position}
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
