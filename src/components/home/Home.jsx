import { View, Text, StyleSheet } from 'react-native';

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
