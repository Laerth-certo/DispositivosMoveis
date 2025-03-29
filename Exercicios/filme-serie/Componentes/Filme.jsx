import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Filme(props) {
  const { dados } = props;
  return (
    <View style={styles.container}>
      <Text>Nome: {props.nome}</Text>
      <Text>Ano: {props.ano}</Text>
      <Text>Diretor: {props.diretor}</Text>
      <Text>Tipo: {props.tipo}</Text>
      <Image source={{ uri: props.capa }}
      style={{
        height:200,
        width:200
      }} />
    </View>
  );
}

const styles = StyleSheet.create({container: {
    padding: 20,
    borderWidth: 2,
    alignItems: "center",
    margin: 10,
  },
  central: {
    alignItems: "center"
  }});
