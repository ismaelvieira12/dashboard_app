import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
export const Home = () => {
  return (
    
      <Text>Home</Text>
    
  );
}




export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "flex-start", // <- muda para alinhar no topo
    padding: 20,
  },  
});