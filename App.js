import { StatusBar } from 'expo-status-bar';
import {WelcomeScreen} from './src/components/Welcome/WelcomeScreen';
import { HomeScreen } from './src/components/Home/HomeScreen';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  return (
    <>
      <WelcomeScreen />
      
      {/* Indo para pagina de inicio */}
      <HomeScreen />
      <StatusBar style="auto" />
    </>
  );
}
