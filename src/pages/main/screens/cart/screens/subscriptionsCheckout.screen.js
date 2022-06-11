// Library
import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native'
import { useState } from 'react'
import React from 'react'

// Component / Utils
import ForEach from 'ForEach'
import theme from 'theme'
import MetropolisText from 'MetropolisText'
import DeliverToSelect from '../../../components/cart/Checkout/DeliverToSelect'
import CartList from '../../../components/cart/Checkout/CartList'
import { getDimension } from '../../../utils/getDimensions'
import BillList from '../../../components/cart/Checkout/BillList'
import PaymentBar from 's../../../components/cart/Checkout/PaymentBar'
import BalanceCard from '../../../components/cart/SubscriptionsCheckout/BalanceCard'
import ProductCard from '../../../components/cart/SubscriptionsCheckout/ProductCard'
import AddMoreProduct from '../../../components/cart/SubscriptionsCheckout/AddMoreProduct'
import PayAndSubscribe from '../../../components/cart/SubscriptionsCheckout/PayAndSubscribe'

const SubscriptionsCheckoutScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <BalanceCard />
        <MetropolisText medium style={styles.strong}>
          Recharge for a minimum of
          <MetropolisText bold style={styles.strong}>
            $450
          </MetropolisText>
          to begin Subscription
        </MetropolisText>
        <ProductCard
          item={{
            id: 1,
            offer: '',
            name: 'Millet Dosa Batter',
            cta: 'Kick-start a Healthy Life!',
            subCta:
              'Enjoy perfectly natural and healthy dosas with this traditional recepie.',
            subscriptionPrise: '$85',
            ingredientsSrc: require('_assets/images/Ingredients/ingredient_millet.png'),
            prise: '$99',
            extraSpace: 0,
            bgColor: '#E74C22',
            source: require('_assets/images/Millet-Dosa-Batter/milletDosaBatter-3x.png'),
          }}
        />
        <AddMoreProduct />
        <PayAndSubscribe />
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
    paddingTop: 0,
    minHeight: getDimension('h') - (theme.element.headerHeight + 100),
  },
  strong: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
})

export default SubscriptionsCheckoutScreen
