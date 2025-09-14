import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { Welcome } from './src/components/welcome/Welcome';

export default function App() {
  return (
    <>
    <View style={styles.container}><Text>Teste</Text></View>
      {/* <Welcome /> */}
      <StatusBar style='auto'/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
