import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import MetropolisText from 'MetropolisText'
import theme from 'theme'

const AddressCard = ({ onPress, item }) => {
  return (
    <Pressable
      android_ripple={{ color: theme.color.rippleGray, foreground: true }}
      style={styles.main}
      onPress={onPress}>
      <MetropolisText semiBold style={styles.addressType}>
        {item.addressType}
      </MetropolisText>
      <MetropolisText medium style={styles.address}>
        {item.address}
      </MetropolisText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.color.gray,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 25,
    justifyContent: 'center',
    flex: 1,
    overflow: 'hidden',
  },
  addressType: {
    fontSize: 20,
  },
  address: {
    fontSize: 18,
    lineHeight: 23,
    marginTop: 7,
  },
})

export default AddressCard
