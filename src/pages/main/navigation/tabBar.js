// Libraries ----------------------------------------------------------
import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native'
import theme from 'theme'

// Components / Utils -------------------------------------------------
import Header from './header'
import Nav from './nav'

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={[styles.root, styles.shadow]}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header {...{ state, descriptors, navigation }} />
      <Nav {...{ state, descriptors, navigation }} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    padding: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 10,
    backgroundColor: '#fff',
    top: 0,
    position: 'absolute',
    width: '100%',
    height: theme.element.headerHeight,
  },
  shadow: {
    shadowColor: '#5E9C4255',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
})

export default TabBar
