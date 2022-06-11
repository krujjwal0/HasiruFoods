import MetropolisText from 'MetropolisText'
import React from 'react'
import { ScrollView, SafeAreaView, StyleSheet, View } from 'react-native'
import theme from 'theme'
import CouponCard from '../components/ApplyCoupon/CouponCard'
import ArchivedOrderCard from '../components/ArchivedOrders/ArchivedOrderCard'
import AddMoneyToWalletButton from '../components/HasiruWallet/AddMoneyToWalletButton'
import BalanceCard from '../components/HasiruWallet/BalanceCard'
import CashCard from '../components/HasiruWallet/CashCard'

const ApplyCouponScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <MetropolisText medium style={styles.title}>
          Apply Coupon
        </MetropolisText>
        <CouponCard />
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
  title: {
    fontSize: 20,
    marginTop: 0,
    marginLeft: 0,
    alignSelf: 'center',
  },
  text: {
    marginTop: 14,
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  offerSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rewardSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  cashPresetContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  marginTop: {
    marginTop: 30,
  },
})

export default ApplyCouponScreen
