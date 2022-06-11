import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PaymentScreen from './screens/payment.screen'
import CheckoutScreen from './screens/checkout.screen'
import TabBar from '../../components/cart/TabBar'
import SubscriptionsCheckoutScreen from './screens/subscriptionsCheckout.screen'
import SubscriptionSuccessScreen from './screens/subscriptionSuccess.screen'

const Stack = createStackNavigator()

const Subscription = () => {
  const screenOptions = {
    headerShown: false,
  }
  return (
    <>
      <TabBar />
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="SubscriptionsCheckout" component={SubscriptionsCheckoutScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="SubscriptionSuccess" component={SubscriptionSuccessScreen} />
      </Stack.Navigator>
    </>
  )
}

export default Subscription
