import React from 'react'
import MetropolisText from 'MetropolisText'
import { StyleSheet, View } from 'react-native'
import theme from 'theme'

const BalanceCard = () => {
  return (
    <View style={styles.root}>
      <MetropolisText semiBold style={styles.label}>
        Total Balance
      </MetropolisText>
      <MetropolisText bold style={styles.balance}>
        $0
      </MetropolisText>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 17,

    shadowColor: '#5E9C42aa',
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowOpacity: 0.85,
    shadowRadius: 6.5,
    elevation: 10,
  },
  display: {},
  label: {
    fontSize: 20,
  },
  balance: {
    fontSize: 30,
    color: theme.color.primary,
  },
  pressable: {
    backgroundColor: theme.color.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    paddingVertical: 20,
    borderRadius: 14,
    overflow: 'hidden',
    marginLeft: 20,
  },
  pressableText: {
    fontSize: 20,
    color: '#FFF',
  },
})

export default BalanceCard
