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

      
       
      </View>
    </View>
  );
};
