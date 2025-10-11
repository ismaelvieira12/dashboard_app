
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
        color: '#211f3cff', // Cor do texto escura
        textAlign: 'center',
        marginTop: 10,
    },
    // Estilo de bocshadow para IOS
    BoxShadow: {
        shadowColor: '#211f3cff',
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        
    },

    // Estilo de boxShadow para Android
    BoxShadowAndroid: {
        shadowColor: '#211f3cff',
        elevation: 8,
    },
    text: {
        fontSize: 20,
        color: '#fff', // Cor do texto escura
    },
    boxGraphico: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#211f3cff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 10,
        position:"absolute", 
        bottom: 0 
    },
    graficoOne: {
        width: '94%',
        height: '40%',
        backgroundColor: '#ffffffff',
        borderRadius: 20,
        // Adicione mais estilos conforme necessário
        marginBottom: 20,
        marginRight: 15,
        marginLeft: 12,
        // padding: 10,
    },
})
