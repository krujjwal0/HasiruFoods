import React from 'react'
import ShopScreen from './shop.screen'

import { createStackNavigator } from '@react-navigation/stack'
import ProductScreen from './product.screen'
import SubscriptionConfigScreen from './subscriptionConfig.screen'

const Stack = createStackNavigator()

const Shop = () => {
  const screenOptions = {
    headerShown: false,
  }
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="ShopScreen" component={ShopScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="SubscriptionConfigScreen" component={SubscriptionConfigScreen} />
    </Stack.Navigator>
  )
}

export default Shop
