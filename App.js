import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {WelcomeScreen} from './src/components/Welcome/WelcomeScreen';
import { HomeScreen } from './src/components/Home/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
      
      <HomeScreen />
      <StatusBar style="auto" />
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
    color: '#000',
  },
});
