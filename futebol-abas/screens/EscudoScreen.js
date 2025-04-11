import { StyleSheet, View } from 'react-native';
import { Text, Card, Title } from 'react-native-paper';
import React from 'react';

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.titulo}>
        Escudo do Vasco da Gama
      </Text>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Escudo Oficial</Title>
        </Card.Content>
        <Card.Cover
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfpcjZnR0eduWiKmRoqeNBcg1KmkHufnORQ&s',
          }}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    width: '60%',
    marginBottom: 20,
  },
});
