// Libraries ----------------------------------------------------------
import React from 'react'
import { useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native'

// Components / Utils -------------------------------------------------
import { index, useTabLink, useTabOffsetValue } from './utils'
import { showBarMargin } from './utils'
import theme from 'theme'
import ForEach from 'ForEach'

const Nav = props => {
  const { state, descriptors, navigation } = props
  const TabLinkMapping = useTabLink(navigation, descriptors, state)
  const { translateX, handleShowBallTranslateX } = useTabOffsetValue()

  useEffect(() => {
    const { home, shop, reward, cart, remove } = showBarMargin
    const selectedIndex = state.index

    if (selectedIndex === index.home) handleShowBallTranslateX(home)
    else if (selectedIndex === index.shop) handleShowBallTranslateX(shop)
    else if (selectedIndex === index.reward) handleShowBallTranslateX(reward)
    else if (selectedIndex === index.cart) handleShowBallTranslateX(cart)
    else handleShowBallTranslateX(remove)
  }, [state.index])

  return (
    <View style={styles.root}>
      <ForEach data={state.routes} render={TabLinkMapping} />
      <Animated.View style={[translateX, styles.showBall]} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#FFF',
    paddingLeft: 15,
    paddingRight: 15,
    zIndex: -10,
  },
  showBall: {
    position: 'absolute',
    bottom: 1,
    width: 4.5,
    height: 4.5,
    backgroundColor: theme.color.primary,
    borderRadius: 4.5 / 2,
  },
})

export default Nav
