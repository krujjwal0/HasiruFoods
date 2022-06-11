// Libraries ----------------------------------------------------------
import React from 'react'
import { useRef, useCallback } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// Components / Utils -------------------------------------------------
import Logo from '_icons/Logo.js'
import Avatar from '../../../components/icons/Avatar'
import MenuIcon from '../../../components/icons/MenuIcon'
import Menu, { menuPreset } from './menu'
import MenuOptions from './MenuOptions'
import theme from 'theme'
import MetropolisText from 'MetropolisText'

const Header = ({ state, descriptors, navigation }) => {
  const ref = useRef(null)

  const handleToggleMenuBar = useCallback(() => {
    const isActive = ref?.current?.isActive()
    const scrollTo = ref?.current?.scrollTo

    if (isActive) scrollTo(menuPreset.menuClosePosition)
    else scrollTo(menuPreset.menuOpenPosition)
  }, [])

  return (
    <>
      {/* Menu */}
      <Menu ref={ref}>
        <MenuOptions
          {...{ state, descriptors, navigation }}
          handleToggleMenuBar={handleToggleMenuBar}
        />
      </Menu>
      {/* Main */}
      <View style={styles.root}>
        <TouchableOpacity onPress={handleToggleMenuBar}>
          <MenuIcon />
        </TouchableOpacity>
        <Logo />
        <View style={styles.main}>
          <MetropolisText bold style={styles.greeting}>
            Hi, Sharanya !
          </MetropolisText>
          <TouchableOpacity>
            <Avatar />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    zIndex: 900,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 12,
    paddingBottom: 12,
  },
  logo: {
    marginLeft: 5,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greeting: {
    fontSize: 18,
    marginRight: 10,
    color: theme.color.black,
  },
})

export default Header
