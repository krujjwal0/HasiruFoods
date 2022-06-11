// Library
import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native'
import { useState } from 'react'
import React from 'react'

// Component / Utils
import MetropolisText from 'MetropolisText'
import Header from '../../../components/cart/Payment/Header'
import UPIPaymentSection from '../../../components/cart/Payment/UPIPaymentSection'
import WalletsSection from '../../../components/cart/Payment/WalletsSection'
import CardPaymentSection from '../../../components/cart/Payment/CardPaymentSection'
import NetBankingSection from '../../../components/cart/Payment/NetBankingSection'
import CashOnDelivery from '../../../components/cart/Payment/CashOnDelivery'

const PaymentScreen = () => {
  const [isSameDay, setIsSameDay] = useState(true)

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <Header />
        <UPIPaymentSection />
        <WalletsSection />
        <CardPaymentSection />
        <NetBankingSection />
        <CashOnDelivery />
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    margin: 15,
    paddingTop: 5,
    marginTop: 0,
  },
  nav: {
    flexDirection: 'row',
    paddingVertical: 15,
    marginTop: 6,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
})

export default PaymentScreen
