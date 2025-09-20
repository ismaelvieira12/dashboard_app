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
        marginTop: 40,
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
        width: "95%",
        borderRadius: 10,
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

});