import { StyleSheet, Pressable, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import theme from 'theme'
import TabButton from './TabButton'

const TabBar = ({ onPress }) => {
  const route = useRoute()

  const isOrdersPage = route.name.toLowerCase() === 'orders'
  const isSubscriptionPage = route.name.toLowerCase() === 'subscription'
  return (
    <View style={styles.root}>
      <TabButton isActive={isOrdersPage} label="Orders" to="Orders" left />
      <TabButton
        isActive={isSubscriptionPage}
        label="Subscription"
        to="Subscription"
        right
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 15,
    paddingTop: 20,
    marginTop: theme.element.headerHeight,
    backgroundColor: '#fff',
  },
})

export default TabBar
