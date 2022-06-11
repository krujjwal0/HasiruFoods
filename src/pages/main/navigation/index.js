// Libraries ----------------------------------------------------------
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens ------------------------------------------------------------
import HomeScreen from '../screens/home'
import ShopScreen from '../screens/shop'
import RewardScreen from '../screens/reward/reward.screen'
import CartScreen from '../screens/cart'

// Components / Utils -------------------------------------------------
import TabBar from './tabBar'
import ManageSubscriptionsScreen from '../screens/manageSubscriptions.screen'
import UpcomingDeliveriesScreen from '../screens/upcomingDeliveries.screen'
import ActiveOrdersScreen from '../screens/activeOrders.screen'
import HasiruWalletScreen from '../screens/hasiruWallet.screen'
import ArchivedOrdersScreen from '../screens/archivedOrders.screen'
import ApplyCouponScreen from '../screens/applyCoupon.screen'


const Tab = createBottomTabNavigator()

const Navigation = () => {
  const tabBarComponent = props => <TabBar {...props} />

  const screenOptions = {
    headerShown: false,
  }

  return (
    <Tab.Navigator tabBar={tabBarComponent} screenOptions={screenOptions}>
      {/* ---------------------- Home --------------------- */}
      <Tab.Screen name="home" component={HomeScreen} />

      {/* ---------------------- Shop --------------------- */}
      <Tab.Screen name="shop" component={ShopScreen} />

      {/* --------------------- Reward -------------------- */}
      <Tab.Screen name="reward" component={RewardScreen} />

      {/* ---------------------- Cart --------------------- */}
      <Tab.Screen name="cart" component={CartScreen} />
      <Tab.Screen 
        // options={{tabBarIcon:}} 
        name="manage subscriptions" component={ManageSubscriptionsScreen} />
      <Tab.Screen name="upcoming deliveries" component={UpcomingDeliveriesScreen} />
      <Tab.Screen name="hasiru wallet" component={HasiruWalletScreen} />
      <Tab.Screen name="archived orders" component={ArchivedOrdersScreen} />
      <Tab.Screen name="apply coupon" component={ApplyCouponScreen} />
      <Tab.Screen name="active orders" component={ActiveOrdersScreen} />
    </Tab.Navigator>
  )
}

export default Navigation
