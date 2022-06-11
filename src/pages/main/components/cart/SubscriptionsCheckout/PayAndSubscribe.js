import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useCallback } from 'react'
import theme from 'theme'
import MetropolisText from 'MetropolisText'
import { useNavigation } from '@react-navigation/native'

const PayAndSubscribe = () => {
  const navigation = useNavigation()
  const handleOnPress = useCallback(() => {
    navigation.navigate({ name: 'SubscriptionSuccess' })
  }, [])
  return (
    <Pressable
      android_ripple={{ color: theme.color.rippleGray, foreground: true }}
      style={styles.root}
      onPress={handleOnPress}>
      <MetropolisText semiBold style={styles.text}>
        Pay & Subscribe
      </MetropolisText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 16,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    color: '#FFF',
  },
})

export default PayAndSubscribe
