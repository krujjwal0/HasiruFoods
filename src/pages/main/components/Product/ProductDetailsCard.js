import { StyleSheet, Image } from 'react-native'
import { View, Pressable, Dimensions } from 'react-native'
import React, { useCallback, useState } from 'react'
import MetropolisText from 'MetropolisText'
import AddToCartIcon from '_icons/AddToCartIcon'
import SubscribeIcon from '_icons/SubscribeIcon'
import ProductButton from './ProductButton'
import ArrowLeft from '_icons/ArrowLeft'
import theme from 'theme'

const ProductDetailsCard = ({ item, navigation }) => {
  const handleSubscriptionPress = useCallback(() => {
    navigation.navigate('SubscriptionConfigScreen', item)
  }, [])
  const handleCartPress = useCallback(() => {}, [])
  const navigateToShopPage = useCallback(() => {
    navigation.navigate('ShopScreen')
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
    <View>
      <View style={[backgroundColor, styles.root]}>
        {/* Top Nav */}
        <View style={[styles.topNav]}>
          <View>
            <View
              style={{
                position: 'absolute',
              }}></View>
          </View>
          <Pressable
            android_ripple={{
              color: item.bgColor,
              foreground: true,
            }}
            onPress={navigateToShopPage}
            style={{
              borderRadius: 40 / 2,
              width: 40,
              height: 40,
            }}>
            <ArrowLeft />
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
          <View style={styles.displayCta}>
            <MetropolisText bold style={styles.cta}>
              {item.cta}
            </MetropolisText>

            <MetropolisText medium style={styles.subCta}>
              {item.subCta}
            </MetropolisText>
          </View>
          <View style={styles.ingredientsView}>
            <Image
              style={styles.ingredientsImage}
              source={item.ingredientsSrc}
            />
            <View style={styles.ingredientsBottomBar}>
              <MetropolisText semiBold style={styles.ingredientsBottomBarText}>
                No Added Preservative or soda
              </MetropolisText>
            </View>
          </View>
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
    </View>
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
  displayCta: {
    marginTop: -30,
    marginBottom: 55,
    alignItems: 'center',
    marginHorizontal: 13,
  },
  cta: {
    color: '#fff',
    fontSize: 20,
  },
  ingredientsBottomBarText: {
    color: '#fff',
    fontSize: 13,
  },
  ingredientsBottomBar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: getWidth() - 114,
    paddingHorizontal: 3.5,
    paddingVertical: 3.5,
    marginTop: -15,
    marginBottom: 55,
    backgroundColor: theme.color.black,
    borderRadius: 20,
  },
  ingredientsImage: {
    width: getWidth() - 66,
    height: (getWidth() - 66) * 0.4836852589641434,
  },
  ingredientsView: {
    width: getWidth() - 66,
    height: (getWidth() - 66) * 0.4836852589641434,
    marginTop: -20,
    marginBottom: 55,
    alignItems: 'center',
  },
  subCta: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
    lineHeight: 24,
  },
  pressableTopRight: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 13,
  },
})

export default ProductDetailsCard
