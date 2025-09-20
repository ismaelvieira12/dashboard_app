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
        marginTop: 200,
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
        padding: 20,
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
    },
    
    boxDash: {
        width: "95%",
        height: 160,
        marginTop: 20,
        backgroundColor: "#1a1830ff",
        padding: 20,
        borderRadius: 20,
    }

});