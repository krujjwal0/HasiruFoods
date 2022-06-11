import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PaymentScreen from './screens/payment.screen'
import CheckoutScreen from './screens/checkout.screen'
import TabBar from '../../components/cart/TabBar'
import OrderSuccessScreen from './screens/OrderSuccess.screen'

const Stack = createStackNavigator()

const Orders = () => {
  const screenOptions = {
    headerShown: false,
  }
  return (
    <>
      <TabBar />
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
      </Stack.Navigator>
    </>
  )
}

export default Orders
