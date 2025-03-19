// imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button ,Image} from 'react-native';
// função que define o componente
// retornar o que vai ser renderizado na tela (template feito em JSX)
export default function App() {
  
  //RETORNO COM O JSX
  
  return (
      <View style={styles.container}>
      
    
      <StatusBar style="auto" />
      <Texto>Texto dentro</Texto>
      <Button title='Clicar'></Button>
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
});
