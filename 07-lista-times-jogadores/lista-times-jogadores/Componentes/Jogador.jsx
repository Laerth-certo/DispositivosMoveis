import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

const Jogador = ({ nome, numero, imagem }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <Image source={{ uri: imagem }} style={styles.imagem} />
        <View style={styles.info}>
          <Text variant="titleMedium">{nome}</Text>
          <Text variant="bodyMedium">Número: {numero}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 4,
    marginHorizontal: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  imagem: {
    width: 40,
    height: 50,
    borderRadius: 25,
  },
  info: {
    marginLeft: 12,
  },
});

export default Jogador;