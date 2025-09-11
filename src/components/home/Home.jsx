import React from 'react'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
 
import { View, Text, StyleSheet } from 'react-native';

class AreaChartExample extends React.PureComponent {
  render() {
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

    return (
      <AreaChart
          style={{ height: 200 }}
          data={data}
          contentInset={{ top: 30, bottom: 30 }}
          curve={shape.curveNatural}
          svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
      >
          <Grid />
      </AreaChart>
    )
  }
}
export const Home = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "flex-start", // Alinha no topo
    padding: 20,
  },
  text: {
    color: "#fff",  // Deixa o texto visível no fundo preto
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 70,
  },
});

