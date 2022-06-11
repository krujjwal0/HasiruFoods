import { StyleSheet, Image } from 'react-native'
import { View, Pressable, Dimensions } from 'react-native'
import React, { useCallback, useState } from 'react'
import MetropolisText from 'MetropolisText'
import AddToCartIcon from '../../../../components/icons/AddToCartIcon'
import SubscribeIcon from '../../../../components/icons/SubscribeIcon'
import ProductButton from './ProductButton'
import ArrowTopRight from '../../../../components/icons/ArrowTopRight'

const ProductCard = ({ item, navigation }) => {
  const handleSubscriptionPress = useCallback(() => {
    navigation.navigate('SubscriptionConfigScreen', item)
  }, [])
  const handleCartPress = useCallback(() => {}, [])
  const navigateToProductPage = useCallback(() => {
    navigation.navigate('ProductScreen', item)
  }, [])

  const isOffer = item.offer !== ''

  const displayTextMarginBottom = {
    marginBottom: item.extraSpace ? item.extraSpace : -20,
    marginBottom: -20,
  }

  const bottomNavMarginTop = {
    marginTop: item.extraSpace ? -item.extraSpace : -30,
    marginTop: -30,
  }

  const backgroundColor = {
    backgroundColor: item.bgColor,
  }
  return (
    <>
      <View style={[backgroundColor, styles.root]}>
        {/* Top Nav */}
        <View style={[styles.topNav]}>
          <Pressable
            android_ripple={{
              color: item.bgColor,
              foreground: true,
            }}
            onPress={navigateToProductPage}
            style={styles.pressableTopRight}>
            <ArrowTopRight />
          </Pressable>
        </View>
        {/* Display */}
        <View style={styles.display}>
          <View style={[displayTextMarginBottom, styles.displayText]}>
            {isOffer && (
              <MetropolisText bold style={styles.offer}>
                {item.offer}
              </MetropolisText>
            )}
            <MetropolisText bold style={styles.name}>
              {item.name}
            </MetropolisText>
          </View>
          <Image style={styles.image} source={item.source} />
        </View>
        {/* Bottom Nav */}
        <View style={[bottomNavMarginTop, styles.bottomNav]}>
          <ProductButton
            title={'Subscribe'}
            label={item.subscriptionPrise + '/KG'}
            Icon={SubscribeIcon}
            bgColor={item.bgColor}
            onPress={handleSubscriptionPress}
          />
          <ProductButton
            title={'Subscribe'}
            label={item.prise + '/KG'}
            Icon={AddToCartIcon}
            bgColor={item.bgColor}
            onPress={handleCartPress}
          />
        </View>
      </View>
    </>
  )
}
function getWidth() {
  const width = Dimensions.get('window').width

  return width - 20
}

const styles = StyleSheet.create({
  root: {
    marginBottom: 30,
    paddingTop: 30,
    borderRadius: 30,
  },
  display: {
    alignItems: 'center',
  },
  displayText: {
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    color: '#fff',
  },
  offer: {
    fontSize: 20,
    color: '#fff',
  },
  image: {
    width: getWidth() / 1.2,
    height: getWidth() / 1.4,
  },
  topNav: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: 13,
    right: 13,
  },
  pressableTopRight: {
    overflow: 'hidden',
    borderRadius: 50,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 13,
  },
})

export default ProductCard
