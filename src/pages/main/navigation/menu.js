import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { BlurView } from '@react-native-community/blur'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { Dimensions, StyleSheet, View } from 'react-native'
import { useCallback, useImperativeHandle } from 'react'
import { useAnimatedStyle, withSpring } from 'react-native-reanimated'
import Animated, { useSharedValue } from 'react-native-reanimated'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const MAX_TRANSLATE_Y = SCREEN_HEIGHT + 350

export const menuPreset = {
  menuClosePosition: 0,
  menuOpenPosition: MAX_TRANSLATE_Y,
}

const Menu = ({ children }, ref) => {
  const translateY = useSharedValue(0)
  const active = useSharedValue(false)

  const scrollTo = useCallback(destination => {
    'worklet'
    active.value = destination !== 0

    translateY.value = withSpring(destination, {
      damping: 17,
      mass: 1.5,
    })
  }, [])

  const isActive = useCallback(() => {
    return active.value
  }, [])

  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [scrollTo, isActive])

  const context = useSharedValue({ y: 0 })

  // Pan gesture handler
  const handlePanGesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value }
    })
    .onUpdate(event => {
      if (translateY.value < MAX_TRANSLATE_Y + 250) {
        translateY.value = event.translationY + context.value.y
        translateY.value = Math.max(translateY.value, -MAX_TRANSLATE_Y)
      }
    })
    .onEnd(() => {
      if (translateY.value > MAX_TRANSLATE_Y) {
        scrollTo(MAX_TRANSLATE_Y)
      } else if (translateY.value < MAX_TRANSLATE_Y) {
        scrollTo(0)
      }
    })

  const rMenuStyle = useAnimatedStyle(() => {
    const borderRadius = 5

    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    }
  })

  return (
    <GestureDetector gesture={handlePanGesture}>
      <Animated.View style={[styles.menuContainer, rMenuStyle, styles.shadow]}>
        <BlurView
          blurRadius={25}
          downsampleFactor={5}
          overlayColor={'transparent'}
          blurType="light"
          blurAmount={25}
          style={styles.blurContainer}>
          <LinearGradient
            colors={['#fff', '#fffe', '#fffe', '#fff2']}
            style={styles.linearGradient}
          />
        </BlurView>
        <View style={styles.main}>
          {children}
          <View style={styles.line} />
        </View>
      </Animated.View>
    </GestureDetector>
  )
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  menuContainer: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    position: 'absolute',
    bottom: SCREEN_HEIGHT,
  },
  blurContainer: {
    flex: 1,
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'transparent',
  },
  linearGradient: {
    flex: 1,
  },
  line: {
    width: 75,
    height: 4,
    // backgroundColor: 'gray',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 2,
  },
  shadow: {
    shadowColor: '#5E9C4290',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.5,
    elevation: 10,
  },
})

export default React.forwardRef(Menu)
