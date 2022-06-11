import { StyleSheet, Image, ScrollView, SafeAreaView, View } from 'react-native'
import React from 'react'
import theme from 'theme'
import MetropolisText from 'MetropolisText'
import DaysPicker from '../../components/Subscription/DaysPicker'
import ProductSmallCard from '../../components/Subscription/SubscriptionConfig/ProductSmallCard'
import SelectQuantity from '../../components/Subscription/SubscriptionConfig/SelectQuantity'
import SelectAddress from '../../components/Subscription/SubscriptionConfig/SelectAddress'

const SubscriptionConfigScreen = ({ navigation, route }) => {
  const item = route.params
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <MetropolisText medium style={styles.title}>
          Subscriptions
        </MetropolisText>
        <ProductSmallCard item={item} />
        <SelectQuantity />
        <SelectAddress />
        <DaysPicker color={item.bgColor} />
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    marginTop: theme.element.headerHeight,
  },
  container: {
    flex: 1,
    margin: 15,
    paddingTop: 10,
  },
  text: {
    fontSize: 42,
  },
  title: {
    fontSize: 20,
    backgroundColor: theme.color.primary,
    color: '#fff',
    lineHeight: 35,
    paddingHorizontal: 12,
    alignSelf: 'center',
    borderRadius: 14,
    marginBottom: 20,
  },
})

export default SubscriptionConfigScreen
