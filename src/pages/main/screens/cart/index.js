import React from 'react'
import { useEffect } from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import Orders from './orders.nav'
import Subscription from './subscription.nav'
import TimeSlotScreen from './screens/timeSlot.screen'
import DeliverAddressScreen from './screens/deliverAddress.screen'
import AddNewAddressScreen from './screens/addNewAddress.screen'
import { useRoute } from '@react-navigation/native'
import TabBar from '../../components/cart/TabBar'

const Stack = createStackNavigator()

const Cart = () => {
  const route = useRoute()
  useEffect(() => {
    console.log(route.path)
  }, [])

  const screenOptions = {
    headerShown: false,
  }
  return (
    <>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Subscription" component={Subscription} />
        {/* <Stack.Screen name="Time Slot" component={TimeSlotScreen} />
        <Stack.Screen name="Deliver Address" component={DeliverAddressScreen} />
        <Stack.Screen name="addNewAddress" component={AddNewAddressScreen} /> */}
      </Stack.Navigator>
    </>
  )
}

export default Cart
