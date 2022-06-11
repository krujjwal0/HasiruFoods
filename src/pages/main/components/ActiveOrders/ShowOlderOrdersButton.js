import { StyleSheet, Pressable, View } from 'react-native'
import React from 'react'
import { useCallback } from 'react'
import MetropolisText from 'MetropolisText'
import theme from 'theme'

const ShowOlderOrdersButton = ({ item }) => {
  const handleOnPress = useCallback(() => {}, [])

  return (
    <Pressable
      android_ripple={{ color: theme.color.rippleGray, foreground: true }}
      style={[styles.pressable]}
      onPress={handleOnPress}>
      <MetropolisText semiBold style={styles.text}>
        Show my older orders
      </MetropolisText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: theme.color.gray + '55',
    padding: 15,
    borderRadius: 16,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  text: {
    fontSize: 19,
    textAlign: 'center',
  },
})

export default ShowOlderOrdersButton
