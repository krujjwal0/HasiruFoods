import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useCallback } from 'react'
import AddCircleIcon from '_icons/AddCircleIcon'
import MetropolisText from 'MetropolisText'
import theme from 'theme'

const AddNewButton = () => {
  const handleOnPress = useCallback(() => {}, [])

  return (
    <Pressable
      android_ripple={{ color: theme.color.rippleGray, foreground: true }}
      style={styles.pressable}
      onPress={handleOnPress}>
      <AddCircleIcon fill={theme.color.boldGray} />
      <MetropolisText semiBold style={[styles.pressableText]}>
        Add New
      </MetropolisText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    paddingVertical: 0,
    paddingRight: 7,
    borderRadius: 19,
    overflow: 'hidden',
    flexDirection: 'row',
    marginRight: 'auto',
  },
  pressableText: {
    fontSize: 16,
    marginLeft: 10,
  },
})

export default AddNewButton
