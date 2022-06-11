import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useCallback } from 'react'
import MetropolisText from 'MetropolisText'
import theme from 'theme'

const CashCard = ({ label, left, right, mid }) => {
  const handleOnPress = useCallback(() => {}, [])
  return (
    <Pressable
      android_ripple={{ color: theme.color.rippleGray, foreground: true }}
      style={[
        styles.pressable,
        left && styles.left,
        mid && styles.mid,
        right && styles.right,
      ]}
      onPress={handleOnPress}>
      <MetropolisText medium style={[styles.text]}>
        {label}
      </MetropolisText>
    </Pressable>
  )
}

export default CashCard

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: theme.color.gray + 'aa',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    paddingVertical: 14,
    borderRadius: 14,
    overflow: 'hidden',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
  },
  left: {
    marginRight: 10,
  },
  right: {
    marginLeft: 10,
  },
  mid: {
    marginRight: 10,
    marginLeft: 10,
  },
})
