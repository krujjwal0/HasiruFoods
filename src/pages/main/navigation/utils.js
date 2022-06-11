import React from 'react'
import { Dimensions, Animated, TouchableOpacity } from 'react-native'
import { useRef, useCallback } from 'react'
import theme from 'theme'
import MenuButton from '../components/MenuButton'
import WalletIcon from '_icons/menu/WalletIcon'
import UpcomingDeliveriesIcon from '_icons/menu/UpcomingDeliveriesIcon'
import ActiveOrdersIcon from '_icons/menu/ActiveOrdersIcon'
import ManageSubscriptionsIcon from '_icons/menu/ManageSubscriptionsIcon'
import OrderHistoryIcon from '_icons/menu/OrderHistoryIcon'
import SubscriptionIcon from '_icons/menu/SubscriptionIcon'
import HasiruFeatureIcon from '_icons/menu/HasiruFeatureIcon'
import LogoutIcon from '_icons/menu/LogoutIcon'
import ContactIcon from '_icons/menu/ContactIcon'
import CouponIcon from '_icons/menu/CouponIcon'

export const showBarMargin = {
  home: 40,
  shop: getWidth() + 42,
  reward: getWidth() * 2 + 52,
  cart: getWidth() * 3 + 57,
  remove: getWidth() * 5 + 57,
}

export const index = {
  home: 0,
  shop: 1,
  reward: 2,
  cart: 3,
}

export function getWidth() {
  const width = Dimensions.get('window').width
  return width / 4
}

export const useTabOffsetValue = () => {
  const tabOffsetValue = useRef(new Animated.Value(showBarMargin.home)).current
  const handleShowBallTranslateX = useCallback(
    toValue => {
      Animated.spring(tabOffsetValue, {
        toValue: toValue,
        useNativeDriver: true,
      }).start()
    },
    [Animated, tabOffsetValue],
  )
  const translateX = {
    transform: [{ translateX: tabOffsetValue }],
  }
  return { translateX, handleShowBallTranslateX }
}

export const useTabLink = (navigation, descriptors, state) => {
  const TabLinkMapping = useCallback(
    (route, index) => {
      if (index <= 3) {
        const { options } = descriptors[route.key]

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented)
            navigation.navigate({ name: route.name, merge: true })
          // The `merge: true` option makes sure that the params inside the tab screen are preserved
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Animated.Text
              style={[
                {
                  color: isFocused ? theme.color.primary : theme.color.black,
                  fontFamily: 'Metropolis-Medium',
                  fontSize: 19,
                },
              ]}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        )
      }
    },
    [navigation, descriptors, state],
  )
  return TabLinkMapping
}

export const useMenuLink = (
  navigation,
  descriptors,
  state,
  handleToggleMenuBar,
) => {
  const MenuLinkMapping = useCallback(
    (route, index) => {
      if (index >= 4) {
        const { options } = descriptors[route.key]

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          // The `merge: true` option makes sure that the params inside the tab screen are preserved
          if (!isFocused && !event.defaultPrevented)
            navigation.navigate({ name: route.name, merge: true })
            
          handleToggleMenuBar()
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        const Icon =
          label === 'manage subscriptions'
            ? SubscriptionIcon
            : label === 'hasiru wallet'
            ? WalletIcon
            : label === 'active orders'
            ? ActiveOrdersIcon
            : label === 'archived orders'
            ? OrderHistoryIcon
            : label === 'upcoming deliveries'
            ? UpcomingDeliveriesIcon
            : label === 'apply coupon'
            ? CouponIcon
            : ''

        const IndexOfSpace = label.indexOf(' ')

        return (
          <MenuButton
            Icon={Icon}
            label={label.slice(0, IndexOfSpace)}
            subLabel={label.slice(IndexOfSpace, label.length)}
            key={index}
            isFocused={isFocused}
            onPress={onPress}
          />
        )
      }
    },
    [navigation, descriptors, state],
  )
  return MenuLinkMapping
}
