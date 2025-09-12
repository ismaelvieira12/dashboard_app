import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../style/Styles";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  // Imagem de fundo
  background: {
    flex: 1,
    width: width,
    height: height + 50,
  },
  efeito: {
    backgroundColor: "#161515d9",
    position: "absolute",
    width: width,
    height: height + 50
  },
  boxMarca: {
    width: width,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  imagemInicio: {
    width: 200,
    height: 200,
    resizeMode: "center",
  },
  // Camada de sobreposição para contraste
  overlay: {
    flex: 1,
    justifyContent: "space-around", // Centraliza tudo verticalmente
    alignItems: "center", // Centraliza horizontalmente
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Escurece levemente a imagem de fundo
  },

  // Texto de boas-vindas
  text: {
    color: "#FFFFFF",
    fontFamily: 'Paprika', // tem que bater com o nome que você definiu
    fontSize: 50,
    color: 'white',
    marginBottom: 40,
  },
  textWav: {
    color: Colors.wav
  },
  boxBtn: {
    width: width,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  // Botão principal
  buttonSingUp: {
    backgroundColor: Colors.btn,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    width: "80%", // Responsivo
    alignItems: "center",
    marginBottom: 20,
    elevation: 5, // Sombra para Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  // Texto do botão
  textBtn: {
    color: Colors.corBranca,
    fontSize: 18,
    fontWeight: "bold",
  },

  // Texto abaixo do botão
  loginText: {
    color: "#dbd9d9ff",
    fontSize: 16,
  },

  // Link para login
  loginLink: {
    fontWeight: "bold",
    color: Colors.btn,
  },
});


