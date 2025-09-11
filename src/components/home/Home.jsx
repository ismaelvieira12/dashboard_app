
import { View, Text, StyleSheet } from 'react-native';
import {Sidbar} from '../sidbar/Sidbar'
import { Colors } from '../../style/Styles';
import { LineChart } from '../graficos/LineChart';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Sidbar />
      <Text style={styles.text}>Home</Text>
      <LineChart />
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