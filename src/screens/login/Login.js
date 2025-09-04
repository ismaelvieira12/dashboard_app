import { StyleSheet } from "react-native";
export const login = StyleSheet.create({
    boxLogin: {
        flex: 1,
        justifyContent: "center",
        position: "relative",
        backgroundColor: "#22577A",
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
        width: 300,
        height: 300,
        backgroundColor: '#C7F9CC',
        borderRadius: 200,
        position: 'absolute',
        top: -100,
        right: -100,
    },
    EfeitoTwo: {
        width: 100,
        height: 100,
        backgroundColor: '#b8e5bcff',
        borderRadius: 200,
        position: 'absolute',
        top: 150,
        right: -60,
    },
    EfeitoThree: {
        width: 850,
        height: 850,
        backgroundColor: '#b8e5bcff',
        borderRadius: "50%",
        position: 'absolute',
        bottom: "-65%",
    },
    EfeitoFor: {
        width: 250,
        height: 250,
        backgroundColor: '#C7F9CC',
        borderRadius: "50%",
        position: 'absolute',
        bottom: -60,
        right: "-10%"
    },
    EfeitoFive: {
        width: 250,
        height: 250,
        backgroundColor: '#C7F9CC',
        borderRadius: "50%",
        position: 'absolute',
        bottom: -60,
        right: "-10%"
    }

});