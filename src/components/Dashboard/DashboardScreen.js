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
        <View  style={Dash.inforValues}></View>
        <View  style={Dash.inforValues}></View>
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
