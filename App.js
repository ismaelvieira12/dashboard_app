import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from './src/components/welcome/Welcome';

export default function App() {
  return (

    <View style={styles.container}><Text style={styles.text}>Teste</Text>
    
      <Welcome />
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#000"
  }
});
