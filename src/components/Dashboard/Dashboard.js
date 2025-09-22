
import { StyleSheet } from 'react-native'
export const Dash = StyleSheet.create({

    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fdfffda4', // Cor de fundo clara
        padding: 15,
    },
    boxInforValues: {
        width: '100%',
        height: 150,
        // backgroundColor: '#fff',
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    inforValues: {
        width: '47%', 
        height: '90%',
        backgroundColor: '#fff',
        borderRadius: 20,
        // Adicione mais estilos conforme necessário
        justifyContent: 'center',
        alignItems: 'center',
    },
    valueAnoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333', // Cor do texto escura
        textAlign: 'center',
    },
    // Estilo de bocshadow para IOS
    BoxShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        
    },

    // Estilo de boxShadow para Android
    BoxShadowAndroid: {
        shadowColor: '#243f2fff',
        elevation: 8,
    },
    text: {
        fontSize: 20,
        color: '#fff', // Cor do texto escura
    },
})