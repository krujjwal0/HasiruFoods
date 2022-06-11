import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useCallback } from 'react'
import EditIcon from '_icons/EditIcon'
import CloseIcon from '_icons/CloseIcon'
import AddIcon from '_icons/AddIcon'
import MetropolisText from 'MetropolisText'
import SmallProductCard from './SmallProductCard'
import theme from 'theme'
import AddModal from './AddModal'

const DeliveryCard = ({}) => {
  const handleOnEdit = useCallback(() => {}, [])
  const handleOnClose = useCallback(() => {}, [])

  return (
    <View style={styles.root}>
      <AddModal />
      <View style={styles.top}>
        <View style={styles.labelView}>
          <MetropolisText medium style={styles.timeText}>
            June 16 (6.A.M)
          </MetropolisText>
        </View>
        <View style={styles.nav}>
          <TouchableOpacity onPress={handleOnEdit} style={[styles.navIcon]}>
            <EditIcon />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleOnClose}
            style={[styles.navIcon, styles.marginLeft]}>
            <CloseIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>
        <SmallProductCard
          item={{
            id: 1,
            offer: '',
            name: 'Millet Dosa Batter',
            cta: 'Kick-start a Healthy Life!',
            subCta:
              'Enjoy perfectly natural and healthy dosas with this traditional recepie.',
            subscriptionPrise: '$85',
            ingredientsSrc: require('_assets/images/Ingredients/ingredient_millet.png'),
            prise: '$99',
            extraSpace: 0,
            bgColor: '#E74C22',
            source: require('_assets/images/Millet-Dosa-Batter/milletDosaBatter-3x.png'),
            quantity: 1,
            status: 'active',
          }}
        />
        <SmallProductCard
          item={{
            id: 1,
            offer: '',
            name: 'Millet Dosa Batter',
            cta: 'Kick-start a Healthy Life!',
            subCta:
              'Enjoy perfectly natural and healthy dosas with this traditional recepie.',
            subscriptionPrise: '$85',
            ingredientsSrc: require('_assets/images/Ingredients/ingredient_millet.png'),
            prise: '$99',
            extraSpace: 0,
            bgColor: '#E74C22',
            source: require('_assets/images/Millet-Dosa-Batter/milletDosaBatter-3x.png'),
            quantity: 1,
            status: 'active',
          }}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleOnClose}>
          <AddIcon />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: theme.color.gray + 99,
    borderRadius: 18,
    marginTop: 18,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  labelView: {
    flexDirection: 'row',
    marginRight: 'auto',
  },
  timeText: {
    fontSize: 17,
  },
  nav: {
    flexDirection: 'row',
    alignItem: 'center',
  },
  main: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItem: 'center',
    flexWrap: 'wrap',
  },
  addButton: {
    justifyContent: 'center',
    marginLeft: 14,
  },
  navIcon: {
    justifyContent: 'center',
    alignItem: 'center',
    // backgroundColor: '#000',
  },
  marginLeft: {
    marginLeft: 5,
  },
})

export default DeliveryCard
