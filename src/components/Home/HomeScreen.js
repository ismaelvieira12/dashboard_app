import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { graficos } from '../Home/Home';
import Animated, { useAnimatedProps } from 'react-native-reanimated';
import { CartesianChart, Line, useChartPressState } from "victory-native";
import { Group, Circle } from '@shopify/react-native-skia';
import { LinearGradient, vec } from "@shopify/react-native-skia";
import { StatusBar } from 'expo-status-bar';

const DATA = [
  { day: new Date("2025-09-01").getTime(), price: 734 },
  { day: new Date("2025-09-02").getTime(), price: 412 },
  { day: new Date("2025-09-03").getTime(), price: 856 },
  { day: new Date("2025-09-04").getTime(), price: 123 },
  { day: new Date("2025-09-05").getTime(), price: 978 },
  { day: new Date("2025-09-06").getTime(), price: 543 },
  { day: new Date("2025-09-07").getTime(), price: 65 },
  { day: new Date("2025-09-08").getTime(), price: 0 },
  { day: new Date("2025-09-09").getTime(), price: 312 },
  { day: new Date("2025-09-10").getTime(), price: 999 },
  { day: new Date("2025-09-11").getTime(), price: 451 },
  { day: new Date("2025-09-12").getTime(), price: 289 },
  { day: new Date("2025-09-13").getTime(), price: 876 },
  { day: new Date("2025-09-14").getTime(), price: 654 },
  { day: new Date("2025-09-15").getTime(), price: 0 },
  { day: new Date("2025-09-16").getTime(), price: 721 },
  { day: new Date("2025-09-17").getTime(), price: 432 },
  { day: new Date("2025-09-18").getTime(), price: 812 },
  { day: new Date("2025-09-19").getTime(), price: 278 },
  { day: new Date("2025-09-20").getTime(), price: 915 },
  { day: new Date("2025-09-21").getTime(), price: 601 },
  { day: new Date("2025-09-22").getTime(), price: 73 },
  { day: new Date("2025-09-23").getTime(), price: 842 },
  { day: new Date("2025-09-24").getTime(), price: 455 },
  { day: new Date("2025-09-25").getTime(), price: 932 },
  { day: new Date("2025-09-26").getTime(), price: 512 },
  { day: new Date("2025-09-27").getTime(), price: 689 },
  { day: new Date("2025-09-28").getTime(), price: 230 },
  { day: new Date("2025-09-29").getTime(), price: 799 },
  { day: new Date("2025-09-30").getTime(), price: 380 },
];

// Componente do "ponto ativo"
function GlowToolTip({ x, y }) {
  return (
    <Group>
      <Circle cx={x} cy={y} r={30} color="rgba(0, 255, 200, 0.11)" />
      <Circle cx={x} cy={y} r={20} color="rgba(0, 255, 200, 0.2)" />
      <Circle cx={x} cy={y} r={12} color="rgba(0, 255, 200, 0.4)" />
      <Circle cx={x} cy={y} r={8} color="#00FFD1" />
      <Circle cx={x} cy={y} r={4} color="#fff" />
    </Group>
  );
}

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

export const HomeScreen = () => {
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } })
  const [activeBtn, setActiveBtn] = useState(0); // controla botão ativo

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

  const botoes = ["1M", "3M", "6M", "1A"]; // rótulos dos botões

  return (
    <View style={graficos.containerGra}>
      <TouchableOpacity style={graficos.btnBackHome}></TouchableOpacity>
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

          <AnimatedTextInput editable={false}>
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
          domainPadding={{ left: 20, right: 20, top: 20, bottom: 20 }}
          axisOptions={{
            tickCount: 5,
            gridColor: "#222",
            labelColor: "#aaa",
          }}
        >
          {({ points }) => (
            <>
              <Line points={points.price} strokeWidth={4} curveType="monotoneX">
                <LinearGradient
                  start={vec(0, 0)}
                  end={vec(350, 0)}
                  colors={["#ff4e02ff", "#FFD93D", "#00ff55ff"]}
                />
              </Line>

              {isActive && (
                <GlowToolTip x={state.x.position} y={state.y.price.position} />
              )}
            </>
          )}
        </CartesianChart>
      </View>

      {/* Botões */}
      <View style={graficos.boxInforBtn}>
        {botoes.map((label, index) => (
          <TouchableOpacity
            key={index}
            style={[
              graficos.boxMes,
              activeBtn === index && graficos.boxMesAtivo, // aplica estilo se ativo
            ]}
            onPress={() => setActiveBtn(index)}
          >
            <Text
              style={[
                graficos.TextMes,
                activeBtn === index && graficos.TextMesAtivo,
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={graficos.boxDash}></View>
      <StatusBar style="light" />
    </View>
  )
}
