import { StyleSheet } from "react-native";

export const graficos = StyleSheet.create({
    containerGra: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#02092fff"
    },

    graficoNumberOne: {
        width: "100%",
        height: 350,
        marginTop: 50,
        // backgroundColor: "#3b3a3aff",
        borderRadius: 20,
        padding: 10,
    },
    
    Values: {
        position: "absolute",
        top: 80,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
    },
    
    DateText: {
        fontSize: 20,
        color:"#fff"
    },
    
    boxInforBtn: {
        backgroundColor: "#1a1830ff",
        width: "90%",
        borderRadius: 30,
        marginTop: 40,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    boxMes: {
        // backgroundColor: "#fffbfbff",
        width: 70,
        height: 50,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    TextMes: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fffbfbff"
    },

    boxMesAtivo: {
        backgroundColor: "#05ac3dff",
        borderRadius: 20,
        elevation: 5,
        shadowColor: "#27d160ff",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    TextMesAtivo: {
        color: "#02092fff",
        fontWeight: "bold",
        fontSize: 18,
    },
    
    boxDash: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 160,
        marginTop: 20,
        backgroundColor: "#1a1830ff",
        padding: 20,
        borderRadius: 20,
    },
    imagemDash: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        position: "absolute",
        top: -25,
        left: 9
    },
    buttonDash: {
        position: "absolute",
        bottom: 20,
        right: 20,
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#ff4e02ff",
        // Box shadow for iOS
        shadowColor: "#c44a4aff",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Box shadow for Android
        elevation: 5,
    },
    textBtnDash: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#ffffffff"
    }
});