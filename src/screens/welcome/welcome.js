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
    backgroundColor: "#161515ec",
    position: "absolute",
    width: width,
    height: height + 50
  },
  boxMarca: {
    backgroundColor: Colors.corDeFundo,
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
    justifyContent: "center", // Centraliza tudo verticalmente
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

  // boxBtn: {
  //   width: width,
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center"
  // },

  // Botão principal
  buttonSingUp: {
    backgroundColor: "#00bfff",
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
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  // Texto abaixo do botão
  loginText: {
    color: "#dbd9d9ff",
    fontSize: 16,
    marginTop: 15,
  },

  // Link para login
  loginLink: {
    fontWeight: "bold",
    color: "#00bfff",
  },
});
