import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MetropolisText from 'MetropolisText'
import theme from 'theme'

const BillList = ({ bill }) => {
  return (
    <View style={styles.root}>
      <View style={styles.startSection}>
        <MetropolisText medium style={styles.startText}>
          Cost: ${bill.cost}
        </MetropolisText>
        <MetropolisText medium style={styles.startText}>
          Delivery: ${bill.delivery}
        </MetropolisText>
        <MetropolisText medium style={styles.startText}>
          Discount: {bill.discount !== 0 && '-'}${bill.discount}
        </MetropolisText>
        <MetropolisText medium style={styles.startText}>
          GST: ${bill.gst}
        </MetropolisText>
        <MetropolisText medium style={styles.startText}>
          SGST: ${bill.sgst}
        </MetropolisText>
        <MetropolisText medium style={styles.startText}>
          Promo Code: {bill.promoCode}
        </MetropolisText>
      </View>
      <View style={styles.endSection}>
        <MetropolisText bold style={styles.total}>
          Total: ${bill.total}
        </MetropolisText>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    zIndex: -1,
  },
  startSection: {},
  startText: {
    fontSize: 16,
    marginBottom: 9,
  },
  endSection: {},
  total: {
    marginTop: -2,
    fontSize: 18,
    color: theme.color.primary,
  },
})

export default BillList
