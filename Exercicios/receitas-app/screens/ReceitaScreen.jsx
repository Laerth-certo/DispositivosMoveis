
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import React from "react";
import { Button } from 'react-native-paper';

export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: receita.imagem }} style={styles.image} />
      <Text style={styles.title}>{receita.nome}</Text>
      <Text style={styles.subTitle}>Tempo de preparo: {receita.tempoPreparo}</Text>
      <Text style={styles.subTitle}>Porções: {receita.porcoes}</Text>

      <Text style={styles.section}>Ingredientes:</Text>
      {receita.ingredientes.map((item, index) => (
        <Text key={index}>• {item}</Text>
      ))}

      <Text style={styles.section}>Modo de Preparo:</Text>
      {receita.modoPreparo.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}

      <Button onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
        Voltar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 16,
    marginVertical: 5
  },
  section: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold'
  }
});