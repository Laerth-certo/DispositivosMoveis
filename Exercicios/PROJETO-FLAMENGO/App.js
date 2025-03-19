import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>CLUBE DE REGATAS FLAMENGO</Text>
      <Text>
        O Flamengo, fundado em 1895 no Rio de Janeiro, é um dos clubes mais
        populares e vitoriosos do Brasil.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

<Image
  source={{
    uri: "https://images6.alphacoders.com/117/1174669.jpg",
  }}
  style={{
    height: 300,
    width: 300,
  }}
/>;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
