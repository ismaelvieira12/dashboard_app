
import { StyleSheet } from 'react-native'
export const Dash = StyleSheet.create({

    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1ff', // Cor de fundo clara
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
        borderRadius: 10,
        // Adicione mais estilos conforme necessário
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
    text: {
        fontSize: 20,
        color: '#fff', // Cor do texto escura
    },
})