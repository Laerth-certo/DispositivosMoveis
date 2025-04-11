import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';
import React from 'react';

const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1974, 1989, 1997,  2000]
  },
  {
    nome: "CONMEBOL Libertadores",
    anos: [1998]
  },
  {
    nome: "Copa do Brasil",
    anos: [2011]
  },
  {
    nome: "Campeonatos Cariocas",
    anos: [1923, 1924, 1929, 1934, 1936, 1945, 1947, 1949, 1950, 1952, 1956, 1958, 1970, 1977, 1982, 1987, 1988, 1992, 1993, 1994, 1998, 2003, 2015, 2016]
  }
];

export default function TitulosScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant='headlineLarge' style={styles.titulo}>
        Títulos do Vasco da Gama
      </Text>

      {titulos.map((item, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <Title>{item.nome}</Title>
            <Paragraph>Anos: {item.anos.join(', ')}</Paragraph>
          </Card.Content>
          
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff'
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20
  },
  card: {
    width: '90%',
    marginBottom: 15
  }
});

 
  