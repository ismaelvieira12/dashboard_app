import { Text, View } from "react-native";
import { CartesianChart, Bar } from "victory-native";
import React from "react";
import { Dash } from "./Dashboard";
import { LinearGradient, vec } from "@shopify/react-native-skia";

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
              backgroundColor: "#d4fec4ff",
              padding: 5,
              borderRadius: 8,
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
              color: "#208100ff",
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
              backgroundColor: "#d4fec4ff",
              padding: 5,
              borderRadius: 8,
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
              color: "#208100ff",
            }}
          >
            Acumulador desse Ano
          </Text>
        </View>
      </View>

      {/* Gráfico de barras */}
      <View
        style={{
          width: "100%",
          height: 400,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          // backgroundColor: "#1a1830ff",
          backgroundColor: "#3b3a3aff",
          borderRadius: 20,
          padding: 10,
          position:"absolute", 
          bottom:90 
        }}
      >
        <View style={{ width: "95%", height: 320}}>
          <CartesianChart
            data={data}
            xKey="month"
            yKeys={["listenCount"]}
            axisOptions={{
              labelColor: "#ffffff",
              gridColor: "#444444",
              axisColor: "#ffffff",
              tickCount: 12,
              
              labelFormatter: (value) => value,
            }}
          >
            {({ points, chartBounds }) => (
              <Bar chartBounds={chartBounds} points={points.listenCount} barWidth={20}>
                <LinearGradient
                  start={vec(0, 0)}
                  end={vec(0, 300)}
                  colors={["#00ff55ff", "#FFD93D", "#ff4e02ff"]}
                />
              </Bar>
            )}
          </CartesianChart>
        </View>
      </View>

      {/* Menu inferior */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          height: 90,
          width: "110%",
          backgroundColor: "#1a1830ff",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          ...Dash.BoxShadowAndroid,
        }}
      >
      <View style={{ width: 80, height: 80, borderRadius: 160, backgroundColor: "#02092fff" }} />
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 160,
            backgroundColor: "#38ff7aff",
            marginBottom: 70,
            elevation: 15,
            shadowColor: "#00ff55ff",
          }}
        />
        <View style={{ width: 80, height: 80, borderRadius: 160, backgroundColor: "#02092fff" }} />
      </View>
    </View>
  );
};
