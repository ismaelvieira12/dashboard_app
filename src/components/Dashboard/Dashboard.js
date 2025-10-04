
import { StyleSheet } from 'react-native'
export const Dash = StyleSheet.create({

    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#02092fff', // Cor de fundo clara
        backgroundColor: '#e4e8e4ff', // Cor de fundo clara
        height: '100%',
        position: 'relative',
    },
    boxInforValues: {
        width: '100%',
        height: 150,
        padding: 10,
        paddingRight: 15,
        // backgroundColor: '#3b3a3aff',
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inforValues: {
        width: '48%', 
        height: '90%',
        backgroundColor: '#ffffffff',
        borderRadius: 20,
        // Adicione mais estilos conforme necessário
        justifyContent: 'center',
        alignItems: 'center',
    },
    valueAnoText: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#243f2fff', // Cor do texto escura
        textAlign: 'center',
        marginTop: 10,
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
    boxGraphico: {
        width: '100%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#211f3cff',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        padding: 10,
        position:"absolute", 
        bottom:0 
    },
})
