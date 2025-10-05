import React from "react";
import { View, Text } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import Svg from "react-native-svg";
import { Dash } from "./Dashboard";

const meses = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];

const data = meses.map((m, i) => ({
  month: m,
  value: Math.floor(Math.random() * 400) + 100,
}));

export const DashboardScreen = () => (
  <View style={Dash.container}>
    <View style={Dash.boxInforValues}>
      <View style={[Dash.inforValues, Dash.BoxShadowAndroid]}>
        <Text style={{ fontWeight: "bold" }}>Valores anuais</Text>
        <Text style={Dash.valueAnoText}>$ 29.590,67</Text>
      </View>
      <View style={[Dash.inforValues, Dash.BoxShadowAndroid]}>
        <Text style={{ fontWeight: "bold" }}>Total atual</Text>
        <Text style={Dash.valueAnoText}>$ 15.590,67</Text>
      </View>
    </View>

    <View style={[Dash.graficoOne, { height: 250, width: "100%", alignItems: "center" }]}>
      <Svg width="100%" height="100%">
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{ x: 25 }}
          width={350}
          height={250}
        >
          <VictoryBar
            data={data}
            x="month"
            y="value"
            style={{ data: { fill: "#211f3cff", width: 20, borderRadius: 6 } }}
          />
        </VictoryChart>
      </Svg>
    </View>
  </View>
);
