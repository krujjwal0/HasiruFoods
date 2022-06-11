import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MetropolisText from 'MetropolisText'
import OrderSuccessIcon from '_icons/OrderSuccessIcon.svg'

const OrderSuccessScreen = () => {
  return (
    <View style={styles.root}>
      <MetropolisText semiBold style={styles.title}>
        Yay! Order Successful!
      </MetropolisText>
      <OrderSuccessIcon style={styles.icon} />
      <MetropolisText style={styles.small}>
        Your Order will be delivered to
      </MetropolisText>
      <MetropolisText semiBold style={styles.strong}>
        Home on Tue, 23 June between 8.30 - 9.00 A.M
      </MetropolisText>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
    paddingTop: 0,
    alignItems: 'center',
  },
  icon: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 20,
  },
  small: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 16,
  },
  strong: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
})

export default OrderSuccessScreen
