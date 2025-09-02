import { StyleSheet } from "react-native";
export const login = StyleSheet.create({
    boxLogin: {
        // flex: 1,
        backgroundColorImage: "#272727",
        alignItems: "center",
    },

    overlay: {
        backgroundColor: "rgba(22, 22, 22, 0.56)", // Um leve escurecimento por cima da imagem
        padding: 20,
        borderRadius: 10,
    },

    textLogin: {
        color: "#fff",
        fontSize: 20,  
        fontWeight: "bold",
        marginTop: 50,
    },

});