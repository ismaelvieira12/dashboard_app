import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "center", // Alinha no topo
    padding: 20,
  },
  text: {
    color: "#dbd9d9ff",  // Deixa o texto visível no fundo preto
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
  },

  imagemInicio: {
    width: "100%",
    height: 300,
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    resizeMode: 'center', // Mantém a proporção da imagem
  },

  buttonSingUp: {
    backgroundColor: "#00bfff",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },
  textBtn: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});