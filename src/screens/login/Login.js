import { StyleSheet } from "react-native";
export const login = StyleSheet.create({
    boxLogin: {
        flex: 1,
        justifyContent: "center",
        position: "relative",
        
        alignItems: "center",
    },

    overlay: {
        backgroundColor: "rgba(22, 22, 22, 0.56)", // Um leve escurecimento por cima da imagem
        padding: 20,
        borderRadius: 10,
    },

    textLogin: {
        color: "#bf4747ff",
        fontSize: 20,  
        fontWeight: "bold",
        marginTop: 50,
    },

    EfeitoOne: {
        width: 200,
        height: 200,
        backgroundColor: '#bf4747ff',
        borderRadius: 100,
        position: 'absolute',
        top: -50,
    }

});