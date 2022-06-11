import React from 'react'
import MetropolisText from 'MetropolisText'
import { useCallback } from 'react'
import { StyleSheet, Pressable, View } from 'react-native'
import theme from 'theme'
import { useNavigation } from '@react-navigation/native'

const PaymentBar = () => {
  const navigation = useNavigation()
  
  const handleOnPress = useCallback(() => {
    navigation.navigate({ name: 'Payment' })
  }, [])

  return (
    <View style={styles.root}>
      <View style={styles.display}>
        <MetropolisText semiBold style={styles.label}>
          Total Balance
        </MetropolisText>
        <MetropolisText bold style={styles.balance}>
          $0
        </MetropolisText>
      </View>
      <Pressable
        android_ripple={{ color: theme.color.rippleGray, foreground: true }}
        style={styles.pressable}
        onPress={handleOnPress}>
        <MetropolisText semiBold style={[styles.pressableText]}>
          Pay
        </MetropolisText>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 17,
    shadowColor: '#5E9C42ff',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.85,
    shadowRadius: 6.5,
    elevation: 10,
  },
  display: {
    alignItems: 'center',
  },
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

export default PaymentBar
