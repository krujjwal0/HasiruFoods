import { StyleSheet, Pressable, View } from 'react-native'
import React from 'react'
import { useCallback } from 'react'
import MetropolisText from 'MetropolisText'
import theme from 'theme'
import AddNewButton from './AddNewButton'
import WalletCard from './WalletCard'
import { localStyles } from './style'
import { useNavigation } from '@react-navigation/native'

const CashOnDelivery = () => {
  const navigation = useNavigation()
  const handleOnPress = useCallback(() => {
    navigation.navigate({ name: 'OrderSuccess' })
  }, [])

  return (
    <View style={styles.root}>
      <MetropolisText semiBold style={[localStyles.title, styles.title]}>
        Cash On Delivery
      </MetropolisText>
      <Pressable
        android_ripple={{ color: theme.color.rippleGray, foreground: true }}
        style={styles.pressable}
        onPress={handleOnPress}>
        <MetropolisText semiBold style={[styles.pressableText]}>
          Continue
        </MetropolisText>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
  },
  WalletIdContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  pressable: {
    backgroundColor: theme.color.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    paddingVertical: 10,
    borderRadius: 19,
    overflow: 'hidden',
    marginLeft: 15,
  },
  pressableText: {
    fontSize: 16,
    color: '#FFF',
  },
})

export default CashOnDelivery
