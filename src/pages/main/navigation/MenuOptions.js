// Icons --------------------------------------------------
import React from 'react'
import { StyleSheet, View } from 'react-native'

// Icons --------------------------------------------------
import ManageSubscriptionsIcon from '_icons/menu/ManageSubscriptionsIcon'
import OrderHistoryIcon from '_icons/menu/OrderHistoryIcon'
import SubscriptionIcon from '_icons/menu/SubscriptionIcon'
import ActiveOrdersIcon from '_icons/menu/ActiveOrdersIcon'
import HasiruFeatureIcon from '_icons/menu/HasiruFeatureIcon'
import LogoutIcon from '_icons/menu/LogoutIcon'
import ContactIcon from '_icons/menu/ContactIcon'

// Components / utils
import MenuButton from '../components/MenuButton'
import ForEach from 'ForEach'
import { useMenuLink } from './utils'

const MenuOptions = props => {
  const { state, descriptors, navigation, handleToggleMenuBar } = props
  const MenuLinkMapping = useMenuLink(
    navigation,
    descriptors,
    state,
    handleToggleMenuBar,
  )
  // OptionsLists ------------------------------------------
  const OptionsList = [
    {
      Icon: LogoutIcon,
      label: 'Log Out',
      subLabel: '',
      onPress: handleToggleMenuBar,
    },
  ]

  const MenuOptionsMapping = (Item, index) => (
    <MenuButton
      Icon={Item.Icon}
      label={Item.label}
      subLabel={Item.subLabel}
      onPress={Item.onPress}
      key={index}
    />
  )
  return (
    <View style={styles.main}>
      <ForEach data={state.routes} render={MenuLinkMapping} />
      <ForEach data={OptionsList} render={MenuOptionsMapping} />
    </View>
  )
}

export default MenuOptions

const styles = StyleSheet.create({
  main: {
    marginTop: 'auto',
  },
})
