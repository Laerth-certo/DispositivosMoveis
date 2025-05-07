import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../../screens/HomeScreen'
import ReceitaScreen from '../../screens/ReceitaScreen'
import { createStackNavigator } from '@react-navigation/stack'
// construção do nosso stack//

const Stack = createStackNavigator()

export default function StackRoute() {
  return (
    <Stack.Navigator>

        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='ReceitaScreen' component={ReceitaScreen}/>




    </Stack.Navigator>
    
    
  )
}

const styles = StyleSheet.create({})