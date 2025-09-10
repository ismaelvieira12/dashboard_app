import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const login = StyleSheet.create({
    boxLogin: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#22577A",
    },

    imgEl: {
        width: width * 0.4, // 40% da largura da tela
        height: height * 0.12, // 12% da altura da tela
        position: "absolute",
        top: height * 0.12,
        left: width * 0.08,
        resizeMode: "contain",
        zIndex: 3,
    },


    textLogin: {
        position: "absolute",
        zIndex: 3,
        top: height * 0.28,
        left: width * 0.33,
        color: "#fff",
        fontSize: width * 0.09, // fonte responsiva
        fontWeight: "bold",
    },

    EfeitoOne: {
        width: width * 0.7,
        height: width * 0.7,
        backgroundColor: "#C7F9CC",
        borderRadius: width * 0.38,
        position: "absolute",
        top: "-8%",
        right: "-20%",
        zIndex: 2,
    },

    EfeitoTwo: {
        width: width * 0.25,
        height: width * 0.25,
        backgroundColor: "#a7d2abff",
        borderRadius: width * 0.125,
        position: "absolute",
        top: height * 0.18,
        right: "-15%",
        zIndex: 2,
    },

    EfeitoThree: {
        width: width * 2,
        height: width * 2,
        backgroundColor: "#a7d2abff",
        borderRadius: width,
        position: "absolute",
        bottom: "-60%",
        zIndex: 2,
    },

    EfeitoFor: {
        width: width * 0.6,
        height: width * 0.6,
        backgroundColor: "#C7F9CC",
        borderRadius: width * 0.3,
        position: "absolute",
        bottom: -60,
        right: "-10%",
        zIndex: 2,
    },

    EfeitoFive: {
        position: "absolute",
        top: "-10%",
        left: "-45%",
        width: width * 1.4,
        height: width * 1.4,
        borderRadius: width * 0.8,
        backgroundColor: "#1e4f6fd4",
        zIndex: 1,
    },

    form: {
        width: "100%",
        height: "50%",
        zIndex: 3,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonLogin: {
        position: "absolute",
        bottom: height * 0.1,
        width: "80%",
        backgroundColor: "#38A3A5",
        paddingVertical: height * 0.02,
        borderRadius: 5,
        zIndex: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    textButtonLogin: {
        color: "#fff",
        fontSize: width * 0.05,
        fontWeight: "bold",
        textAlign: "center",
    },
});
