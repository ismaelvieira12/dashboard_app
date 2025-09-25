import { Text, View } from "react-native";
import { CartesianChart, Bar } from "victory-native";
import React from "react";
import { Dash } from "./Dashboard";

const data = Array.from({ length: 6 }, (_, index) => ({
  month: new Date(2025, index, 1).getTime(), // usar timestamp no eixo X
  listenCount: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
}));

export const DashboardScreen = () => {
  return (
    <View style={Dash.container}>

      <View style={Dash.boxInforValues}>
        <View  style={[Dash.inforValues, Dash.BoxShadowAndroid]}>
          <View style={{ position: 'absolute', top: 10, left: 25 }}>
            <Text  style={{ fontWeight:'normal', backgroundColor: '#d3fec4ff', padding: 5, borderRadius: 8  }}>Avlores anuais 
            </Text>
          </View>

          <Text style={Dash.valueAnoText}>$ 29.590,67</Text>
          <Text  style={{ position: 'absolute', bottom: 10, fontSize: 13, fontWeight:'bold', color: '#208100ff' }}>Acumulador dos Anos</Text>
        </View>

        <View  style={[Dash.inforValues, Dash.BoxShadowAndroid]}>
          <View style={{ position: 'absolute', top: 10, left: 25 }}>
            <Text  style={{ fontWeight:'normal', backgroundColor: '#d3fec4ff', padding: 5, borderRadius: 8 }}>Total atual
            </Text>
          </View>
          <Text style={Dash.valueAnoText}>$ 15.590,67</Text>
          <Text  style={{ position: 'absolute', bottom: 10, fontSize: 13, fontWeight:'bold', color: '#208100ff' }}>Acumulador dos Anos</Text>
        </View>
      </View>
      <Text style={Dash.text}>DashboardScreen</Text>

      <View style={{ width: "100%", height: 300 }}>
        <CartesianChart data={data} xKey="month" yKeys={["listenCount"]}>
          {({ points, chartBounds }) => (
            <Bar
              chartBounds={chartBounds}
              points={points.listenCount}
              barWidth={20} // 👈 largura das barras
              color="#4CAF50" // 👈 cor das barras
            />
          )}
        </CartesianChart>
      </View>
    </View>
  );
};
