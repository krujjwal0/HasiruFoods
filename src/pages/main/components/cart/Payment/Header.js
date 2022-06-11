import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MetropolisText from 'MetropolisText'

const Header = () => {
  return (
    <View style={styles.root}>
      <MetropolisText medium style={styles.text}>
        Select Payment Method
      </MetropolisText>
      <MetropolisText medium style={[styles.text, styles.marginTop]}>
        Top-up $365 to place the order
      </MetropolisText>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
  },
  marginTop: {
    marginTop: 8,
  },
})

export default Header
