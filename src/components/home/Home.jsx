
import { View, Text, StyleSheet } from 'react-native';
import {Sidbar} from '../sidbar/Sidbar'
import { Colors } from '../../style/Styles';
import { GraficoLinha } from '../graficos/GraficoLinha';
import { VictoryChart, VictoryLine, VictoryBar, VictoryPie, VictoryTheme } from "victory-native";

export const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Sidbar />
      <Text style={styles.text}>Home</Text>
      < GraficoLinha />

         {/* Gráfico de Linhas */}
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ]}
          style={{
            data: { stroke: "#38A3A5", strokeWidth: 3 }
          }}
        />
      </VictoryChart>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#272727",
    backgroundColor: Colors.corDeFundo,
    alignItems: "center",
    justifyContent: "flex-start", // Alinha no topo
  },
  text: {
    color: "#fff",  // Deixa o texto visível no fundo preto
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 70,
  },
});