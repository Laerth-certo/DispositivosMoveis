import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Divider } from 'react-native-paper';
import Jogador from './Jogador';

const Time = ({ nome, anoFundacao, mascote, imagem, jogadores }) => {
  return (
    <Card style={styles.card}>
      <Card.Title title={nome} subtitle={`Fundado em ${anoFundacao} - Mascote: ${mascote}`} />
      <Card.Content>
        <Image source={{ uri: imagem }} style={styles.imagemTime} />
        <Divider style={{ marginVertical: 8 }} />
        <Text variant="titleMedium">Jogadores:</Text>
        <FlatList
          data={jogadores}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => (
            <Jogador nome={item.nome} numero={item.numero} imagem={item.imagem} />
          )}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 12,
  },
  imagemTime: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginTop: 8,
  },
});

export default Time;