import React from "react";
import { View, Text } from "react-native";
import { CartesianChart, Bar } from "victory-native"; // mesma lib do exemplo anterior
import { LinearGradient, vec } from "@shopify/react-native-skia"; // mesmo estilo de gradiente
import { Dash } from "./Dashboard";


// Meses do ano
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

// Geração dos dados
const data = Array.from({ length: 12 }, (_, index) => ({
  month: meses[index], // 👈 agora usamos string mesmo
  listenCount: Math.floor(Math.random() * (500 - 100 + 1)) + 100, // valores entre 100 e 500
}));

export const DashboardScreen = () => {
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
        <CartesianChart
          data={data}
          xKey="month"
          yKeys={["listenCount"]}
          domainPadding={{ left: 10, right: 10, top: 10, bottom: 10 }}
          axisOptions={{
            tickCount: 6,
            labelColor: "#aaa",
            gridColor: "#222",
          }}
        >
          {({ points, chartBounds }) => (
            <>
              <Bar
                points={points.listenCount}
                chartBounds={chartBounds}
                barWidth={14}
                roundedCorners={{ topLeft: 8, topRight: 8 }}
              >
                <LinearGradient
                  start={vec(0, 0)}
                  end={vec(0, 200)}
                  colors={["#ff4e02ff", "#FFD93D", "#00ff55ff"]}
                />
              </Bar>
            </>
          )}
        </CartesianChart>
      </View>
      <View style={Dash.boxGraphico}></View>
    </View>
  );
};
