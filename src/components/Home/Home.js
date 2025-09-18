import { StyleSheet } from "react-native";

export const graficos = StyleSheet.create({
    containerGra: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        padding:30,
        backgroundColor: "#302f2fff"
    },

    graficoNumberOne: {
        width: "100%",
        height: 350,
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
        backgroundColor: "#886a6aff",
    }

});