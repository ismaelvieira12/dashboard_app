import { Text, View } from "react-native";
import { CartesianChart, Bar } from "victory-native";
import React from "react";
import { Dash } from "./Dashboard";
import { LinearGradient, vec } from "@shopify/react-native-skia";





const data = Array.from({ length: 5 }, (_, index) => ({
  month: new Date(2025, index, 1).getTime(), // usar timestamp no eixo X
  listenCount: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
}));

export const DashboardScreen = () => {

  return (
    <View style={Dash.container}>

      <View style={Dash.boxInforValues}>
        <View  style={[Dash.inforValues, Dash.BoxShadowAndroid]}>
          <View style={{ position: 'absolute', top: 10, left: 25 }}>
            <Text  style={{position: "absolute", left: -15, fontWeight:'normal', backgroundColor: '#d4fec4ff', padding: 5, borderRadius: 8  }}>Valores anuais 
            </Text>
          </View>

          <Text style={Dash.valueAnoText}>$ 29.590,67</Text>
          <Text  style={{ position: 'absolute', bottom: 10, fontSize: 13, fontWeight:'bold', color: '#208100ff' }}>Acumulador dos Anos</Text>
        </View>

        <View  style={[Dash.inforValues, Dash.BoxShadowAndroid]}>
          <View style={{ position: 'absolute', top: 10, left: 25 }}>
            <Text  style={{position: "absolute", left: -15, fontWeight:'normal', backgroundColor: '#d4fec4ff', padding: 5, borderRadius: 8 }}>Total atual
            </Text>
          </View>
          <Text style={Dash.valueAnoText}>$ 15.590,67</Text>
          <Text  style={{ position: 'absolute', bottom: 10, fontSize: 13, fontWeight:'bold', color: '#208100ff' }}>Acumulador desse Ano</Text>
        </View>
      </View>
     

      {/* Gráfico de barras */}
      <View  style={{ width: "100%", height: 400, justifyContent: "center", alignItems: "center", marginTop: 20, backgroundColor: '#1a1830ff', borderRadius: 20, padding: 10 }}>
        <View style={{ width: "95%", height: 300 }}>
          <CartesianChart data={data} xKey="month" yKeys={["listenCount"]}>
            {({ points, chartBounds }) => (
              <Bar
                chartBounds={chartBounds}
                points={points.listenCount}
                barWidth={30}
              >
                <LinearGradient
                  start={vec(0, 0)}
                  end={vec(0, 300)} // 👈 gradiente vertical
                  colors={[ "#00ff55ff", "#FFD93D", "#ff4e02ff"]}
                />
              </Bar>
            )}
          </CartesianChart>
        </View>
      </View>



    </View>
  );
};
