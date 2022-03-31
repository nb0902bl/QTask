import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../components/HomeScreen'
import SecondScreen from '../components/SecondScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
        {/*<Stack.Navigator>*/}
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Detail" component={SecondScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
      )
}

export default Navigation