import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import MetropolisText from 'MetropolisText'
import theme from 'theme'

const AddNewAddressButton = ({ onPress }) => {
  return (
    <Pressable
      android_ripple={{ color: theme.color.rippleGray, foreground: true }}
      style={styles.main}
      onPress={onPress}>
      <MetropolisText semiBold style={styles.text}>
        Add New
      </MetropolisText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.color.primary,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginVertical: 22,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,    overflow: 'hidden'

  },
  text: {
    fontSize: 22,
    color: '#FFF',
  },
})

export default AddNewAddressButton
