import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Series(props) {
  const { dados } = props;
  return (
    <View>
      <View style={styles.central}>
        <Text>Serie</Text>
      </View>
      <View style={styles.container}>
        <Text>Nome: {props.nome}</Text>
        <Text>Ano: {props.ano}</Text>
        <Text>Diretor: {props.diretor}</Text>
        <Text>Temporadas: {props.temporadas}</Text>
        <Image
          source={{ uri: props.capa }}
          style={{
            height: 200,
            width: 200,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 2,
    alignItems: "center",
    margin: 10,
  },
  central: {
    alignItems: "center"
  }
});
