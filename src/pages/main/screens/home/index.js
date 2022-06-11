import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './home.screen'
import ArticleScreen from './Article.screen'

const Stack = createStackNavigator()

const Home = () => {
  const screenOptions = {
    headerShown: false,
  }
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ArticleScreen" component={ArticleScreen} />
    </Stack.Navigator>
  )
}

export default Home
