import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { graficos } from "../Home/Home";
import Animated, { useAnimatedProps } from "react-native-reanimated";
import { CartesianChart, Line, useChartPressState } from "victory-native";
import {
  Group,
  Circle,
  Canvas,
  Path,
  LinearGradient,
  vec,
} from "@shopify/react-native-skia";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const DATA = [
  { day: new Date("2025-09-01").getTime(), price: 50 },
  { day: new Date("2025-09-02").getTime(), price: 120 },
  { day: new Date("2025-09-03").getTime(), price: 180 },
  { day: new Date("2025-09-04").getTime(), price: 260 },
  { day: new Date("2025-09-05").getTime(), price: 310 },
  { day: new Date("2025-09-06").getTime(), price: 390 },
  { day: new Date("2025-09-07").getTime(), price: 470 },
  { day: new Date("2025-09-08").getTime(), price: 30 },
  { day: new Date("2025-09-09").getTime(), price: 615 },
  { day: new Date("2025-09-10").getTime(), price: 700 },
  { day: new Date("2025-09-11").getTime(), price: 955 },
  { day: new Date("2025-09-12").getTime(), price: 820 },
  { day: new Date("2025-09-13").getTime(), price: 870 },
  { day: new Date("2025-09-14").getTime(), price: 920 },
  { day: new Date("2025-09-15").getTime(), price: 990 },
  { day: new Date("2025-09-16").getTime(), price: 1050 },
  { day: new Date("2025-09-17").getTime(), price: 1130 },
  { day: new Date("2025-09-18").getTime(), price: 200 },
  { day: new Date("2025-09-19").getTime(), price: 1265 },
  { day: new Date("2025-09-20").getTime(), price: 1340 },
  { day: new Date("2025-09-21").getTime(), price: 1990 },
  { day: new Date("2025-09-22").getTime(), price: 1500 },
  { day: new Date("2025-09-23").getTime(), price: 1580 },
  { day: new Date("2025-09-24").getTime(), price: 1660 },
  { day: new Date("2025-09-25").getTime(), price: 1740 },
  { day: new Date("2025-09-26").getTime(), price: 1810 },
  { day: new Date("2025-09-27").getTime(), price: 1890 },
  { day: new Date("2025-09-28").getTime(), price: 1975 },
  { day: new Date("2025-09-29").getTime(), price: 2050 },
  { day: new Date("2025-09-30").getTime(), price: 2120 },
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

// --- Wave S separator com Skia ---
function WaveS({ width = SCREEN_WIDTH, height = 120, colors = ["#ff4e02ff", "#FFD93D", "#00ff55ff"] }) {
  // cria o path em S que vai do canto inferior esquerdo ao canto superior direito
  // você pode ajustar os fatores pra mudar "intensidade" da curva
  const x1 = width * 0.15;
  const x2 = width * 0.25;
  const x3 = width * 0.4;
  const x4 = width * 0.6;
  const x5 = width * 0.75;

  const path = `
    M 0 ${height}
    C ${x1} ${height} ${x2} 0 ${x3} ${height * 0.2}
    C ${x4} ${height * 0.6} ${x5} 0 ${width} 0
    L ${width} ${height}
    L 0 ${height}
    Z
  `;

  return (
    <Canvas style={{ width: width, height: height }}>
      <Path path={path}>
        <LinearGradient start={vec(0, 0)} end={vec(width, 0)} colors={colors} />
      </Path>
    </Canvas>
  );
}

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const HomeScreen = () => {
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });
  const [activeBtn, setActiveBtn] = useState(0); // controla botão ativo
  const navigation = useNavigation();

  const animatedText = useAnimatedProps(() => {
    // mantenho sua lógica original (se quiser que eu troque .value.value pra .value eu faço)
    return {
      text: `R$ ${state.y.price.value.value.toFixed(2)}`,
    };
  });

  const animatedDataText = useAnimatedProps(() => {
    const date = new Date(state.x.value.value);
    return {
      text: `${date.toLocaleDateString("pt-BR")}`,
    };
  });

  const botoes = ["1M", "3M", "6M", "1A"]; // rótulos dos botões

  return (
    <View style={graficos.containerGra}>
      {/* Mostrar valores quando pressiona */}
      {isActive && (
        <View style={graficos.Values}>
          <AnimatedTextInput
            editable={false}
            underlineColorAndroid="transparent"
            style={{ fontSize: 50, fontWeight: "bold", color: "#fffbfbff" }}
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
            style={{ fontSize: 50, fontWeight: "bold", color: "#fffbfbff" }}
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

              {isActive && <GlowToolTip x={state.x.position} y={state.y.price.position} />}
            </>
          )}
        </CartesianChart>
      </View>

      {/* Botões */}
      <View style={graficos.boxInforBtn}>
        {botoes.map((label, index) => (
          <TouchableOpacity
            key={index}
            style={[graficos.boxMes, activeBtn === index && graficos.boxMesAtivo]}
            onPress={() => setActiveBtn(index)}
          >
            <Text style={[graficos.TextMes, activeBtn === index && graficos.TextMesAtivo]}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* boxDash: imagem em cima, onda (Skia) e botão em baixo */}
      <View style={graficos.boxDash}>
        <Image style={graficos.imagemDash} source={require("../../../assets/logo.png")} />

        {/* onda Skia S — fica entre a logo e o botão */}
        <WaveS 
           width={SCREEN_WIDTH} height={140} colors={["#ff4e02ff", "#FFD93D", "#00ff55ff"]} />

        <TouchableOpacity style={graficos.buttonDash} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={graficos.textBtnDash}>Ver Dashboard</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </View>
  );
};
