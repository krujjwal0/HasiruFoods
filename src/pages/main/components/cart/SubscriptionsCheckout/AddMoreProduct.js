import { StyleSheet, Pressable, View } from 'react-native'
import React from 'react'
import { useCallback } from 'react'
import theme from 'theme'
import MetropolisText from 'MetropolisText'

const AddMoreProduct = () => {
  const handleOnPress = useCallback(() => {}, [])
  return (
    <Pressable
      android_ripple={{ color: theme.color.rippleGray, foreground: true }}
      style={styles.root}
      onPress={handleOnPress}>
      <MetropolisText semiBold style={styles.text}>
        Add more products
      </MetropolisText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.color.gray + 99,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginTop: 15,
    paddingVertical: 15,
    borderRadius: 18,
    overflow: 'hidden',
  },
  text: {
    fontSize: 19,
  },
})

export default AddMoreProduct
