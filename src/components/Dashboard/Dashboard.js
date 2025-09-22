import { StyleSheet } from 'react-native'
export const Dash = StyleSheet.create({

    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#02092fff', // Cor de fundo clara
    },
    boxInforValues: {
        width: '100%',
        height: 100,
        backgroundColor: '#1a1830ff',
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    inforValues: {
        width: '45%', 
        height: '80%',
        backgroundColor: '#fffbfbff',
        borderRadius: 10,
        // Adicione mais estilos conforme necessário
    },
    text: {
        fontSize: 20,
        color: '#fffbfbff', // Cor do texto escura
    },
})