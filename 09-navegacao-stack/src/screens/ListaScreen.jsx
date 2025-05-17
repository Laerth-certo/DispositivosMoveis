import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaScreen( {navigation, route}) {
    const carros = {


        nome:'Gol',
        ano: '2012',
        cor: "azul",
    }
  return (
    <View>
      <Text>ListaScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})npx create-expo-app@latest receitas-app --template blank