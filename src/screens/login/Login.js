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
        position: "absolute",
        zIndex: 3,
        top: 135,
        left:40,
        color: "#fff",
        fontSize: 34,  
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
        zIndex: 2,
    },
    EfeitoTwo: {
        width: 100,
        height: 100,
        backgroundColor: '#b8e5bcff',
        borderRadius: 200,
        position: 'absolute',
        top: 150,
        right: -60,
        zIndex: 2,
    },
    EfeitoThree: {
        width: 850,
        height: 850,
        backgroundColor: '#b8e5bcff',
        borderRadius: "50%",
        position: 'absolute',
        bottom: "-65%",
        zIndex: 2,
    },
    EfeitoFor: {
        width: 250,
        height: 250,
        backgroundColor: '#C7F9CC',
        borderRadius: "50%",
        position: 'absolute',
        bottom: -60,
        right: "-10%",
        zIndex: 2,
    },
    EfeitoFive: {
        width: 850,
        height: 850,
        backgroundColor: '#1e4f6fd4',
        borderRadius: "50%",
        position: 'absolute',
        top: "-50%",
        left: "-90%",    
        zIndex: 1,
    },
    buttonLogin: {
        position: "absolute",
        bottom: 100,
        width: "80%",
        marginTop: 20,
        backgroundColor: "#fff",
        paddingVertical: 15,
        borderRadius: 5,
        zIndex: 3,
    },
    textButtonLogin: {
        color: "#000",
        fontSize: 18,  
        fontWeight: "bold",
        textAlign: "center",
    },

});