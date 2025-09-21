import React, { useState, useMemo } from "react";
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
  bottomLeft,
} from "@shopify/react-native-skia";
import { StatusBar } from "expo-status-bar";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

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

// Tooltip simples com glow
function GlowToolTip({ x, y, color = "#00FFD1", showValue, value }) {
  return (
    <Group>
      <Circle cx={x} cy={y} r={30} color={`${color}1B`} /> {/* 0x1B ≈ 11% */}
      <Circle cx={x} cy={y} r={20} color={`${color}33`} />
      <Circle cx={x} cy={y} r={12} color={`${color}66`} />
      <Circle cx={x} cy={y} r={8} color={color} />
      <Circle cx={x} cy={y} r={4} color="#fff" />
      {showValue && typeof value === "number" && (
        <Path
          // Pequeno "label" retângulo desenhado com Path + texto, mas para simplicidade usamos texto do RN abaixo
          path={`M ${x + 12} ${y - 20} L ${x + 120} ${y - 20} L ${x + 120} ${y - 40} L ${x + 12} ${y - 40} Z`}
        />
      )}
    </Group>
  );
}

// WaveS com Skia, permite style externo (borderRadius, position, overflow)
function WaveS({
  width = SCREEN_WIDTH,
  height = 120,
  colors = ["#ff4e02ff", "#FFD93D", "#00ff55ff"],
  style = {},
}) {
  // Path em S que vai do canto inferior esquerdo ao canto superior direito
  const x1 = width * 0.12;
  const x2 = width * 0.28;
  const x3 = width * 0.45;
  const x4 = width * 0.65;
  const x5 = width * 0.82;

  const path = `
    M 0 ${height}
    C ${x1} ${height} ${x2} ${height * 0.05} ${x3} ${height * 0.25}
    C ${x4} ${height * 0.55} ${x5} ${height * 0.0} ${width} ${height * 0.05}
    L ${width} ${height}
    L 0 ${height}
    Z
  `;

  // Mescla os estilos padrão com os passados via prop 'style'
  const canvasStyle = {
    width,
    height,
    borderRadius: 20,
    overflow: "hidden",
    ...style,
  };

  return (
    <Canvas style={canvasStyle}>
      <Path path={path}>
        <LinearGradient start={vec(0, 0)} end={vec(width, 0)} colors={colors} />
      </Path>
    </Canvas>
  );
}

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const HomeScreen = () => {
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });
  const [activeBtn, setActiveBtn] = useState(0);
  const botoes = ["1M", "3M", "6M", "1A"];

  // animated props - usar `.value` (shared values) dentro do worklet
  const animatedText = useAnimatedProps(() => {
    const v = state?.y?.price?.value ?? 0;
    // garante number
    const n = typeof v === "number" ? v : 0;
    return { text: `R$ ${n.toFixed(2)}` };
  });

  const animatedDataText = useAnimatedProps(() => {
    const xRaw = state?.x?.value ?? DATA[DATA.length - 1].day;
    const d = new Date(xRaw);
    // date string
    return { text: `${d.toLocaleDateString("pt-BR")}` };
  });

  // Para casos em que precisamos do valor em JS (fallback estático)
  const lastPrice = DATA[DATA.length - 1].price;

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

      {/* Mostrar último valor quando não pressiona */}
      {!isActive && (
        <View style={graficos.Values}>
          <Text style={{ fontSize: 50, fontWeight: "bold", color: "#fffbfbff" }}>
            R$ {lastPrice.toFixed(2)}
          </Text>
          <Text style={graficos.DateText}>Hoje</Text>
        </View>
      )}

      {/* Gráfico */}
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

              {/* Tooltip usando posições (números) — seguro em render */}
              {isActive && (
                <GlowToolTip
                  x={state.x.position ?? 0}
                  y={state.y?.price?.position ?? 0}
                />
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
            style={[graficos.boxMes, activeBtn === index && graficos.boxMesAtivo]}
            onPress={() => setActiveBtn(index)}
          >
            <Text style={[graficos.TextMes, activeBtn === index && graficos.TextMesAtivo]}>
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* boxDash: logo em cima, onda Skia em S entre logo e botão, botão em baixo */}
      <View style={graficos.boxDash}>
        <Image style={graficos.imagemDash} source={require("../../../assets/logo.png")} />

        {/* WaveS: passa style para controlar borderRadius/position/margins */}
        <WaveS
          width={SCREEN_WIDTH} // exemplo: diminui 20px margem de cada lado
          height={155}
          colors={["#ff4e02ff", "#FFD93D", "#00ff55ff"]}
          style={{ position: "absolute", bottom: 0, left: 0 }} // posiciona a onda
        />

        <TouchableOpacity style={graficos.buttonDash}>
          <Text style={graficos.textBtnDash}>Ver Dashboard</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </View>
  );
};
