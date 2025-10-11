import React from "react";
import { View, Text } from "react-native";
import { CartesianChart, Bar } from "victory-native";
import { LinearGradient, vec } from "@shopify/react-native-skia";
import { Dash } from "./Dashboard";

// Anos que queremos exibir
const anos = ["2022", "2023", "2024", "2025"];

// Dados (4 colunas)
const data = anos.map((ano) => ({
  year: ano,
  value: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000, // valores aleatórios
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
      <View
        style={[
          Dash.graficoOne,
          {
            // backgroundColor: "transparent",
            borderWidth: 0,
            overflow: "hidden", // 👈 tudo que sair do fundo fica invisível
            paddingBottom: 30,
          },
        ]}
      >
        <CartesianChart
          
          data={data}
          x5Key="year"
          yKeys={["value"]}
          domainPadding={{ left: 70, right: 70, top: 20, bottom: 20 }}
          axisOptions={{
            tickCount: 4,
            labelColor: "#fff", // 👈 cor das labels (agora aparece)
            gridColor: "transparent",
            lineColor: "transparent",
          }}
          chartStyle={{
            backgroundColor: "transparent",
            borderWidth: 0,
          }}
        >
          {({ points, chartBounds }) => (
            <Bar
              points={points.value}
              chartBounds={chartBounds}
              barWidth={65}
              roundedCorners={{ topLeft: 8, topRight: 8 }}
            >
              <LinearGradient
                start={vec(0, 0)}
                end={vec(0, 200)}
                colors={["#ff4e02ff", "#FFD93D"]}
              />
            </Bar>
          )}
        </CartesianChart>
      </View>

      <View style={Dash.boxGraphico}></View>
    </View>
  );
};
