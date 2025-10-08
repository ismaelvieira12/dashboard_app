import { Text, View } from "react-native";
import React from "react";
import { Dash } from "./Dashboard";
import React from "react";
import { Dimensions } from "react-native";
import {
  Canvas,
  Path,
  Skia,
  LinearGradient,
  vec,
} from "@shopify/react-native-skia";

// const { width } = Dimensions.get("window");
// const height = 250;

// Meses do ano
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

// Geração dos dados
const data = Array.from({ length: 12 }, (_, index) => ({
  month: meses[index], // 👈 agora usamos string mesmo
  listenCount: Math.floor(Math.random() * (500 - 100 + 1)) + 100, // valores entre 100 e 500
}));

export const DashboardScreen = () => {
   // Dados simulados
  const data = [80, 130, 170, 200, 240, 260, 300, 350, 390, 420];

  // Função para gerar o Path com preenchimento
  const createAreaPath = () => {
    const path = Skia.Path.Make();
    const step = width / (data.length - 1);

    // Começa na base do gráfico (para preencher)
    path.moveTo(0, height);
    path.lineTo(0, height - data[0]);

    data.forEach((y, i) => {
      const x = i * step;
      path.lineTo(x, height - y);
    });

    // Fecha o shape na base
    path.lineTo(width, height);
    path.close();

    return path;
  };

  const areaPath = createAreaPath();

  return (
    <View style={Dash.container}>
      {/* Cards de informações */}
      <View style={Dash.boxInforValues}>
        <View style={[Dash.inforValues, Dash.BoxShadowAndroid]}>
          <Text
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              fontWeight: "normal",
              backgroundColor: "#211f3cff",
              padding: 5,
              borderRadius: 8,
              color: "#fff",
            }}
          >
            Valores anuais
          </Text>
          <Text style={Dash.valueAnoText}>$ 29.590,67</Text>
          <Text
            style={{
              position: "absolute",
              bottom: 10,
              fontSize: 13,
              fontWeight: "bold",
              color: "#211f3cff",
            }}
          >
            Acumulador dos Anos
          </Text>
        </View>

        <View style={[Dash.inforValues, Dash.BoxShadowAndroid]}>
          <Text
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              fontWeight: "normal",
              backgroundColor: "#211f3cff",
              padding: 5,
              borderRadius: 8,
              color: "#fff",
            }}
          >
            Total atual
          </Text>
          <Text style={Dash.valueAnoText}>$ 15.590,67</Text>
          <Text
            style={{
              position: "absolute",
              bottom: 10,
              fontSize: 13,
              fontWeight: "bold",
              color: "#211f3cff",
            }}
          >
            Acumulador desse Ano
          </Text>
        </View>
      </View>
      {/* Gráfico de barras */}
      <View style={Dash.graficoOne} >

        <View
      style={{
        width: "100%",
        height: height + 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas style={{ width: width - 40, height }}>
        {/* Área preenchida com gradiente */}
        <Path path={areaPath} style="fill">
          <LinearGradient
            start={vec(0, 0)}
            end={vec(0, height)}
            colors={["#6C63FFcc", "#6C63FF33", "transparent"]}
          />
        </Path>

        {/* Linha do gráfico por cima */}
        <Path
          path={areaPath}
          color="#211f3cff"
          strokeWidth={3}
          style="stroke"
        />
      </Canvas>
    </View>
      </View>
      <View style={Dash.boxGraphico}></View>
    </View>
  );
};
