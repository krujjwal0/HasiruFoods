// Library
import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native'
import { useState } from 'react'
import React from 'react'

// Component / Utils
import {
  nextDayData,
  sameDayData,
} from '../../../components/cart/TimeSlot/data'
import SlotSectionButton from '../../../components/cart/TimeSlot/SlotSectionButton'
import TimeSlot from '../../../components/cart/TimeSlot/TimeSlot'
import Header from '../../../components/cart/Header'
import ForEach from 'ForEach'
import theme from 'theme'
import TabBar from '../../../components/cart/TabBar'
import DeliverToSelect from '../../../components/cart/Checkout/DeliverToSelect'
import MetropolisText from 'MetropolisText'
import CartList from '../../../components/cart/Checkout/CartList'
import { getDimension } from '../../../utils/getDimensions'
import { checkoutData } from '../../../components/cart/Checkout/data'
import BillList from '../../../components/cart/Checkout/BillList'
import PaymentBar from 's../../../components/cart/Checkout/PaymentBar'

const CheckoutScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <DeliverToSelect defaultValue={checkoutData.deliverTo} />
        <MetropolisText medium style={styles.timeSlot}>
          {checkoutData.timeSlot}
        </MetropolisText>
        <CartList cart={checkoutData.cart} />
        <BillList bill={checkoutData.bill} />
        <PaymentBar />
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
  timeSlot: {
    fontSize: 16,
  },
})

export default CheckoutScreen
